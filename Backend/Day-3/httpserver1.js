const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
    const url = req.url;
    if(url == "/home" && req.method=="GET"){
        const fileData = await fs.readFile("./Home.html", "utf-8");
        res.write(fileData);
    }else if(url == "/about" && req.method=="GET"){
        const fileData = await fs.readFile("./About.html", "utf-8");
        res.write(fileData);
    }else{
        res.write("<h1 style='color: Red'>No Page Found</h1>")
    }
    res.end();
});

server.listen(3001, (err) => {
    try {
        if(err) throw err;
        console.log("Server is running on port 3001");
    } catch (error) {
        console.log("Server Error: ", error.message);
    }
});