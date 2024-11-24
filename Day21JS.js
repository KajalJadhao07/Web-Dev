//Generate a random number fron 1 to 100
let rannum = Math.floor(Math.random()*100)+1;
console.log(rannum);

//Generate a random number from 1 to 5
let genNum = Math.floor(Math.random()*5)+1;
console.log(genNum);



//Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].
const num = Math.ceil(Math.random() * 6)
function dice(){
    const rand = Math.ceil(Math.random() * 6);
    console.log(rand);
}
dice();



//Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.
let car ={
    name: "Maruti suzuki",
    model: "Maruti Suzuki Brezza",
    color: "black",
}
console.log(car.name);



//Create an object Person with their name, age and city.Edit their city’s original value to change it to “NewYork”.Add a new property 
//country and set it to the UnitedStates.
let person ={
    name: "Rahul",
    age: 26,
    city: "Pune"
}

person.city = "New York";
person.country = "United States";
console.log(person);








