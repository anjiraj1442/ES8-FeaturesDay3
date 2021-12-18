//padStart() method pads a string with another string to a certain length from the start of the string and returns a resulting string that reaches a certain length.
//syntax
//String.padStart(padlenght,padstring)
//example
let test = 'anji'.padStart(6,"i");
console.log(test);
let test1 = 'anji'.padStart(7,3);
console.log(test1);

//String.padEn(padlenght,padstring)
//example
let test2 = 'anji'.padEnd(6,'u');
console.log(test2);
let test3 = 'anji'.padEnd(5,0);
console.log(test3);
