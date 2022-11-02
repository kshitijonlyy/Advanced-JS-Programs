// create a function using spread operator which prints the arguments passed in it divided by 5. call the function 2 times: 1st time pass 5 values, 2nd time pass 10 values in it.

function abc(...arg){
    for(i=0; i<arg.length; i++){
        console.log('Element at index ' + i + ' divided by 5: ' + (arg[i]/5));
    }
}

abc(10, 20, 30, 40, 50);
console.log('------------------------------------')
abc(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);