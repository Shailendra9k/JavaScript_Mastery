//Primitive and Non-Primitives two main data types

// Primitives datatypes are call by value and when their value is shared with other always copy of value is shared and orginal value always remains same

//Non-primitive or reference type are call by reference and whenever their value is shared with another variable their reference is shared so, what ever changes are made in either original value also changes

// There are mainly 7 primitive data types: 
//Sting, Number, Boolean, null(empty), undefined( value to be assigned later), Symbol(to make  variable unique), BigInt(to store big integer values like scientific calculation with large data)

// Some examples of primitive data types
 const score = 100;
 const scoreVaule = 100.5;
 const myName = "Shailendra";
const decision = false;
const temperature = null;
let total; //undefined means value to be assigned later
const id = Symbol("456")
const anotherId = Symbol("456");
//console.log(id === anotherId);

//id and anotherId variables are not same eventhough their data and data types are same because Symbol makes any variable unique
const bigNumber = 3214667891455796n;

//Reference or Non-Primitive datatypes
//Array, Objects, Functions

const cities = ["Helsinki", "Espoo", "Vantaa"];

const myObj = {
  name:"Shailendra",
  age:30,
  work:function(){
    console.log("keep learning");
  },
  car:{
    brand:"toyota",
    color:"black",
    model:2022
  }
}
//Object is represented by values pairs can contain anytypes like string, number, boolean, fucntion, array, another object and so on

//Checking datatypes:
 //console.log(typeof bigNumber);

 //Ecma source link: https://262.ecma-international.org/5.1/#sec-11.4.3

 //Stack memory is for Primitive data type allocations  

let profile = "FullStack developer";
let anotherProfile = profile
anotherProfile = "Software engineer"
console.log(profile);
console.log(anotherProfile);

//Heap memory is for reference datatype allocations

let job1 = {
  company:"CGI",
  role:"Software developer",
  joinedYear:2024

}
let job2 = job1;
job2.company = "tieto";

console.log(job1)
console.log(job2)