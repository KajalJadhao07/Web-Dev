//Loops

//For loop
//Printing numbers from 1 to 10
console.log("Numbers from 1 to 10")
for(let i = 1 ; i<=10 ; i++){
    console.log(i)
}

//multiplication table
console.log("Multiplication table of 4")
let n = 4
for(let i = 1; i <= 10 ;i++){
    console.log(i*n);
}

//sum of first 10 natural numbers
console.log("Sum of first 10 natural numbers")
let sum = 0;
for (let i = 0 ; i <=10 ; i++){
    sum = sum + i;
}
console.log("sum = ",sum);

//Finding the maximum number in an array
let arr = [3,7,9,5,0];
let max = arr[0];
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i]> max){
        max = arr[i];
    }
}
console.log("Max number is " , max)

//Printing even numbers from 1 to 20
for (let i = 0 ; i<=20 ; i++){
    if (i % 2 == 0 ){
        console.log(i);
    }
}

//Right angle triangle of stars
let rows = 5;
for (let i = 1; i<= rows ; i++){
    let pattern = " "
    for(let j = 1 ; j < i ; j++){
        pattern = pattern + "*";
    }
    console.log(pattern);
}


//Practice Questions
//Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example:if arr=[1,2,3,4,5,6,2,3]& num = 2 .Result should be arr=[1,3,4,5,6,3]
let arr = [4,6,7,5,8,9,5,3,];
let num = 3;
for(let i=0; i<=arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);



//Write a JS program to find the no of digits in a number. Example:if number=287152,count = 6
let number = 356732;
let count = 0;
let copy = number;
while (copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log("Number of digits in the number is: ",count);


//Write a JS program to find the sum of digits in a number.Example:if number=287152,sum = 25
let val = 567829;
let sum = 0;
let copyVal = val;
while(copyVal>0){
    let rem = copyVal%10;
    sum+=rem;
    copyVal = Math.floor(copyVal/10);
}
console.log("Sum of the digits of the number is: ",sum);


//Print the factorial of a number n.[Factorial of a number n is the product of all positive integers
// less than or equal to a given positive integer and denoted by that integer.]
//Example: 7!(factorial of 7)=1x2x3x4x5x6x7=5040 ,5!(factorial of 5)=1x2x3x4x5=120, 3!(factorial of 3)=1x2x3=6, 0! Is always 1.
let n = 5;
let fact=1;
for(let i=1; i<=n ;i++){
    fact*=i;
}
console.log(`Factorial of ${n} is ${fact}`);



//Find the largest number in an array with only positive numbers.
let newArr = [4,8,0,5,7];
let largest = 0;

for(let i=0 ; i<=arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log("Largest number in the array is: ", largest);

