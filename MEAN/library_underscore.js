var _ = {
    map: function (array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    },
    reduce: function(array, callback) {
        let num1 = array[0]; 
        for (let i = 1; i < array.length; i++) {
            num1 = callback(num1, array[i]);
        }
        return num1;
    },
    find: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
    },
    filter: function(array, callback) {
        newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                newArray.push(array[i])                    
            }
        }
        return newArray;
    },
    reject: function(array, callback) {
        newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                newArray.push(array[i])                    
            }
        }
        return newArray;
    }
}


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); 
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
var three = _.find([1, 2, 3, 4, 5, 6], function(num){ return num === 3; }); 
console.log(three)
var map = _.map([1, 2, 3, 4, 5, 6], function(num){ console.log(num) }); 
var reduce = _.reduce([1, 2, 3, 4, 5, 6], function(num1, num2){ return num1 + num2 });
console.log(reduce);