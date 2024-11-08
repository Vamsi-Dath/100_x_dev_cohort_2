## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let value = 0;
setTimeout(function run() {
    console.log(value);
    value++;
    setTimeout(run, 1000);
}
, 1000);


(Hint: setTimeout)