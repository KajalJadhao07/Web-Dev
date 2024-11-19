// It creates an instance of an object , also it does not makes the copies rather makes the prototype

function Person(name , age){
    this.name= name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi my name is ${this.name}`)
}

let p1 = new Person("Adam", 25);
let p2 = new Person("David", 25);

console.log(p1.name);
console.log(p1.age);
p1.talk();

console.log(p2.name);
console.log(p2.age);
p2.talk();

console.log(p1.talk=== p2.talk);