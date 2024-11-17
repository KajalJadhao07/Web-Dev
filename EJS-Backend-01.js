const express = require("express");   // require express package
let app = express();

app.set("view engine", "ejs");

let port = 8080;     // initialize the port

app.listen(port , ()=>{        //listening to the port
    console.log("listening to port", port);
});

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

