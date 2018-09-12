class Ninja {
    constructor(name,health,speed,strength) {
        this.name = name;
        if (!health) { 
            this.health = 100;
        } else { 
            this.health = health; 
        };
        if (!speed) { 
            this.speed = 3;
        } else { 
            this.speed = speed;
        };
        if (!strength) { 
            this.strength = 3;
        } else { 
            this.strength = strength; 
        };
    };
    sayName() {
        console.log(`My name is ${this.name}`);
    };
    showStats() {
        console.log(`name: ${this.name}, strength: ${this.strength},speed: ${this.speed}, health: ${this.health}`)
    };
    drinkSake() {
        this.health += 10;
        return this
    }
};

const ninja1 = new Ninja('Miko', 105, 2, 4);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake();
console.log("new health: "+ninja1.health);

class Sensei extends Ninja {
    constructor (name,health,speed,strength, wisdom) {
        super(name);
        if (!health) { 
            this.health = 200;
        } else { 
            this.health = health; 
        };
        if (!speed) { 
            this.speed = 10;
        } else { 
            this.speed = speed;
        };
        if (!strength) { 
            this.strength = 10;
        } else { 
            this.strength = strength; 
        };
        if (!wisdom) { 
            this.wisdom = 10;
        } else { 
            this.wisdom = wisdom; 
        };
    };
    showStats() {
        console.log(`name: ${this.name}, strength: ${this.strength},speed: ${this.speed}, health: ${this.health}, wisdom: ${this.wisdom}`)
    };
    speakWisdom() {
        this.drinkSake();
        console.log(`Beauty is in the eye of the beholder`)
    }
};

const sensei1 = new Sensei('Yoko')
sensei1.sayName();
sensei1.showStats();
sensei1.drinkSake().drinkSake().drinkSake();
console.log("new health: "+sensei1.health);
sensei1.speakWisdom();
