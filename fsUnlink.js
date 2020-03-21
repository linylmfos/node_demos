const fs = require("fs");

// 删除
fs.unlink("2.txt", err=> {
    if(err) {
        return console.error(err)
    } else {
        console.log("删除成功");
    }
})

