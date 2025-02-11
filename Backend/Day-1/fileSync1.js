const fs = require("node:fs");

function myReadFile(){
    try{
        const data = fs.readFileSync("dummy.txt", "utf-8");
        if(data){
            console.log("File data: ", data);
        }else{
            throw err;
        }
    }catch(err){
        console.log("File Error ", err.message)
    }
}

function myWriteFile(data){
    try{
        // const data = "Hello";
        fs.writeFileSync("dummy.txt", data);
    }catch(err){
        console.log("File Writing Error : ", err.message);
    }
}

// myReadFile();
// myWriteFile();
// myReadFile();

module.exports = {
    myReadFile,
    myWriteFile,
    username: "Tanisha"
}