const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    fs.appendFile(
        "log.txt", 
        `${Date.now()}: ${req.ip} : ${req.method}: ${req.path}\n`,
        (err, data) => {
            next();
        }
    )
})

// Routes
app.get("/api/users", (req, res)=>{
    return res.json(users);
});

app.route("api/users/id").get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json(user);
})
.patch((req, res) => {
    // Edit the user with id
    return res.json({status: "pending"});
})
.delete((req, res) => {
    // Delete the user with id
    return res.json({status: "pending"});
})

app.post("/api/users", (req, res)=>{
    // Add new user
    const body = req.body;
    users.push({...body, id: users.length+1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
    return res.json({status: "success", id: users.length});
    })
});



app.get("/users", (req, res)=>{
    const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});