
// 1. Primitive Data Types:

// Number: Represents both integer and floating-point numbers.
let age = 253;
let price = 154.99;
console.log(age, price )

// String: Represents textual data, enclosed in single or double quotes.
let name = "MyName"
let surname = 'MySurname'
console.log(name, surname)

// Boolean: Represents logical values, either true or false.
let isAdmin = true;
let isUser = false;
console.log(isAdmin, isUser)

// Undefined: Represents a variable that has been declared but not assigned a value.
let name2; 
console.log(name2)

// Null: Represents the intentional absence of any object value.
let person = null;
let y = null;
console.log(person, y)

// Symbol: Represents a unique and immutable value, often used as object keys.
let sym = Symbol('unique');
console.log(sym)

// BigInt: Represents integers with arbitrary precision (larger than the Number type can handle).
let bigNumber = BigInt(1234567890123456789012345678901234567890n);
console.log(bigNumber)