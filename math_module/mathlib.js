module.exports = function (){
    return {
        add: function(num1, num2) { 
           console.log(num1+num2); 
        },
        multiply: function(num1, num2) {
            console.log(num1*num2) 
        },
        square: function(num) {
            console.log(num*num);
        },
        random: function(num1, num2) {
            min = Math.ceil(num1);
            max = Math.floor(num2)
            console.log(Math.floor(Math.random() * (num2 - num1)) + num1);
      }
    }
  };
  