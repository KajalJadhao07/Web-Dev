class Person {
    constructor(name, age){
        this.name = name;
        this.age= age;
        }
    talk (){
        console.log(`Hi my name is ${this.name}`);    
    }
}


class Student extends Person{
    constructor(name , age , marks){
        super(name , age);
        this.marks = marks;
    }
    greet (){
        console.log("Hello");    
    }
}


class Teacher extends Person{
    constructor(name , age , subject){
        super(name , age);
        this.subject = subject;
    }
    greet (){
        console.log("Namaste");    
    }
}

let s1 = new Student ("Adam", 23, 95);
let t1 = new Teacher ("Eve", 28, "English");

console.log(s1.name);
console.log(s1.age);
console.log(s1.marks);
s1.talk();
s1.greet();

console.log(t1.name);
console.log(t1.age);
console.log(t1.subject);
t1.talk();
t1.greet();