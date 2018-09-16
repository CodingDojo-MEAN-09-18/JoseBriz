function fib() {
    // Some variables here
    const array = [0,1]
    function nacci() {
        // do something to those variables here
        const number = (array[array.length-2] + array[array.length -1])
        array.push(number)
        if (array.length < 5){
            console.log(1)
        } else {
            console.log(array[array.length-2])  
        }
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"