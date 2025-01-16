const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("Connection successful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

User.findOneAndUpdate({name :"Tony"}, {age : 23}, {new : true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// User.findById("676f7640b743fce591c9e0b9").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.insertMany([{name : "Bob", email:"Bob@gmail.com", age: 29},
//     {name:"David", email:"david@gmail.com" ,age: 31},
//     {name:"Tony", email:"tony@gmail.com", age:26}
// ]).then((res)=>{
//     console.log(res);
// });


// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 18,
// })
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });