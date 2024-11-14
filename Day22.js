//This keyword
let student = {
    name : "Karan",
    age : 18,
    english : 97,
    maths : 95,
    physics : 91,
    getavg (){
        let avg = (this.english + this.maths + this.physics)/3;
        console.log (avg);
    }
}

console.log(student);
student.getavg();




//Try and catch
function sum (){
    let a = 5;
    try{
        console.log(a+b);
    }
    catch(error) {
        console.log(error);
    }
}

sum();




//Arrow Functions
const cube = (n) => {
    console.log(n*n*n);
}
cube(6);




//Implicit Return
const mul = (a,b) =>(console.log(a*b));
mul(4,5);




//Set Timeout
setTimeout(function() {
    console.log("Welcome to the world of coding")
} , 2000);
console.log("Hello there!");
console.log("May it will be a nice experience for you");

function greet(){
    console.log("Namaste")
}
setTimeout(greet , 2000);




//Set Interval
let id = setInterval(function greet (){
    console.log("Namaste");
}, 2000);

setTimeout(function(){
    clearInterval(id);
    console.log("Interval Cleared");
    }, 10000);



//Write an arrow function that returns the square of the number n
const squre = (n) =>(n*n);



//Write a function that prints "Hello World!" 5 times at an interval of 2s each.
function hello(){
    console.log("Hello world!");
}
let Id = setInterval(hello , 2000);
setTimeout(function(){
    clearInterval(Id);
}, 11000);



//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage= arr => {
    let total = 0;
    for (let i = 0 ; i < arr.length ; i++){
        total = total + arr[i];
    }
    return total / arr.length;
};

let arr = [1,3,4,6,8,6,9];
console.log(arrayAverage(arr));




//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = n =>{
    if (n%2 == 0){
        console.log("even");
    }else {
        console.log("odd");
    }
};
isEven(9);