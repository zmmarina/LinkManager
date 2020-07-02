const express = require ("express");

const authController = require ("./controllers/auth");

const server = express();

server.use("/auth", authController);

server.get("/", (req, res) =>{
    return res.json("API running...");
})

server.listen(3001, () =>{
    console.log ("Listening on port 3001");
});