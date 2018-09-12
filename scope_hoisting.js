//1  

console.log(hello);
var hello = 'world';

// var hello;
// console.log(hello)
// => undefined

//2 

var needle = 'haystack';
test();
function test(){
    var needle = "magnet";
    console.log (needle);
}

// var needle = 'haystack'
// test();
// var needle = 'magnet'
// => magnet

// 3 

var brendan = "super cool";
function print(){
    brendan = "only ok";
    console.log(brendan)
}
console.log(brendan);

// var brendan = "super cool";
// console.log(brendan)
// => super cool

// 4 

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = "chicken";
// console.log(food)
// => chicken
// eat();
// var food = "half-chicken"
// console.log(food)
// => half-chicken

// 5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// var mean;
// function mean is called while it is still only an initialized variable
// => error: mean is not a function

// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre);
// => undefined
// var genre = disco (global)
// rewind()
// var genre = rock (local)
// console.log(genre);
// => rock
// var genre = r&b (local)
// console.log(genre)
// => r&b
// console.log(genre)    (globally)
// => disco   (global)

// 7

dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn();
console.log(dojo);

// var dojo = "san jose";    (global)
// console.log(dojo)
// => san jose
// learn();
// var dojo = "seatle";  (local)
// console.log(dojo)
// => seattle
// var dojo = "burbank";  (local)
// console.log(dojo);
// => burbank
// console.log(dojo)    (globally)
// => san jose

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// var name = "Chicago";
// var students = 65;
// makeDojo();
// const dojo = {};
// const dojo = {name='Chicago',students=65,hiring=true}
// return dojo;
// console.log dojo
// => {name:'Chicago',students:65,hiring:true}
// var name = "Berkeley";
// var students = "0";
// makeDojo();
// const dojo = {};
// const dojo = {name='Berkeley',students=0}
// error, cannot assign to const