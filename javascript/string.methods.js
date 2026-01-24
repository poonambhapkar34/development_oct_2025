let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log( text.length);

//The charAt() method returns the character at a specified index (position) in a string:
let text1= "HELLO WORLD";
console.log(text1.charAt(1));//E
//concat() joins two or more strings:
let text12 = "hello";
let text2 = "World";
console.log( text2.concat( text12));
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

let text4 = "Apple, Banana, Kiwi";
console.log(text4.slice(7, 13)); //(si, ei) includes start ind, excludes end ind
console.log(text4.slice(7,)); 
console.log(text4.slice(13));
console.log(text4.slice(-12, -7)); // (End i, start I) //
