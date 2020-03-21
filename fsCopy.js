const fs = require("fs");

// 复制
fs.copyFile("index.html", "myindex.html", err=> {
    if(err) {
        return console.log(err);
    } else {
        console.log("复制成功");
    }
})