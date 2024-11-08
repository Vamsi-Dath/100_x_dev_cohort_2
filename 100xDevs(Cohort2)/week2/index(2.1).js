// // Async Await and Promises

// const fs = require('fs');

// fs.readFile('data.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// });

// function writingToFile(stringData){
//     return new Promise((resolve)=>{
//         fs.writeFile('data.txt', stringData, {encoding: 'utf-8', flag: 'a'}, (err)=>{
//             if(err) throw err;
//             resolve();
//         });
//     }, (reject)=>{
//         console.log('Error in writing to file');
//     });
// }

// function readFileData(){
//     fs.readFile('data.txt', 'utf-8', (err, data)=>{
//         console.log(data);
//     });
// }

// async function main(arr){
//     let empty_str = '';
//     for(let i in arr){
//         empty_str += "'" + arr[i] + "'";
//         empty_str += ', ';
//     }

//     await writingToFile(empty_str);
//     readFileData();
// }

// main(['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']);

// // PS C:\Users\Vamsi Dath\Desktop\UIC Documents\Personal\Cohort2\100xDevs(Cohort2)\week2> node .\index.js
// // 'a', 'b', 'c', 'd', 
// // 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 


// function readFileData(){
//     return new Promise(function (resolve, reject){
//         fs.readFile('data.txt', 'utf-8', (err, data)=>{
//             if(err) reject();
//             resolve(data);
//         });
//     });
// }

// function dataRead(data){
//     console.log(data);
// }

// function errorRead(err){
//     console.log('Error in reading file');
// }

// readFileData().then(dataRead).catch(errorRead);

// PS C:\Users\Vamsi Dath\Desktop\UIC Documents\Personal\Cohort2\100xDevs(Cohort2)\week2> node .\index.js
// Error in reading file // {the file is not present} 

