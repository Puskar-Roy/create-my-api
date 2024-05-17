const fs = require("fs");
const path = require("path");

const copyDir = (src, dest, callback) => {
  const copy = (copySrc, copyDest) => {
    fs.readdir(copySrc, (err, list) => {
      if (err) {
        callback(err);
        return;
      }
      list.forEach((item) => {
        const curSrc = path.resolve(copySrc, item);
        const curDest = path.resolve(copyDest, item);

        fs.stat(curSrc, (err, stat) => {
          if (err) {
            callback(err);
            return;
          }

          if (stat.isFile()) {
            try {
              const readStream = fs.createReadStream(curSrc);
              const writeStream = fs.createWriteStream(curDest);
              readStream.pipe(writeStream);
              readStream.on("error", (err) => callback(err));
              writeStream.on("error", (err) => callback(err));
            } catch (err) {
              callback(err);
            }
          } else if (stat.isDirectory()) {
            fs.mkdirSync(curDest, { recursive: true });
            copy(curSrc, curDest);
          }
        });
      });
    });
  };
  
  fs.access(dest, (err) => {
    if (err) {
      fs.mkdirSync(dest, { recursive: true });
    }
    copy(src, dest);
    callback(null);
  });
};

module.exports = copyDir;
