// ********* Type conversion **********//

// 1. Most of the time, operators and functions automatically convert the values given to them to the right type.
// 2. 'alert()' automatically converts any value to a string to show it
// 3. Mathematical operations convert values to numbers


// ********* Conversion to string: 2 types **********//
// 1. Automatic: specific operators and functions automatically convert the values
// 2. Manual: we use the 'String()' function to convert other values to strings
// Whatever way the conversion happens, be it automatic or manual, the result is the same

// String conversion rules:
// 13 -> '13'
// true -> 'true'
// false -> 'false'
// undefined -> 'undefined'
// null -> 'null'

const thirteen = 13;
const thirteenStr = String(thirteen); // '13'

const omeraIsWebDev = String(true); // 'true'

// console.log(typeof omeraIsWebDev);



// ********* Conversion to number: 2 types **********//
// 1. Automatic: Numeric conversion happens in mathematical functions and expressions automatically
// 2. Manual: we use the 'Number()' function to convert other values to numbers
// Whatever way the conversion happens, be it automatic or manual, the result is the same

// Numeric conversion rules
// '13' -> 13
// true -> 1 
// false -> 0
// undefined -> NaN (Not a Number)
// null -> 0
// Special rule: Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN
// '     12345    ' -> 12345 // Number('12345') -> 12345
// '  some random strings  ' -> NaN // Number('some random strings') -> NaN
// '   234134z   ' -> NaN
// '' -> 0
// '    ' -> 0

const falsyValue = false;
const falsyValueConverted = Number('');
console.log(falsyValueConverted)


// ********* Conversion to boolean: 2 types **********//
// 1. Automatic: It happens in logical operations - later we will see it in details and it's really fun
// 2. Manual: we use the 'Boolean()' function to convert other values to strings
// Whatever way the conversion happens, be it automatic or manual, the result is the same

// Boolean conversion rules:
// 0 -> false
// 1 -> true
// non-empty strings -> true
// "0" -> true
// '' (empty string) -> false
// ' ' -> true
// null -> false
// undefined -> false
// NaN -> false
// other values -> true