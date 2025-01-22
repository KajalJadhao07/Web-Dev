const express = require("express"); 
let app = express();

app.set("view engine", "ejs");

let port = 8080;    

app.listen(port , ()=>{    
    console.log("listening to port", port);
});

app.get("/", (req, res)=>{
    res.render("home.ejs");
});
