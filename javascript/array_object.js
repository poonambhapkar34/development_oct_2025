let no = [55,88,66,10,20,30,55,44,77]// empty array let a=[];homo
let no1 = [10,'pooja',test()] //hetro
let names =['shriya','om','yash','dhoni']
function test(){
    return 6;
}
console.log("no1",no1);

//object {key:value}-one person data. [{}]- multiple data
let emp = { name: 'poonam', age:30, address: 'mumbai', state:"ttt"};//no need to pass index

let emp1 = [{ name: 'poonam', age: 320, address: 'mumbai' }, //in case of array of objects we need to index to fetch the value
            { name: 'poonam1', age: 360, address: 'mumbai1' },
            { name: 'poonam1', age: 380, address: 'mumbai1' }];

console.log('emp', emp);//
console.log(emp1);
console.log(emp1[1]);
console.log(emp1[1].age);


console.log(emp1.length); //length will work only for array not for object
console.log(no.sort());
console.log(names.sort());

const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  //f[3]="Lemon"
console.log(fruits);

const fruits1 = ["Banana", "Orange", "Apple"]; //Creates undefined "holes" in fruits
fruits1[6] = "Lemon"
console.log(fruits1);

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
console.log('person',person); //[{ firstName: 'John', lastName: 'Doe', age: 46}]



let a = 20;
console.log(typeof(a));
console.log(typeof(person));

