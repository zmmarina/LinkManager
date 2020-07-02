const express = require ("express");
const db = require ("./models");

const authController = require ("./controllers/auth");

const server = express();

server.use("/auth", authController);

server.get("/", (req, res) =>{
    return res.json("API running...");
})

db.sequelize.sync().then(() =>{
    server.listen(3001, () =>{
        console.log ("Listening on port 3001");
    });
});

