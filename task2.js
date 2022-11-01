// create an array of 10 elements of any value and print the following:
// (a) total elements
// (b) element at index 9
// (c) print all elements using loop

arr = ['hello', 'world', 'this', 'is', 'an', 'array', 'which', 'has', 'ten', 'elements'];

console.log('total elements in array: ' + arr.length);
console.log('------------------------------------')
console.log('element at index 9: ' + arr[9]);
console.log('------------------------------------')
for (i=0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log('----------------------------------------------')
// create an array with name 'friends' which has 4 values of your friend names and:
// (a) print all array
// (b) print the type of array
// (c) delete the last friend name
// (d) add two new friend names
// (e) replace the friend at position 2 with 'Bill Gates'
console.log('----------------------------------------------')

friends = ['monica', 'chandler', 'phoebe', 'joey']
console.log('complete array: ' + friends);
console.log('------------------------------------')
console.log('type of array is: ' + typeof(friends));
console.log('------------------------------------')
friends.pop()
console.log("array after deleteing the last friend's name: " + friends);
console.log('------------------------------------')
friends.push('ross');
friends.push('rachel');
console.log("array after adding two more friend's names: " + friends);
console.log('------------------------------------')
friends[2] = 'bill gates';
console.log("array after replacing the friend at position 2 with 'Bill Gates': " + friends);


console.log('----------------------------------------------')
// create a function using spread operator which prints the arguments passed in it divided by 5. call the function 2 times: 1st time pass 5 values, 2nd time pass 10 values in it.
console.log('----------------------------------------------')

function abc(...arg){
    for(i=0; i<arg.length; i++){
        console.log('Element at index ' + i + ' divided by 5: ' + (arg[i]/5));
    }
}

abc(10, 20, 30, 40, 50);
console.log('------------------------------------')
abc(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);