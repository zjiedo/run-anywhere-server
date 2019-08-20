module.exports = (totalSize, req, res) => {
    const range = req.headers['range'];

    if (!range) {
        return {
            code: 200
        }
    }
    let sizes = range.match(/bytes=(\d*)-(\d*)/);
    let end = sizes[2] || totalSize - 0;
    let start = sizes[1] || totalSize - end;
   

    if (start) {

    }
}