## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.writeFile('file.txt', 'Hello World', {encoding:'utf-8', flag:'a'},(err) => {
    console.log('Inside write file');
    if(err){
        console.log(err);
    }
    console.log('exiting write file');
});

console.log('running expensive operation');

let res = 1;
for(let i = 1; i < 1000000000; i++){
    res = res * i;
}

console.log('expensive operation done');