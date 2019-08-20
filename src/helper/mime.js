const path = require('path');
const json = {
"htm": "text/html", 
"html": "text/html", 
"shtml": "text/html", 
"json":	"application/x-json",	 
"js": "text/javascript",
"css":	"text/css",
"txt": "text/plain",
"rtx": "text/richtext",
"kml": "application/vnd.google-earth.kml",
"kmz": "application/vnd.google-earth.kmz",
"jpg": "image/jpeg",  
"jpeg": "image/jpeg",
"jpe": "image/jpeg",
"gif": "image/gif",
"bmp": "application/x-MS-bmp",
"swf": "application/x-shockwave-flash",
"cab": "application/x-shockwave-flash",
"bin": "application/octet-stream ",
"exe": "application/octet-stream",
"com": "application/octet-stream",
"dll": "application/octet-stream",
"class": "application/octet-stream",
"doc": "application/msword",
"dot": "application/msword",
"xls": "application/msexcel ",
"xla": "application/msexcel",
"ppt": "application/mspowerpoint",
"ppz": "application/mspowerpoint",
"pps": "application/mspowerpoint",
"pot": "application/mspowerpoint",
"zip": "application/x-zip-compressed",
"z": "application/x-compress",
"gz": "application/gzip",
"rtf":	"application/rtf",
"pdf":	"application/pdf",
"mdb":  "application/masccess",
"hlp":  "application/mshelp",
"chm":  "application/mshelp",
"avi":  "video/x-msvideo",
"mpeg":  "video/mpeg",
"mpg":  "video/mpeg",
"mpe":  "video/mpeg",
"qt	":  "video/quicktime",
"mov":  "video/quicktime",
"wav":  "audio/wav",
"wma":  "audio/x-ma-wma",
"rm	":  "application/vnd.rn-realmedia",
"rmvb":  " application/vnd.rn-realmedia",
"mp3":  "audio/mpeg	 MP3",
"aif":  "audio/x-aiff",
"aiff":  "audio/x-aiff ",
"aifc":  "audio/x-aiff ",
"ram":  "audio/x-pn-realaudio",
"ra ":  "audio/x-pn-realaudio",
"ai	":  "application/postscript",
"eps":  "application/postscript",
"ps ":  "application/postscript",
"au	":  "aucio/basic",
"snd":  "aucio/basic",
"dcr":  "application/x-director",
"dir":  "application/x-director",
"dxr":  "application/x-director",
"dxf":  "application/dxf",
"dwg":  "application/acad",
"asd":  "application/astound",
"asn":  "application/astound",
"ini":  "application/octet-stream",
"jar":  "application/java-archive",
"jad":  "text/vnd.sun.j2me.app-descriptor",
"jam":  "application/x-jam"
}

module.exports = function(filePath){

    let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase()

    if(!ext) {
        ext = filePath
    }

    return json[ext] || json['txt'];

}