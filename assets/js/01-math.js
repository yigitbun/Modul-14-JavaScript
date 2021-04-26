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
// var add = three + six;
// subtract six from three
// var sub = three - six;
// multiply three times six
// var mult = three * six;

// divide three by six
// var div = three / six;

// modulo six by three
// var modu = six % three;

// log results
// console.log(add);
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
function ygt(para1, para2) {
    if (!isNaN(para1) && !isNaN(para2)){
        var result = para1/para2;
        // console.log(divide);
        var result = result + 3;
        // console.log(add);
        var result = result * para2;
        if (result == 21){
            return result - 4;
        }else{
            return result + 4;
        }

    }else{
        console.log('Bitte ganze Zahlen eingeben!')
    }
}

// log the result of the function
console.log(ygt(10,2))