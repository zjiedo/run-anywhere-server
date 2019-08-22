let path = require('path')

module.exports = {
    hostName: '127.0.0.1',
    port: 7000,
    root: path.resolve(__dirname, '../../../'),
    compress: /\.(html|js|css|markdown)/,
    cache: {
        maxAge: 10 *60,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}
