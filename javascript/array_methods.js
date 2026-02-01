const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//push adds ele at end
 fruits.push("kivi") //The push() method returns the new array length:
 console.log(fruits);
console.log("push returns:", fruits.push());




//pop removes ele from the end of array
//fruits.pop();  //The pop() method returns the value that was "popped out"
console.log("pop() returns : ", fruits.pop());
fruits.pop(); 
console.log(fruits);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the value that was "shifted out":
//[ 'Banana', 'Orange', 'Apple' ]
fruits.shift();
console.log("shift()",fruits);  //[ 'Orange', 'Apple' ]
console.log("shift()",fruits.shift()); // 'Orange'
console.log("shift()",fruits); //['Apple' ]

 //The unshift() method adds a new element to an array (at the beginning), 
 let num  = [10,20,5,58,9,4,33,66];

 num.unshift(55);
 console.log("num",num);
 console.log(num.unshift()); //9
  
 
 const name = ['ram','om','krish'];
 delete name[1];
console.log(name.length);
 console.log(name);
 console.log(name.length);
 
 const a = ['A','B','E','P']
 a.pop('B');
 console.log(a);
 
 const fruits1 = ["Banana1", "Orange1", "Apple1", "Mango1"];
 fruits1.splice(0,2);
 console.log(fruits1);
//  pop()	No (Last only)	Mutates original; decreases length.
// shift()	No (First only)	Mutates original; re-indexes remaining items.
// splice()	Yes	Mutates original; removes specified count.
// delete op	Yes	leaves undefined "hole"; length stays same.
 
const d= ['cat','dog','rat','rrrr','pppp','uuuuu'];

let v = d.slice(2,4); //returns new array, slice will not change original array.
console.log("v",v);
console.log("d",d);


