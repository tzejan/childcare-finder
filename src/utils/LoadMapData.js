const fs = require("fs");

function LoadMapData(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.error(`${filename} does not exist`);
          reject(err);
        }
      }
      resolve(JSON.parse(data));

    });
  });
}

export default LoadMapData;