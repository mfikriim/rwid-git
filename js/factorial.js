/**
 * @param {number} n
 */

function countFactorial(n) {
    let result = 1;

    for (let index = n; index >= 1; index--) {
       result = result * index;
    }

    return result;
}

const factorial = countFactorial(5);

document.writeln(factorial);