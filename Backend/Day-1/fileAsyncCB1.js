const fs = require("fs");

function myReadFile(){
    try {
        fs.readFile("dummy.txt", "utf-8", (err, data) => {
            if(err) throw err;
            console.log("file data: ", data);
        });
    } catch (err) {
        console.log("File reading error ", err.message);
    }
}

function myWriteFile(data){
    try{
        fs.writeFile("dummy.txt", data, (err) => {
            if(err) throw err;
            else console.log("Successful write operation")
        });
    }catch(err){
        console.log("File write error: ", err.message);
    }
}

myReadFile();
myWriteFile("Frontend development");
myReadFile();
myWriteFile("Backend Dev");
