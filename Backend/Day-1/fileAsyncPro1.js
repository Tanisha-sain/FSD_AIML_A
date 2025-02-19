const fs = require("fs/promises");

async function myReadFile(){
    try {
        const res = await fs.readFile("dummy.txt", "utf-8");
        console.log(res);
        // res
        // .then((data) => {
        //     console.log("File data: ", data);
        // })
        // .catch((err) => {
        //     throw err;
        // })
    }catch (error) {
        console.log("File reading error: ", error.message);
    }
}

async function myWriteFile(data){
    try {
        await fs.writeFile("dummy.txt", data);
        console.log("Success");
        // res
        // .then(() => {
        //     console.log("Writing successfully");
        // })
        // .catch((err) => {
        //     throw err;
        // })
    } catch (error) {
        console.log("File writing Error: ", error.message);
    }
}

myReadFile();
myWriteFile("Hello");
// myReadFile();