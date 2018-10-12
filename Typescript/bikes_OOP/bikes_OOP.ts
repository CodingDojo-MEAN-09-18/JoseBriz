interface Bicycle {
    price: number,
    max_speed: number,
    miles: number
}

class Bike implements Bicycle {
    constructor(public price: number, public max_speed: number, public miles: number) {}
    displayInfo = (price:number, max_speed:number, miles:number) => {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed} Miles: ${this.miles}`);
    }
    ride = (miles?:number) => {
        console.log(`Riding....`);
        this.miles += 10;
        return this
    }
    reverse = (miles?:number) => {
        console.log(`Reversing...`);
        if (this.miles < 5) {
            this.miles = 0;
        } else {
            this.miles -= 5;
        }
        return this;
    }
}

const bikey = new Bike(250, 25, 0);
console.log(bikey.miles);
bikey.ride();
console.log(bikey.miles);
bikey.reverse();
console.log(bikey.miles);
bikey.reverse().reverse();
console.log(bikey.miles);