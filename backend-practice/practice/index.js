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

app.get("/rolldice", (req,res)=>{     // data i.e diceVal come from database and we want to send it to the roll_dice file 
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("roll_dice.ejs", {diceVal})
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