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

let text4 = "Apple,kBanana, Kiwi";
console.log(text4.slice(7, 13)); //(si, ei) includes start ind, excludes end ind
console.log(text4.slice(7,)); 
console.log(text4.slice(13));
console.log(text4.slice(-12, -7)); // (End i, start I) //
console.log(text4.substring(-12, 7)); //(0,0) //It will consider negative indexes as a 0
Fname = "   poonam    ";
LName= "bhapkar"
FullName = Fname.concat(LName)//Fname + LName
console.log(text4.substr(7,6)); // (SI , len)
console.log(Fname.trim());

num = 10;
console.log(typeof(num));
console.log(typeof(num.toString()));

let Ntext = "poonam | patil | bhapkar";
console.log(Ntext.split("|")); //Split will return array // object

let text3 = "Hello world, welcome to the universe.";
console.log(text3.toLocaleLowerCase().includes("world"));
