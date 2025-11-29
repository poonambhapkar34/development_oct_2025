//let/const/var var_name = "jdjhvjcb"

//redeclaration: redeclaration of variable is not possible with let and const keword
let a = 20;
//let a = 30;

//redeclaration: redeclaration of variable is possible with var keword
//default keyword var 
var b = 20;
var b = 30;
console.log('b',b);

const t = 1;
//const t = 2;

//scope {}
//let/const : block level scope, cant acessable outside the block
//var : function level scope
//const: 



if(true){
//block
let c = 10;
console.log('c',c);
}

if(true){
    var d = 30;
}
console.log("d",d);

if(true){
    const e = 10;
}
//console.log('e',e);

//reassigning value
//let/var : reassigning value with let keyword is possible
//const

let x = 30;
x = 20;

var y = 20;
y = 60;

const z = 20;
//z = 30

//declr + defn

  let g ;
 console.log('g', g);
 g = 60;
 console.log('g', g);

 var h ;
 console.log('h', h);
 h = 10;
 console.log('h', h);

//  const w;
//  w = 90

//Hoisting : we are defining first  variable/function first then we are declaring it
//it is possible only with the var keyword , not with let and const
// l = 50;
// let l; //can not access l before initialization
// console.log('l',l);

p = 50;
var p; //can not access l before initialization
console.log('p',p);

// k = 20;
// const k; 

//var m : number = 20 ts syntax 
