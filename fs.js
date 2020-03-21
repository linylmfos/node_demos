const fs = require("fs");
// fs.writeFile('1.txt', "我是写入的文字111, 追加文字", {flag: "a"}, function(err) {
//     if(err) {
//         return console.log(err)
//     } else {
//         console.log("写入成功");
//     }
// })

// // 文件读取
// fs.readFile("1.txt", "utf-8", (err, data) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log(data);
// })

// 所有文件操作，没有加sync都是异步， 否则是同步；
let data = fs.readFileSync("1.txt");
console.log(data);
console.log(data.toString());