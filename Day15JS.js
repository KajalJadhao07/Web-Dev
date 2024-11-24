//Take input string and state weather the string is empty or not.
let str = prompt("enter a string")
if(str.length==0){
    console.log("String is empty");
}
else{
    console.log("String is not empty")
}




//Check wether the defined index have lower case alphabet or upper case alphabet
let string="KajalJadhao";
let n=3;
if(string[n]==string[n].toLowerCase()){
    console.log("The character is in lower case.")
}
else{
    console.log("The character is in upper case.")
}



//Take an array as an inpuut and check wether the particular item exists in the array or not.
let array=[4,6,8,5,0]
let item=6;
if(array.indexOf(item)!= -1){
    console.log("The item exists in the string.")
}
else{
    console.log("Item does not exists in the string.")
}




//Print odd numbers from 1 to 15.
for(let i=1; i<=15; i=i+2){
    console.log(i);
}



//Print the table of 5 by using for loop.
for(let i=5;i<=50;i=i+5){
    console.log(i);
}
