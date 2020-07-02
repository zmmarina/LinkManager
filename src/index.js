const express = require ("express");
const server = express();

server.get("/", (req, res) =>{
    return res.json("API running...");
})

server.listen(3001, () =>{
    console.log ("Listening on port 3001");
});