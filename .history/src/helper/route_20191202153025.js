const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
// const config = require('../config/defaultConfig.js')
const mime = require('../helper/mime.js');
const compress = require('./compress.js');
const range = require('../helper/range');
const cache = require('../helper/cache')


//  读出模板
const source = fs.readFileSync(path.resolve(__dirname,'../','template/dir.tpl')).toString();
let template = Handlebars.compile(source)

module.exports = async function (filePath,req,res, config) {
    try {
        let result = await stat(filePath);

        if(result.isFile()) {
            res.statusCode = 200;
            res.setHeader('Content-Type',mime(filePath));

            if(!cache (result, req, res)) {
                res.statusCode = 304;
                res.end()
                return
            }

            let rs;

            let { code, start, end } = range(result.size, req, res)

            if(code === 200) {
                rs = fs.createReadStream(filePath)
            } else {
                res.setHeader('Accept-Ranges','bytes')
                res.setHeader('Content-Range',`bytes ${start}-${end}/${totalSize}`)
                res.setHeader('Content-length',end - start)

                rs = fs.createReadStream(filePath,{
                    start,
                    end
                })
            }
            if (filePath.match(config.compress)) {
                rs = compress(rs, req, res)
            }
            rs.pipe(res)
        } else if (result.isDirectory()) {

            const files = await readdir(filePath)
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');

            const dir = path.relative(config.root,filePath)

            const data = {
                title: path.basename(filePath),
                dir: dir ? `/${dir}` : '',
                files
            }
            res.end(template(data))
        }

    }catch(e) {
        console.log(e)
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end(`${ filePath } is not a directory or file`)
        return;
    }
}
