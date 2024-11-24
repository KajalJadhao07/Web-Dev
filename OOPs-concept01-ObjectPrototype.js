//Prototype is a single template object that all the objects inherit method and properties from.
//Every object has this inbuilt property.
//Prototype is itself an object.

let arr1 = [1,3,5,6,7];

let arr2= [3,5,7,9];

arr1.Print=()=>{
    console.log("Inside the array");
}

//If we want to write the same function for array2 then it will consume more memory

arr2.Print=()=>{
    console.log("Inside the array");
}

// for this we can make prototype as well

Array.prototype.printMessage = function () {
    console.log("Inside the array");
};

arr1.printMessage();
arr2.printMessage();

//This will add this function to the prototype.
