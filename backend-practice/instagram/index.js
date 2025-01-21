const express = require("express");   // require express package
let app = express();

app.set("view engine", "ejs");

let port = 8080;     // initialize the port

app.listen(port , ()=>{        //listening to the port
    console.log("listening to port", port);
});


//For instagram activity
app.get("/ig/:username", (req,res)=>{
    let instadata = require("./data.json");
    let { username } = req.params;
    const data = instadata[username];
    if(data){
        res.render("instagram.ejs", { data })
    }else{
        res.render("error.ejs");
    }
});