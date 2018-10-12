//1. setting types

let myString: string;
myString = "blalant";

let myMix: (string | number);
myMix = "Bees wax";
myMix = 9;

//2. setting types for functional parameters

function sayHello(name: string) {
    return `Hello, ${name}`;
}

console.log(sayHello("Kermit"));
// console.log(sayHello(9)); //type error

function sayYellow(name: (string | number)) {
    return `Yellow, ${name}`;
}

console.log(sayYellow("Kermit"));
console.log(sayYellow(9));

//3.  optional parameters

function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

console.log(fullName("Mary", "Mother", "God"))
console.log(fullName("Mary", "Demigod"))

//4.  interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}

function graduate(ninja: Student) {
    return `Congratulations ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}

const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}

const mynor = {
    firstName: "Mynor",
    lastName: "McNight",
    belts: 4
}

console.log(graduate(christine));
console.log(graduate(mynor));

//5. Classes and function parameters

interface programmer {
    firstName: string,
    lastName: string,
}

class Ninja implements programmer {
    fullName: string;
    constructor (public firstName: string, public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log(`${this.firstName}: Console.log() is my friend!`);
    }
}

const shane = new Ninja("Shane", "Dwiddle");

const turing = new Ninja("Alan", "Turing");

function study(programmer: Ninja) {
    return `ready to whiteboard an algorithm, ${programmer.fullName}?`;
}

shane.debug();
console.log(study(turing));

//6. arrow functions

const increment: (num:number) => number = function(x) {
    return x + 1;
};
console.log(increment(3));

const square: (num:number) => number = function(x) {
    return x * x;
};
console.log(square(4));

const multiply: (num1:number, num2:number) => number = function(x, y) {
    return x * y;
};
console.log(multiply(3, 4));

const math: (x: number,y: number) => number[] = function(x,y) {
    function sum(x,y) {
        return x + y;
    }
    function product(x,y){
        return x * y;
    }
    function difference(x,y){
        return x - y;
    }
    return [sum(x,y), product(x,y), difference(x,y)];
}

console.log(math(3,4));

//7. arrow function and this

class Elephant {
    constructor(public age: number) {}
    birthday = (age:number) => {
        this.age++;
    }
}

const toby = new Elephant(3);
console.log(`age is ${toby.age}`);
setTimeout(toby.birthday, 1000);
setTimeout(function() {
    console.log(`age is now ${toby.age}`)
}, 2000);

