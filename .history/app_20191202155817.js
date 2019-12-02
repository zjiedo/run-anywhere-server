const http = require('http');
const path = require('path');
const chalk = require('chalk');
const configs = require('./src/config/defaultConfig.js')

const route = require('./src/helper/route.js');

const open = require('./src/helper/openUrl.js')

class Server {
    constructor(config) {
        this.conf = Object.assign({},configs,config)
    }
    start () {

        const server = http.createServer((req,res) => {
            console.log()
            let publicDir = path.sep + 'static'

            console.log(req.url.startsWith(publicDir))
            if(req.url.startsWith(publicDir)) {
                    console.log('###')
            }
            const filePath = path.join(this.conf.root, req.url)
            route(filePath, req, res, this.conf)
        })


        server.listen(this.conf.port,this.conf.hostName,() => {
            const address = `http://${this.conf.hostName}:${this.conf.port}`;
            console.info(`server is running at ${chalk.green(address) }`);
            open(address)
        })
    }
}


module.exports = Server;

