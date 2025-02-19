const http = require("http");

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const rs = await fetch("https://api.github.com/search/users?q=location:ghaziabad");
    const data = await rs.json();
    const items = data.items;
    const loginNames = items.map((ele) => ele.login);
    // res.write(`${loginNames}`)
    res.write(JSON.stringify(loginNames));
    // res.write(loginNames.toString());
    res.end();
});

server.listen(3001, (err) => {
    try {
        if(err) throw err;
        console.log("Server is listening on port 3001");
    } catch (error) {
        console.log("Server Error: ", error.message);
    }
})