const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('../config/defaultConfig.js')
const mime = require('../helper/mime.js');
const compress = require('./compress.js');


//  读出模板
const source = fs.readFileSync(path.resolve(__dirname,'../','template/dir.tpl')).toString();
let template = Handlebars.compile(source)

module.exports = async function (filePath,req,res) {
    try {
        let result = await stat(filePath);

        if(result.isFile()) {
            res.statusCode = 200;
            res.setHeader('Content-Type',mime(filePath));
            let rs = fs.createReadStream(filePath);
            if (filePath.match(config.compress)) {
                rs = compress(rs, req, res)
            }
            console.log(config.compress)
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