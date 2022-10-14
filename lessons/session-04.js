// ********* Comparison ********** //

// * We compare different values
// * The result of the comparison is a boolean - either 'true' or 'false'
// * 'true' means 'correct'
// * 'false' means 'not correct'


// ********* Comparison Operators ********** //
// 1. greater than: >
// 2. less than: <
// 3. greater than or equal to: >=
// 4. less than or equal to: <=
// 5. equals to: == // this changes data types note the 'double equal' sign, single equal means value assignment // 
// 6. does not equal to: != // this changes data type
// 7. strictly equals to: === // * (almost same as no. 5) // does not change data type
// 8. does not strictly equal to: !== // * (almost same as no. 6) // does not change data type


// ********* Strict equality ********** //
// The '==' operator is not strict, that means it compares its operands after converting them to numbers
// Now the strict equality operator '===' compares its operands without converting them to numbers


const res1 = 2 > 1; // true
const res2 = 2 < 1; // false
const res3 = 2 >= 2; // true
const res4 = 1 <= 2; // true
const res5 = 2 == 1; // false
const res6 = 2 != 1; // true
const res7 = 2 == '2'; // true
const res8 = 2 != '2'; // false
const res9 = 2 === '2'; // false
const res10 = 2 !== '2'; // true
const res11 = null == undefined; // true  // special behavior // exception
const res12 = null === undefined; // false



// ********* Comparison of different types ********** //
// When comparing values of different types, JavaScript converts the values to numbers, and then compares them
const res13 = true == 1; // true -> Number(true) == 1 -> 1 == 1 -> true
const res14 = false == 0; // true
const res15 = '2' > 1; // true
const res16 = '01' == 1; // true
const res17 = false == true; // false ->Number(false) == Number(true) -> 0 == 1 -> false
const res18 = '  45  ' == 45; // true
const res19 = '  45n  ' == 45; // false -> NaN == 45



// ********* String Comparison ********** //
// ASCII Table: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

const res20 = 'omera' > 'omera'; // false
const res21 = 'omera' == 'omera'; // true
const res22 = 'omera' === 'omera'; // true
const res23 = 'omera' > 'Omera'; // true

const res24 = 'a' > 'A'; // 90 > 65 -> true
// discuss more on how to compare a string letter by letter

