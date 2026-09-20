// String
let name = "Abdullah";
let city = "Peshawar";

// Number
let age = 21;
let price = 1500;

// Boolean
let isStudent = true;

// Undefined
let university;

// Null
let emptyValue = null;


console.log("========== DATA TYPES ==========");

console.log("Name:", name);
console.log("Type of name:", typeof name);

console.log("City:", city);
console.log("Type of city:", typeof city);

console.log("Age:", age);
console.log("Type of age:", typeof age);

console.log("Price:", price);
console.log("Type of price:", typeof price);

console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

console.log("University:", university);
console.log("Type of university:", typeof university);

console.log("Empty Value:", emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);



console.log("========== TYPE CONVERSION ==========");


// 1. Convert String to Number


let stringNumber = "25";

let convertedNumber = Number(stringNumber);

console.log("Original value:", stringNumber);
console.log("Original type:", typeof stringNumber);

console.log("Converted value:", convertedNumber);
console.log("Converted type:", typeof convertedNumber);


// 2. Convert Number to String


let numberValue = 100;

let convertedString = String(numberValue);

console.log("Original value:", numberValue);
console.log("Original type:", typeof numberValue);

console.log("Converted value:", convertedString);
console.log("Converted type:", typeof convertedString);



// 3. Convert String to Boolean


let stringBoolean = "true";

let convertedBoolean = Boolean(stringBoolean);

console.log("Original value:", stringBoolean);
console.log("Original type:", typeof stringBoolean);

console.log("Converted value:", convertedBoolean);
console.log("Converted type:", typeof convertedBoolean);





console.log("========== CONVERSION RESULTS ==========");

console.log(
    "String '25' converted to:",
    convertedNumber,
    "| Type:",
    typeof convertedNumber
);

console.log(
    "Number 100 converted to:",
    convertedString,
    "| Type:",
    typeof convertedString
);

console.log(
    "String 'true' converted to:",
    convertedBoolean,
    "| Type:",
    typeof convertedBoolean
);


// 1. Convert a non-numeric string into a number


let nonNumericString = "abc";

let convertedInvalidNumber = Number(nonNumericString);

console.log("========== NON-NUMERIC STRING ==========");

console.log(
    "Original value:",
    nonNumericString
);

console.log(
    "Converted value:",
    convertedInvalidNumber
);

console.log(
    "Converted type:",
    typeof convertedInvalidNumber
);

// 2. Convert 0 into Boolean


let zeroValue = 0;

let zeroBoolean = Boolean(zeroValue);

console.log("========== 0 TO BOOLEAN ==========");

console.log(
    "Original value:",
    zeroValue
);

console.log(
    "Converted value:",
    zeroBoolean
);

console.log(
    "Converted type:",
    typeof zeroBoolean
);

// 3. Convert 1 into Boolean


let oneValue = 1;

let oneBoolean = Boolean(oneValue);

console.log("========== 1 TO BOOLEAN ==========");

console.log(
    "Original value:",
    oneValue
);

console.log(
    "Converted value:",
    oneBoolean
);

console.log(
    "Converted type:",
    typeof oneBoolean
);
