const fs = require("fs");
function mycopy(src, dest) {
    fs.writeFileSync(dest, fs.readFileSync(src));
}
mycopy("index.html", "test.html")