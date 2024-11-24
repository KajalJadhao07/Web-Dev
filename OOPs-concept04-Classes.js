//Classes are the template for creating an object

class Person{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}



let p1 = new Person("Adam", 21);
let p2 = new Person ("David", 19);

console.log(p1.name);
console.log(p1.age);
p1.talk();
console.log(p2.name);
console.log(p2.age);
p2.talk();
console.log(p2.talk === p2.talk);
