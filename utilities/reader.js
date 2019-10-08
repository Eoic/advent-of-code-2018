const fs = require("fs");
const path = require("path");

const readFile = (filename, callback) => {
    fs.readFile(path.join(__dirname, "../", filename), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        callback(data);
    });
};

module.exports = { readFile };
