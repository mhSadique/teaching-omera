// ********* Background **********//
// Little history of JavaScript
// How computer understands JavaScript and other programming languages in general
// How to run JavaScript code in our machines



// ********* Data Types - 8 (string, number, boolean, null, undefined, object, symbol, BigInt) **********//



// ********* statement **********//
// A statement is a complete command to the machine



// ********* string **********//
let string1 = 'I am a string with "single" quotation marks';
let string2 = "I am a string with 'double' quotation marks";
let string3 = `I am a string with backticks and I have a special behavior`; // called string literal or template literal 


// special behavior of string literal
const stringLiteralSpecialBehavior = 'if I found a valid expression inside ${}, first I evaluate it and, then make it a part of me';
const stringLiteral = `My special behavior is ${stringLiteralSpecialBehavior}`;



// ********* number **********//
let integer = 44;
let decimalPointNumber = 34.7; // also called floating point number
const PI = 3.1416; // another decimal point number

const positiveInf = Infinity;
const negatyiveInf = -Infinity;
const specailNumber = NaN;



// ********* Variable **********//

// creating a variable and assigning a value to it in the same line
let myName = 'omera'; // assigning a string to a variable
myName = 'akram' // changing the value later


let numberOfStudentInClassOne; // creating a variable without a value
numberOfStudentInClassOne = 50; // asign a value later in a different line


const myBirthday = '28 February'; // assigning a number to a constant variable, can not be changed later
var myPetName = 'cutie'; // same as 'let' but ancient, has some special behavior, found in old codebases 

// variable naming rules
// 1. can not start with a number
// 2. can not contain any special character other than _ and $
// 3. should not contain any space
// 4. should be meaningful
// 5. should be camel-cased


let $_myFavouriteFlowerName = 'tulip'; // correct naming
const _something = 'something'; // correct naming

// let wrong-VariableName = 'wrong naming'
// let 2ndWorngVariableName = 'wrong'
// This variable name will raise an error, 
// because it is using a - (hyphen) which is a special character other than a _ or a $


// copy a value of a variable to another variable
let numberOfStudentInClassTwo = numberOfStudentInClassOne;

// console.log(numberOfStudentInClassTwo);

// we can see output using console.log()
// which is a built-in function from JS
// console.log(_)






