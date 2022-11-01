// create a function multiply() which takes three arguments and prints the arguments multiplied by one another (their product)

function multiply(a,b,c){
    console.log('Product of '+a+', '+b+' and '+c+' is: '+a*b*c);
}
multiply(2,5,10);


console.log('----------------------------------------------')
// create a function using 'spread' operator and pass five different arguments in it while calling and print all the arguments.
console.log('----------------------------------------------')

function mySpread(...arg){
    console.log(arg);
}
mySpread('This is my function');
mySpread(50);
mySpread(2,4,6);
mySpread('We', 'can', 'input', 'multiple', 'strings', 'too');
mySpread(1,2,3,4,5,6,7);