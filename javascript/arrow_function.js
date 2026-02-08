//Arrow Functions allow a shorter syntax for function expressions.

//You can skip the function keyword, the return keyword, and the curly brackets:

function add(a, b){
    return a + b;
}

result = add(10, 20);
console.log(result);

 //add = (a, b) => a + b;
 //let result = add(4, 5);
 //console.log(result);

 let a = [10,20,30,40]
 let res = a.map(item => item * 10) //map will return new array 10*10 = 100
 
 console.log(res);
 console.log(a);

let student = [
    { name: "om", age: 20 },
    { name: "om1", age: 22 },
    { name: "om2", age: 17 },
    { name: "om3", age: 15 }
]
let stud = student.filter((ele)=>{
//  if(ele.age< 18){
//     return ele;
//  }
return ele.age< 18
})
console.log(stud);

//find
let singleRec = student.find((obj)=>{
  return  obj.name == "om" ;
})
console.log(singleRec);

let b = a.find((item)=>{
   return item == 30
})
console.log(b);

//let studRes = student.forEach(())

let student1 = [
    { name: "sai", age: 20 },
    { name: "shital", age: 22 },
    { name: "omkar", age: 17 },
    { name: "shan", age: 15 }
]
var a1 = [];
for (let index = 0; index < student1.length; index++) {

    if (student1[index].age >= 20) { //20 >= 20
        a1.push(student1[index])
    }

}
console.log(a1);

let b1=[];
 student1.forEach((ele)=>{
   if(ele.age >= 20) {
    b1.push(ele);
   }
})
console.log(b1);



