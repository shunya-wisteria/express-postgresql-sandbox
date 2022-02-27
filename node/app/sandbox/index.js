const port = 3000;

const express = require("express");
const app = express();
const db  = require("./models/index")

app.get("/", (req, res) => {
  res.json({title : "Hello World, express.js"})
})

app.get("/users", (req, res) => {
  db.user.findAll({}).then((users) => {
    res.json(users)
  })
})


app.listen(port, () => {
  console.log("Server running on port:" + port);
})