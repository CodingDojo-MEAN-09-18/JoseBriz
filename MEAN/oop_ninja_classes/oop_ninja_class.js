function Ninja(name,health){
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;
    var health = 100;
    this.sayName = function(){
        console.log("My name is "+this.name);
    };
    this.showStats = function(){
        console.log("name: "+this.name+"; strength: "+strength+", speed: "+speed+", health: "+this.health)
    };
    this.drinkSake = function(){
        this.health += 10;
    };
};

var mohito = new Ninja("Mohito",95)
mohito.sayName();
mohito.showStats();
mohito.drinkSake();
console.log(mohito)
// console.log(mohito.health)

