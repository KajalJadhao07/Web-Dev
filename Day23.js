//For Each

let arr1 = [26,7,90,6,5,32,87,66];
function print(el){
    console.log(el);
}
arr1.forEach(print);

arr1.forEach((el)=>{
    console.log(el);
});



let info = [{
    name: "Karan",
    marks: 94,
},
{
    name: "Rajat",
    marks: 90,
},
{
    name: "Sneha",
    marks: 87,
}];

info.forEach((student) => {
    console.log(student);
    console.log(student.marks);
});


//Map
// It allows you to transform each element of the array and return the result as a new array, without modifying the original array.
let double = arr1.map(function(el){
    return el*2
});
double.forEach((el)=>{
    console.log(el);
});


let num = [89,96,69,82,91];
let gpa = num.map((el)=>{
    return el/10;
});
gpa.forEach((el)=>{
    console.log(el);
});


//Filter
let newArr = arr.filter((el)=>{
    return el%2 == 0;
});
newArr.forEach((el)=>{
    console.log(el);
});


//Every 
let arr2 = [2,4,6,8,10]
console.log(arr2.every((el)=>(el%2 ==0)));


//Some
let arr3 = [2,4,7,8,9]
console.log(arr3.some((el)=>(el%2 ==0)));


//Reduce
let arr4 = [3,6,8,9,4,6,1];
let result = arr4.reduce((res,el)=> res+el);
console.log(result);


//Max
let arr5 = [3,6,8,4,6,1];
let max = arr5.reduce((max,el)=> {
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);


//Check if all the numbers in aray are multiple of 10 or not
let arr6 = [40,70,50,20,80,60];
console.log(arr6.every((el)=> el%10 ==0));

// create a function to find minimum number in array
let result2 = arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log(result2);


//Default parameter
function sum(a , b=5){
    console.log("The sum of a and b is: " , a+b);
}
sum(6);


Spread
let arr7 = [2,4,6,8,5,8,9,0,3,1,4,5,4,3,2,6,7,8,9,-5,-8];
console.log(...arr7);
console.log("minimum value is: " , Math.min(...arr7));
let odd = [3,5,7,9,1];
let even = [2,4,6,8];
let nums = [...odd , ...even];
console.log(nums);


//Spread(with object literals)
let data = {
    name: "Karan",
    username: "karan123",
    password: "abcd",
}
console.log(data);
console.log(...Object.values(data));
console.log(...Object.entries(data));
let dataCopy = {...data , id: 1234};
console.log(dataCopy);


//Rest
function sum (...args){
    console.log(args.reduce((add,el)=> add+el));
}
sum (34,14,16,65,47,89);

function min (...args){
    console.log(args.reduce((min,el)=>{
        if (min<el){
            return min;
        }else{
            return el;
        }
    }))
}
min(65,78,43,87,13,-5);


//Destructuring
let names= ["Tony","Peter","John","David"];
let [winner , runnerup, ...others] = names;
console.log(winner,runnerup, others);


//Destructuring(objects)
const Student = {
    name: "Shoeb",
    age: 19,
    marks: 89,
    favSub: ["Maths", "Physics"],
    username: "Shoeb567",
    password: 1234,
}
const{username , password}= Student;
console.log(username, password);
const{username:user , password:pass, city:place ="Pune"}= Student;
console.log(user, pass , place);

// Square and sum the array elements using the arrow function and then find the average of the array.
let arr8 = [1,4,5,8,6,3]
function square(...args){
    arr8.forEach(element => {
        console.log(element*element);
    });
}
square(arr8)
function average(...args){
    let total = 0;
    for(let i = 0 ; i<args.length; i++){
        total = total+args[i];
    }
    console.log(total/args.length);
}
average(...arr8);


//Create a newarray using the map function whose each element is equal to the original element plus 5.
let arr9 = [1,3,6,7,5];
let newArr2 = arr.map((el)=>{
    return el+5;
})
console.log(arr9);
console.log(newArr2);


//Create a new array whose elements are in uppercase of words present in the original array.
let arr10= ["Peter","Shark","Tommy"];
let newArr3 = arr10.map((el)=>{
    return el.toUpperCase();
});
console.log(newArr3);


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//The function should return a newarray with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(...args){
    const double= args.map((el)=>el*el);
    return double
}
let arr = [1,3,6,7,5];
let result4 = doubleAndReturnArgs(...arr);
console.log(result4);


//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values
//of the first object and second object
const firstobj={
    name:"Karan",
    age: 19,
}
const secobj={
    location:"Pune",
    profession:"Teacher"
}
function mergeObjects (firstobj , secobj){
    return{...firstobj, ...secobj};
}
let final = mergeObjects(firstobj,secobj);
console.log(final);