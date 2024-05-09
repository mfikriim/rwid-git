/**
 * create an array filled by "fizz", "buzz" or "fizz buzz"
 * this requirement below (highest priority above)
 * 
 * Multiples of 4 or 7, "fizz buzz"
 * Odd sequence, "fizz"
 * Even sequence, "buzz"
 * 
 * @param {number}sequence
 */

function fizzBuzz(n){
    let arrayFizzBuzz = [];
    for (let index = 1; index <= n; index++) {
        if (index % 4 == 0 || index % 7 == 0) {
            arrayFizzBuzz.push("Fizz Buzz")
        } else if (index % 2 == 0) {
            arrayFizzBuzz.push("Fizz")
        } else {
            arrayFizzBuzz.push("Buzz")
        }
        
    }
    return arrayFizzBuzz;
}

const print = fizzBuzz(10);

document.writeln(print);

