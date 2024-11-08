// EASY

// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// let value = 0;
// setInterval(() => {
//   console.log(value);
//     value++;
// }, 1000)

// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

// let value = 0;
// setTimeout(function run() {
//     console.log(value);
//     value++;
//     setTimeout(run, 1000);
// }
// , 1000);

// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err,data) =>{
//     console.log('Inside read file');
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });



// console.log('running expensive operation');

// let res = 1;
// for(let i = 1; i < 1000000000; i++){
//     res = res * i;
// }

// console.log('expensive operation done');


// USING PROMISES

// function fileRead(){
//     return new Promise((resolve, reject) => {
//         fs.readFile('file.txt', 'utf8', (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// function onError(err){
//     console.log(err);
// }

// fileRead().then(onDone).catch(onError);


// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// fs.writeFile('file.txt', 'Hello World', {encoding:'utf-8', flag:'a'},(err) => {
//     console.log('Inside write file');
//     if(err){
//         console.log(err);
//     }
//     console.log('exiting write file');
// });

// console.log('running expensive operation');

// let res = 1;
// for(let i = 1; i < 1000000000; i++){
//     res = res * i;
// }

// console.log('expensive operation done');

// MEDIUM

// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


// function removeExtraSpaces(str1){
//     strArray = str1.split(' ');
//     console.log(strArray);
//     let result = '';
//     for(let i in strArray){
//         if(strArray[i] != ''){
//             result += strArray[i] + ' ';
//         }
//     }
//     return result;
// }

// const fs = require('fs');

// function readFromFile(){
//     return new Promise((resolve, reject)=>{
//         fs.readFile('file.txt', 'utf-8', (err, data) => {
//             console.log('Inside read file');
//             if(err){
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// function writeToFile(data){
//     return new Promise((resolve, reject) => {
//         fs.writeFile('file.txt', data, {encoding:'utf-8', flag:'w'}, (err) => {
//             console.log('Inside write file');
//             if(err){
//                 reject(err);
//             }
//             resolve();
//         });
//     });
// }

// function onDone(data){
//     console.log("received data: "+data);
//     let cleanedData = removeExtraSpaces(data);
//     console.log("cleaned data: "+cleanedData);
//     return cleanedData;
// }

// async function main(){
//     console.log('File cleaning started');
//     let data = await readFromFile();
//     let cleanedData = onDone(data);
//     await writeToFile(cleanedData);
//     console.log('File cleaned');
// }

// main();

// PS C:\Users\Vamsi Dath\Desktop\UIC Documents\Personal\Cohort2\Assignments(Cohort2.0)\assignments\week-2\01-async-js\easy> node .\index.js

// File cleaning started
// Inside read file
// received data: Hi                                       I                  am                Vamsi    Dath         Meka.
// [
//   'Hi', '',      '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      'I',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   'am',    '', '', '', '',     '',      '',
//   '',   '',      '', '', '', '',     '',      '',
//   '',   'Vamsi', '', '', '', 'Dath', '',      '',
//   '',   '',      '', '', '', '',     'Meka.', ''
// ]
// cleaned data: Hi I am Vamsi Dath Meka.
// Inside write file
// File cleaned

// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


