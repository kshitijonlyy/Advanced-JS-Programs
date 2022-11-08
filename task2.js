// create a function and using spread operator, pass five different values to it while calling the function and print the values.

function mySpread(...arg){
    console.log(arg);
}
mySpread('This is my function');
mySpread(50);
mySpread(2,4,6);
mySpread('We', 'can', 'input', 'multiple', 'strings', 'too');
mySpread(1,2,3,4,5,6,7);