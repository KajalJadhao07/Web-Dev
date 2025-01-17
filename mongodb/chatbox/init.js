const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful"); 
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chatSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  msg: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);

let allChats = ([
    {
    from : "Neha",
    to : "Priya",
    msg : "send me you exam sheet",
    created_at : new Date()  
  },
  {
    from : "ramesh",
    to : "pritesh",
    msg : "teach me api callback",
    created_at : new Date()  
  },
  {
    from : "mohit",
    to : "rajesh",
    msg : "bring some fruits for me",
    created_at : new Date()  
  },
  {
    from : "shital",
    to : "rani",
    msg : "will you help me in solving problems?",
    created_at : new Date()  
  }, 
  {
    from : "rakesh",
    to : "dimple",
    msg : "I like you very much",
    created_at : new Date()  
  },
  {
    from : "sandesh",
    to : "alka",
    msg : "retun home as soon as you are done with work",
    created_at : new Date()  
  },
  {
    from : "mitesh",
    to : "john",
    msg : "please handover my project to my teammates",
    created_at : new Date()  
  }
]);

Chat.insertMany(allChats)
  .then(() => {
    console.log("Chats inserted successfully!");
  })
  .catch((err) => {
    console.error("Error inserting chats:", err);
  });

