// remaining to discuss:  object

// ********* expression **********//
// for a programming language, an expression is anything that has a valid value


// ********* boolean **********//
// 1. boolean has two values - true, false
// 2. true means yes, false means no
// 3. we can manually assign a boolean value, or JS can compute it from another expression

const omeraIsWebDev = true; // manually assigned
const oneIsGreaterThanTwo = 1 > 2; // computed by JS - will learn more about it later




// ********* null **********//
// It’s just a special value which represents “nothing”, “empty” or “value unknown”
let theAgeOfThisLion = null;




// ********* undefined **********//
// 1. The meaning of undefined is “value is not assigned”
// 2. can be manuallly assigned, or automatically computed to 'undefined' if you don't assign a value to a variable when you crate it
let someNumber; // automatic
let someOtherNumber = undefined; // manual

someNumber = 'some value';



// ********* typeof operator **********//
// can be written in 2 ways 
// 1. typeof expresseion
// 2. typeof(expression)

let typeOfMyName = typeof 'omera';
let typeOfMyAge = typeof 20;




// ********* Math Operators ********//
// + - * / 

// % - remainder operator
// ** exponentiation operator 

const one = 1;
const two = 2;

const addition = one + two;
const substraction = one - two;
const multi = one * two;
const division = one / two;


const value1 = 4;
const value2 = 2;

const remainder = value1 % value2;
const exponentiation = value1 ** value2; // 4 ** 2 -> 4 ^ 2 -> 16

console.log(remainder);