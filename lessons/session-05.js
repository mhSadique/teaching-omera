// ********* Conditionals ********** //


// ********* if ********** //
// The if (expression) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let number = 2;
if (number === 2) { // a code block starts with an opening curly
    // note that, there must(*) always be a pair of parenthesis after 'if' and the pair must(*) have an expression
    // after the parentheses, there should(?) be a code block wrapped by a pair of curlies
    // a code block is a collection of statements or commands
    // ...
    // now, the expression inside the parentheses is evaluated by JS 
    // and JS will convert the expression into a boolean
    // meaning, the expression would be either 'true' or 'false'
    // in this case, the expression is 2 === 2, and it is evaluated to 'true'
    // ...
    // now, if the conversion result is 'true', JS will get inside that code block and execute the statements inside the code block
    // but, if the result is 'false', JS will ignore the code block, meaning it will not be executed at all
    // and, JS will jump to the next statement after the closing curly of the code block
}  // a code block ends with an closing curly



let anotherNumber = 3;
if (anotherNumber > 2) { // this code block will be executed, because 3 > 2 -> true
    // do some work
    // do some other work
    // call a function
    console.log(' 3 is indeed greater than 2');
    // create a new variable
    // do something with the variable
    // do something else
}

if (anotherNumber < number) { // this code block will never be executed
    // do some work
    // do some other work
    // call a function
    console.log('I will never be executed by JS');
    // create a new variable
    // do something with the variable
    // do something else
}


// ** You can forget the curlies, if you want to execute a single statement after the if (...) statement, like below:
if (2 === 2) console.log('I am a one-liner statement.');
// ** but remember, it is considered a good practice to use curlies after if (...) statement; even for a single-liner statement, like below:
if (2 === 2) {
    console.log('I am a one-liner statement.');
}


// ********* else ********** //
if (3 < 2) { // this code block will not be executed
    console.log('I will not be executed by JS');
} else { // the code inside else-block will be executed, if the if-block is not executed
    // you can consider this as fallback to your if-block
    // but an else-block is optional
    // you may not need a fallback, and in that case, you may not use it
    console.log('Sorry! 3 is not less that 2.');
}


// ********* else if (expression) ********** //
// but if you need to do multiple checks with if, what do you do?
let age = prompt('How old are you?');

if (age <= 10) {
    alert('Hi kiddo. You are so adorable.');
} else if (age <= 18) {
    alert('Enjoy this young age. You will never have it back.');
} else if (age <= 60) {
    alert('Life is precious. Don\'t waste it');
} else { // this block will execute if all the if-ckecks fail
    alert('You are a wisdom tree. Enlighten us with your wisdom.')
}


// ********* ternary operator ********** //
// this is kind of a shorthand of if-else
let isMember = true;
let isPermittedToJoin = isMember ? 'permitted' : 'not permitted'; // this line equivalent to the if-else block below:

let isPermittedToAttend;
if (isMember) {
    isPermittedToAttend = 'permitted';
} else {
    isPermittedToAttend = 'not permitted';
}




// ********* switch ********** //
// this is an alternative to if-else if-else 
// you may want to use it when there are lot of if-checks you need to do
// you can explore more here: https://javascript.info/switch

let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
}




// ********* Logical operators ********** //
// There are four logical operators in JavaScript: 
// 1. || (OR) 
// 2. && (AND) 
// 3. ! (NOT)
// 4. ?? (Nullish Coalescing)




// ********* || (OR) ********** //
// The logical OR is meant to run on boolean values. 
// If any of its arguments are true, it returns 'true', otherwise it returns 'false'.

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false


// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
if (1 || 0) { // works just like - if( true || false ) -> true
    console.log('truthy!');
}


// Most of the time, OR || is used in an if statement to test if any of the given conditions is true
let hour = 9;
if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}


// Now, there is an extra feature of || (OR) operator
// which is: 
// || finds the first truthy value and return it,
// but if not truthy value if found, return the last operand

const result = value1 || value2 || value3; // find the first truthy value

// The OR || operator does the following:

// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// 3. If all operands have been evaluated (i.e. all were false), meaning none of them were truthy, it returns the last operand.


const result2 = 1 || 0; // ?

const result3 = null || 1; // ?
const result4 = null || 0 || 1; // ?

const result5 = undefined || null || 0; // ?


// there is another extra feature of || (OR) operator
// which is called Short-circuit evaluation
// The action in the right part of || would execute only if the evaluation reaches it. That is, only if the left part is false.
const spcialResult = 3 < 2;
const spcialResult2 = 3 > 2;
specialResult || console.log('I will be executed.');
specialResult2 || console.log('I will not be executed.');



// ********* && (AND) ********** //
// AND returns 'true' if both operands are truthy and otherwise 'false'
console.log(true && true); // true
console.log(false && true); // true
console.log(true && false); // true
console.log(false && false); // false


// an example of && with if
let hour2 = 12;
let minute2 = 30;

if (hour2 == 12 && minute == 30) {
    alert('The time is 12:30');
}


// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
if (1 && 0) { // works just like - if ( true && false ) -> if (false)
    console.log('I am never going to be executed!');
}



// Now, there is an extra feature of && (AND) operator
// which is just the opposite of || (OR) operator
// && finds the first falsy value and return it,
// but if not falsy value if found, return the last operand

const result6 = value1 && value2 && value3; // find the first falsy value

// The AND && operator does the following:

// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to boolean. If the result is false, stops and returns the original value of that operand.
// 3. If all operands have been evaluated (i.e. all were truthy), meaning none of them were falsy, it returns the last operand.

const result7 = 1 && 0; // ?
const result8 = 3 && 4; // ?
const result9 = null && 4; // ?
const result10 = 0 && "never reached"; // ?
const result11 = 3 && 4 && null && 8 && "whatever"; // ?
const result12 = 3 && 4 & 5; // ?


// there is another extra feature of && (AND) operator
// which is called Short-circuit evaluation
// The action in the right part of && would execute only if the evaluation reaches it. That is, only if the left part is true.
const spcialResult3 = 3 < 2;
const spcialResult4 = 3 > 2;
specialResult4 && console.log('I will be executed.');
specialResult3 && console.log('I will not be executed.');



// ********* ! (NOT) ********** //
// represented with an exclamation sign !
// works like below: 
const result13 = !value;

// The operator accepts a single argument and does the following:

// 1. Converts the operand to boolean type: true/false.
// 2. Returns the inverse value.

const result14 = !true; // false
const result15 = !0; // true


// A double NOT !! is sometimes used for converting a value to boolean type:
// just the same as what Boolean() does. Remember?

const result16 = !!'I am a string'; // true
const result17 = !!null; // false
