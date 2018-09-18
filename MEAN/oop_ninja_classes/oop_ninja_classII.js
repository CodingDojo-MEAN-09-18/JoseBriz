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
    //getter function makes private health and speed available for prototype functions to use!
    this.strengthIndicator = function(){
        return strength
    }
    this.speedIndicator = function(){
        return speed
    }    
};

// write a drinkSake() function that increases health by +10

Ninja.prototype.drinkSake = function() {
    this.health += 10;                          
    console.log(this.name+" drank sake");
    return this
}; 

// write a punch() function that decreases health by -5 from the target

Ninja.prototype.punch = function(target ){
    target.health -= 5;
    console.log(this.name+" punched "+target.name);
    return this
};

// write a kick() function that decreases the health of target by 10 times the kicker's health

Ninja.prototype.kick = function(target) {
    target.health -= 10 * this.strengthIndicator();
    console.log(this.name+" kicked "+target.name);
    return this
}

// create an instance of Ninja

var mohito = new Ninja("Mohito",95);
mohito.sayName();
mohito.showStats();

var tiradito = new Ninja("Tiradito",90);
tiradito.sayName();
tiradito.showStats();

// create another instance of Ninja

// Fight!

mohito.punch(tiradito);
tiradito.showStats();

tiradito.drinkSake().drinkSake();
tiradito.showStats();

mohito.punch(tiradito).punch(tiradito);
tiradito.showStats();

tiradito.kick(mohito)
mohito.showStats();
tiradito.showStats();

console.log(mohito)