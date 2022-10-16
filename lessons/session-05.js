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


// ** You can forget the curlies, if you execute a single statement after the if (...) statement, like below:
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


// ternary operator