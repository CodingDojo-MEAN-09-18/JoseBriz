var Bike = /** @class */ (function () {
    function Bike(price, max_speed, miles) {
        var _this = this;
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
        this.displayInfo = function (price, max_speed, miles) {
            console.log("Price: " + _this.price + ", Max Speed: " + _this.max_speed + " Miles: " + _this.miles);
        };
        this.ride = function (miles) {
            console.log("Riding....");
            _this.miles += 10;
            return _this;
        };
        this.reverse = function (miles) {
            console.log("Reversing...");
            if (_this.miles < 5) {
                _this.miles = 0;
            }
            else {
                _this.miles -= 5;
            }
            return _this;
        };
    }
    return Bike;
}());
var bikey = new Bike(250, 25, 0);
console.log(bikey.miles);
bikey.ride();
console.log(bikey.miles);
bikey.reverse();
console.log(bikey.miles);
bikey.reverse().reverse();
console.log(bikey.miles);
