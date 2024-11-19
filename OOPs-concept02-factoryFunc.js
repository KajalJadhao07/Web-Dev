//Factory Functions is a function that creates an object 
// It makes the copy for every object

function personMaker(name ,age){
    const Person = {
        name : name,
        age : age,
        talk(){
            console.log(`hi my name is ${name}`);
        },
    };

    return Person;
}

p1 = personMaker("Adam", 25);
p2 = personMaker("David", 23);


console.log(p1.name);
console.log(p1.age);   // But this makes teh copy for every object
p1.talk();
console.log(p2.name);
console.log(p2.age);
p2.talk();

console.log(p1.talk === p2.talk);
// It will return false value as the same function is copied and is store in different space in the memory.