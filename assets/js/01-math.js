/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log('Hallo', 10, six);

var x = 10;
var x = "10";
var x = '10';

// add six to three
// let add = three + six;
// subtract six from three
// let sub = three - six;
// multiply three times six
// let mult = three * six;

// divide three by six
// let div = three / six;

// modulo six by three
// let modu = six % three;

// log results
// console.log(add + '6');
// console.log(sub);
// console.log(mult, div, modu);

// build a function, that:
// takes two parameters
// checks if both parameters are numbers, else returns error message in the console
// divides the first one by the second one
// adds three to the result of the division
// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result


function mathFunction(paramOne, paramTwo) {
    if (!isNaN(paramOne) && !isNaN(paramTwo)){
        var result = paramOne/paramTwo;
        // console.log(divide);
        var result = result + 3;
        // console.log(add);
        var result = result * paramTwo;
        if (result == 21){
            return result - 4;
        }else{
            return result + 4;
        }

    }else{
        console.log('Bitte ganze Zahlen eingeben!')
    }
}

// function mathFunction(paramOne, paramTwo){
//     if (isNaN(paramOne)) {
//         console.error('Parameter 1 ist keine Zahl');
//     } 

//     if (isNaN(paramTwo)) {
//         console.error('Parameter 2 ist keine Zahl');
//     }

//     let result = paramOne / paramTwo;

//     result +=3;

//     result *= paramTwo;

//     if (result == 21) {
//         result -= 4;
//     }else{
//         result += 4;
//     }
//     console.log(result)
// }



// log the result of the function
console.log(mathFunction(3,1));