// console.log("Hello World");
// console.log(a);

// Since JS is an interpreted language, it will run the code line by line and thus we only get an error on the second line and not the first line.

// let first_name = "John";
// let last_name = "Doe";

// console.log("Hello" + " " + first_name + " " + last_name); // Hello John Doe

// var a = 1;
// a = 2;
// console.log(a) // 2

// let b = 1;
// b = 2;
// console.log(b) // 2

// const c = 1;
// c = 2;
// console.log(c) // Error // TypeError: Assignment to constant variable.


// let name = "Vamsi";
// let age = 21;
// let isStudent = true;

// console.log(name, age, isStudent); // Vamsi 21 true

// if (isStudent == true) {
//     console.log(name + " is a student");
// }else{
//     console.log(name + " is not a student");
// }

// // Vamsi is a student

// let answer = 0;

// for (let i = 0; i <= 100; i++) {
//     answer += i;
// }
// console.log(answer); // 5050


// let person1 = "John";
// let person2 = "Doe";
// let person3 = "Smith";

// const persons = ["John", "Doe", "Smith"];

// for (let i=0; i<persons.length; i++) {
//     console.log(persons[i]);
// }

// // % - Modulus
// // / - Division


// const user1 = {
//     name: "John",
//     age: 21,
//     isStudent: true
// }

// const user2 = {
//     name: "Doe",
//     age: 22,
//     isStudent: false
// }

// console.log(user1.name, user1.age, user1.isStudent); // John 21 true
// console.log(user2["name"], user2["age"], user2["isStudent"]); // Doe 22 false

// const allUsers = [{
//     name: "John",
//     age: 21,
//     isStudent: true
// }, {
//     name: "Doe",
//     age: 22,
//     isStudent: false
// }]

// console.log(allUsers[0].name, allUsers[0].age, allUsers[0].isStudent); // John 21 true

// console.log(allUsers); // [ { name: 'John', age: 21, isStudent: true }, { name: 'Doe', age: 22, isStudent: false } ]
// // objects inside an array


//  function findSum(a, b){
//     // do things with the input and return the output
//     return a + bc;
//  }
// console.log("trash"); // control only reaches a function after its called so trash gets printed and then the roor is raised that "bc is not defined"

// const value = findSum(2, 3);
// console.log(value); // 5


// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//     return arithmeticFinalFunction(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// console.log(calculateArithmetic(2, 3, add)); // 5
// console.log(calculateArithmetic(2, 3, subtract)); // -1


// function greet(){
//     console.log("Hello World");
// }
// setTimeout(greet, 1 * 1000); //run the function greet after 1 second
// setInterval(greet, 1 * 1000); //run the function greet every 1 second


// // Counter in JS that runs from 30 to 0
// let i  = 30
// function func(){
//     console.log(i);
//     i = i - 1;
//     if(i<0){
//         clearInterval(intr);
//     }
        
// }
// const intr = setInterval(func, 1*1000);

// // Calculate the time it takes between a setTimeout call and the inner function actually running

// function func(){
//     console.timeEnd("Time taken");
//     console.log("Hello World");
// }

// console.time("Time taken");
// setTimeout(func, 1 * 1000);


//Create a terminal clock (HH:MM:SS) that updates every second

function clock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
}

setInterval(clock, 1 * 1000); //run the function clock every 1 second