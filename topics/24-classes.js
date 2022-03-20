'use strict';

// Classes
// classes have method constructor which runs once , when object is created
// getters, setters look like properites but are methods of the class
// static does not require instance of class been created, they are helper methods
// Parent and Child classes ( inheritance and extends )

class Rectangle{
    // Setup (constructor)
    constructor(_width, _height, _color){
        // console.log("The Class of the Rectangle is created !");
        // "this" keyword refers to the current object
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    // Instance methods
    getArea(){
        return this.width * this.height;
    }

    printDescription(){
        console.log(`A Rectangle of width: ${this.width} x height: ${this.height} , color: ${this.color}`)
    }
};

let myRectangle01 = new Rectangle(5, 3, "blue");
let myRectangle02 = new Rectangle(9, 6, "red");


console.log(myRectangle01);
console.log(myRectangle01.getArea())
myRectangle01.printDescription();


// Getters, Setters 

class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
        this.totalRequestsForArea = 0;
    }

    get area(){
        this.totalRequestsForArea++;
        return this.width * this.height;
    
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let mySquare01 = new Square(10);
console.log(mySquare01.area);
console.log(mySquare01.area);

mySquare01.area = 25;
console.log(mySquare01.width, mySquare01.height);

console.log(mySquare01.totalRequestsForArea);

// Static

class NewSquare{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b){
        return a.width * a.height === b.width * b.height;
    }
    
}


let square01 = new NewSquare(8);
let square02 = new NewSquare(9);
console.log(NewSquare.equals(square01, square02));


// Parent and Child class

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}
class Programmer extends Person{
    constructor(_name, _age, _yearsOfExperiance){
        super(_name, _age);

        // Custom Behavior
        this.yearsOfExperiance = _yearsOfExperiance;
    }

    code(){
        console.log(`${this.name} is coding !`);
    }
}

let person01 = new Person("Luka", 20);
let programmer01 = new Programmer("John", 24, 4);


const programmers = [
    new Programmer("George", 32, 7),
    new Programmer("Mary", 22 , 3),
];

function developSoftware(programmers){
    // develop software
    for(let programmer of programmers){
        programmer.code();
    }

}
developSoftware(programmers);

console.log(person01);
console.log(programmer01);

programmer01.code();
programmer01.describe();
person01.describe();
// Can not access to childs function/methods
// person01.code();
