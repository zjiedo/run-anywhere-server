 function refreshRes (stats, res) {
    let { maxAge, expires, cacheControl, lastModified, etag } = require('../config/defaultConfig').cache

    if(expires) {
        res.setHeader('Expires',new Date(Date.now() + maxAge * 1000).toISOString())
    }
    if(cacheControl) {
        res.setHeader('Cache-Control',`public, max-age=${maxAge}`)
    }
    if(lastModified) {
        res.setHeader('Last-Modified', stats.mtime.toISOString())
    }
    if(etag) {
        res.setHeader('ETag', `${stats.size}-${stats.mtime}`)
    }
}


module.exports = function(stats, req, res) {
    refreshRes(stats,res)

    let lastModified = req.headers['if-modified-since'];
    let etag = req.headers['if-none-match']

    if(lastModified && lastModified !== res.getHeader['if-modified-since']) {
        return false
    }

    if(etag && etag !== res.getHeader['ETag']) {
        return false
    }

    return true
}
