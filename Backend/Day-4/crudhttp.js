const http = require("http");
const port = 3003;
const data = [
    {
        id: 1,
        name: "Kali Garg",
        email: "kali@gmail.com",
    }
];
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == "/users" && req.method == "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(data));
    }
    else if(url == "/user" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parseddata = JSON.parse(body);
            const {name, email} = parseddata;
            const newId = data.length > 0 ? data[data.length-1].id + 1 : 1;
            const newEntry = {
                id: newId,
                name,
                email
            }
            data.push(newEntry);
        })
        res.writeHead(201, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status: "success", message: "User created successfully"}));
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status: "fail", message: "Page not found"}));
    }
    res.end();
});

server.listen(port, (err) => {
    try {
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
        console.log(`http://localhost:${port}/`)
    } catch (error) {
        console.log("Server Error:", error.message);
    }
})