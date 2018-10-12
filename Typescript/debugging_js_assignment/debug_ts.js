//1. setting types
var myString;
myString = "blalant";
var myMix;
myMix = "Bees wax";
myMix = 9;
//2. setting types for functional parameters
function sayHello(name) {
    return "Hello, " + name;
}
console.log(sayHello("Kermit"));
// console.log(sayHello(9)); //type error
function sayYellow(name) {
    return "Yellow, " + name;
}
console.log(sayYellow("Kermit"));
console.log(sayYellow(9));
//3.  optional parameters
function fullName(firstName, lastName, middleName) {
    var fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}
console.log(fullName("Mary", "Mother", "God"));
console.log(fullName("Mary", "Demigod"));
function graduate(ninja) {
    return "Congratulations " + ninja.firstName + " " + ninja.lastName + ", you earned " + ninja.belts + " belts!";
}
var christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
};
var mynor = {
    firstName: "Mynor",
    lastName: "McNight",
    belts: 4
};
console.log(graduate(christine));
console.log(graduate(mynor));
var Ninja = /** @class */ (function () {
    function Ninja(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Ninja.prototype.debug = function () {
        console.log(this.firstName + ": Console.log() is my friend!");
    };
    return Ninja;
}());
var shane = new Ninja("Shane", "Dwiddle");
var turing = new Ninja("Alan", "Turing");
function study(programmer) {
    return "ready to whiteboard an algorithm, " + programmer.fullName + "?";
}
shane.debug();
console.log(study(turing));
//6. arrow functions
var increment = function (x) {
    return x + 1;
};
console.log(increment(3));
var square = function (x) {
    return x * x;
};
console.log(square(4));
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(3, 4));
var math = function (x, y) {
    function sum(x, y) {
        return x + y;
    }
    function product(x, y) {
        return x * y;
    }
    function difference(x, y) {
        return x - y;
    }
    return [sum(x, y), product(x, y), difference(x, y)];
};
console.log(math(3, 4));
//7. arrow function and this
var Elephant = /** @class */ (function () {
    function Elephant(age) {
        var _this = this;
        this.age = age;
        this.birthday = function (age) {
            _this.age++;
        };
    }
    return Elephant;
}());
var toby = new Elephant(3);
console.log("age is " + toby.age);
setTimeout(toby.birthday, 1000);
setTimeout(function () {
    console.log("age is now " + toby.age);
}, 2000);
