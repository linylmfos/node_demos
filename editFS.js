const fs = require("fs");

// 修改；修改名称
fs.rename("1.txt", "2.txt", err=> {
    if(err) {
        return console.log(err)
    } else {
        console.log("修改成功");
    }
})