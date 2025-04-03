const cors = require("cors");
const express = require("express");
const fs = require("fs/promises");
const app = express();
const Port = 3002;

let users = [];
const loadUsers = async () => {
    try {
        const userdata = await fs.readFile("./users.json", "utf-8");
        users = JSON.parse(userdata);
    } catch (error) {
        users = [];
    }
}
const saveUser = async () => {
    await fs.writeFile("./users.json", JSON.stringify(users));
}

// const m1 = (req, res, next) => {
//     const age = req.query.age;
//     if (!age) {
//         res.status(400).send("Enter age in query");
//     } else {
//         if (age < 18) {
//             res.status(401)
//                 .send("User not Authorized");
//         } else {
//             next();
//         }
//     }
// }

// app.use(m1);
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

loadUsers();

app.get("/users", async (req, res) => {
    try {
        const data = await fs.readFile("./users.json", "utf-8");
        res.status(200)
            .json({
                status: "Success",
                data: JSON.parse(data),
                message: "Users Fetched successfully"
            })
    } catch (error) {
        res.status(400)
            .send("File Not Found");
    }
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    const idx = users.findIndex(ele => ele.id == id);
    if (idx == -1) {
        res.status(400)
            .json({
                status: "Fail",
                message: "User not found"
            });
    }
    res.status(200)
        .json({
            status: "Success",
            data: users[idx],
            message: "User Found"
        })
});

app.post("/createuser", async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400)
            .json({
                status: "Fail",
                message: "Name and email required"
            })
    } else {
        // const id = (users.length > 0) ? users[users.length - 1].id + 1 : 1001;
        const id = Date.now();
        const newUser = { id, name, email };
        // const data = await fs.readFile("./users.json", "utf-8");
        // users.push(JSON.parse(data));
        users.push(newUser);
        saveUser();
        await fs.writeFile("./users.json", JSON.stringify(users));
        res.status(200)
            .json({
                status: "Success",
                message: "User created successfully",
                data: newUser
            })

    }
});

app.patch("/edituser/:id", (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    const user = users.find((ele) => ele.id == id);
    if (!user) {
        res.status(400)
            .json({
                status: "Fail",
                message: "User not found"
            });
    }else if (!name && !email) {
        res.status(400)
            .json({
                status: "Fail",
                message: "Name or Email is required"
            })
    }else{
        if (name) user.name = name;
        if (email) user.email = email;
        saveUser();
        res.status(200)
            .json({
                status: "Success",
                data: user,
                message: "User edited successfully"
            })
    }
});

app.delete("/deleteuser/:id", (req, res) => {
    const { id } = req.params;
    // console.log(typeof id);
    const idx = users.findIndex((ele) => ele.id == id);
    if (idx == -1) {
        res.status(400)
            .json({
                status: "Fail",
                message: "User not found"
            });
    } else {
        const user = users.splice(idx, 1);
        saveUser();
        res.status(200)
            .json({
                status: "Success",
                message: "User deleted successfully",
                data: user
            });
    }
});


app.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
})