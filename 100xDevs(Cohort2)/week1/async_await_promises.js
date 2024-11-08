const fs = require('fs');

// function to read file
fs.readFile('data.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});


// Ugly code
// building custom async function over the fs.readFile and using callback function to proceed with the functionality.
function dummyFunction(cb){
    fs.readFile('data.txt', 'utf-8', (err, data)=>{
        cb({err, data});
    });
}

function onDone({err, data}){
    if(err) throw err;
    console.log(data);
}

dummyFunction(onDone);

// Promises
function readFilePromise(){
    return new Promise(function(resolve){
        fs.readFile('data.txt', 'utf-8', (err, data)=>{
            resolve({err, data});
        })
    })
}

readFilePromise().then(onDone);

// Async Await

async function readFileAsync(){
    let {err, data} = await readFilePromise();
    onDone({err, data});
}

readFileAsync();

