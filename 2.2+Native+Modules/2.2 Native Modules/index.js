const fs = require("fs");
let filePath = "./message.txt";
// let contentData = "Hello from Node js";
// fs.writeFile(filePath, contentData, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.readFile(filePath, "utf8", (err, contentData) => {
//   if (err) throw err;
//   console.log(contentData);
// });
// let updateData = `${contentData}
// Hello from Rami`;
// fs.writeFile(filePath, updateData, (err) => {
//   if (err) throw err;
//   console.log("The file has been updated!");
// });
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
