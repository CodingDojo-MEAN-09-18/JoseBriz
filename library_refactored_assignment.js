function map(array, callback) {
    const newArray = [];
    for (let index  = 0; index < array.length; index++) {
        const element = callback(array[index], index, array);
        newArray.push(element)
    }   
    return newArray;
}

function filter(array, callback) {
    const filteredArray = [];
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index], index, array)) {      
            const element = array[index];     
            filteredArray.push(element);
        };
    };
    return filteredArray;
};

function reject(array, callback) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (!(callback(array[index], index, array))) {                    
            const element = array[index];
            newArray.push(element);
        };
    };
    return newArray
};

function find(array, callback) {
    for ( let index = 0; index < array.length; index++ ) {
        if (callback(array[index], index, array)) {
            const element = array[index] 
            return (element);
        };
    };
};

function reduce(array, callback, memo) {
    const results = [].concat(array);
    if (memo === undefined) {
        memo = results.pop();
    };
    for (let index = 0; index < array.length; index++) {
        memo = callback(memo, array[index], index);
    };
    return memo;
};

array = [7,8,4,1,2,6]

const tryMap = map(array, function(element) {
    const square = element * element;
    return square
})

console.log(tryMap)

const tryReject = reject(array, function(element) {
    const rejected = element % 2 === 0;
    return rejected;
})

console.log(tryReject);

const tryFilter = filter(array, function(element) {
    const remaining = element % 2 === 0;
    return remaining;
})

console.log(tryFilter);

const tryFind = filter(array, function(element) {
    const found = element > 5;
    return found;
})

console.log(tryFind);

const tryReduce = reduce(array, function(num1, num2){
    const accum = num1 + num2;
    return accum
})

console.log(tryReduce)