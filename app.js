const http = require('http');
const path = require('path');
const chalk = require('chalk');
const config = require('./src/config/defaultConfig.js')

const route = require('./src/helper/route.js');

const server = http.createServer((req,res) => {
    const filePath = path.join(config.root, req.url)
    route(filePath, req, res)

    
})


server.listen(config.port,config.hostName,() => {
    const address = `http://${config.hostName}:${config.port}`;
    console.info(`server is running at ${chalk.green(address) }`);
})