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



