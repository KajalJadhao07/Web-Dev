//String Methods

//1.Trim Method (Removes whitespace from both the ends)
let msg = "    hello"
console.log(msg.trim());

//2.Index Of
let str = "I love Playing"
console.log(str.indexOf("love"));
console.log(str.indexOf("k"));
console.log(str.indexOf("y"));

//3.toUpperCase / toLowerCase
let random = "Random String";
console.log(random.toUpperCase());
console.log(random.toLowerCase());

//4.Slice
console.log(str.slice(7));
console.log(str.slice(2,6));

//Replace
console.log(str.replace ("love" , "keep")); 

//Repeat 
console.log(str.repeat(3));

//Method Chaining
console.log(msg.toUpperCase().trim());
