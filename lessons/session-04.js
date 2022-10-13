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
// 5. equals to: == // note the 'double equal' sign, single equal means value assignment 
// 6. does not equal to: !=
// 7. strictly equals to: === // * (almost same as no. 5)
// 8. does not strictly equal to: !== // * (almost same as no. 6)

const res1 = 2 > 1; // true
const res2 = 2 < 1; // false
const res3 = 2 >= 2; // ?
const res4 = 1 <= 2; // ?
const res5 = 2 == 1; // ?
const res6 = 2 != 1; // ?
const res7 = 2 == '2'; // ? interesting
const res8 = 2 != '2'; // ?
const res9 = 2 === '2'; // ? more interesting
const res10 = 2 !== '2'; // ? guess what



// ********* Comparison of different types ********** //
// When comparing values of different types, JavaScript converts the values to numbers
const res11 = true == 1; // ?
const res12 = false == 0; // ?
const res13 = '2' > 1; // ?
const res14 = '01' == 1; // ?



// ********* Strict equality ********** //
// The '==' operator is not strict, that means it compares its operands after converting them to numbers
// Now the strict equality operator '===' compares its operands without converting them to numbers
