const {myReadFile, myWriteFile, username} = require("./fileSync1");

myReadFile();
const data = "Full stack";
myWriteFile(data);
myReadFile();
console.log("username: ", username);