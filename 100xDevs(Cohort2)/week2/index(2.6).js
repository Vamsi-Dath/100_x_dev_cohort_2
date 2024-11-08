// ARROW FUNCTIONS

function sum(a,b){
    return a+b;
}
    
const ans = sum(2, 3);
console.log("The sum of 1 and 2 is : "+ans);

const asum = (a,b)=>{
    return a+b;
}

const sum2 = asum(2,3);
console.log("The sum of 2 and 3 is : "+sum2);

app.get('/resource', (req, res)=>{
    // do something;
});

app.get('/resource', function(req, res){
    // do something;
});


// MAP

// convert [1,2,3,4,5] to [2,4,6,8,10]

// const input = [1,2,3,4,5];

// const output = input.map((ele)=>{
//     return ele*2;
// })

// console.log(output);

// FILTER

// from input array [1,2,3,4,5] filter out all the even numbers

// const input = [1,2,3,4,5];

// const output = input.filter((ele)=>{
//     return ele%2==0;
// });

// console.log(output);

//startsWith

console.log("Vamsi".startsWith("V")); //true

function forEachExample(arr) {
  console.log("Original Array:", arr);
  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);