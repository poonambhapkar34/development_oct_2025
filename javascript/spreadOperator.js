//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
let a = [10,55,66,664,88]; 
let d = [ 50,6,8,9,7]
// let b = a;
let b = [...d, ...a];
console.log("b",b);

let[item1,item2, ...restItem] = a;
console.log(restItem);

//object

const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

let newCar = {...car_more, ...car};
console.log(newCar);

//flat:
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
console.log(newArr);

//The reduce() Method
//Find the sum of all numbers in an array:
const numbers = [45, 54, 99, 26, 25];
//console.log(numbers.reduce());


const numbers1 = [45, 54, 99, 26, 25,4];
let res = numbers1.every((item) => item > 18); 

console.log(res);

const numbers2 = [5, 4, 9, 6, 5,4];
let res1 = numbers2.some((item) => item > 18); 

console.log(res1);