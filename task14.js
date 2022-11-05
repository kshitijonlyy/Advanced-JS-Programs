// (a) create an array of 20 elements. using 'for..each' print each element of the array.
// (b) create a sub-array which is a filter of main array of odd elements. print the sub-array.
// (c) create another variable named 'iAmString' which is having string formatted data of subarray. print 'iAmString' with its type.
// (d) convert 'iAmString' into original array with name 'iAmArray'. add two elements in 'iAmArray' and print it with its type.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 12, 13, 14, 15, 16, 17, 18, 19, 20];

arr.forEach(e => {
    console.log(e);
});

console.log('-----------------------------------------------------');

subArray = arr.filter(e => {
    if (e%2!=0){
        return e;
    }
})
console.log(subArray);

console.log('-----------------------------------------------------');

iAmString = JSON.stringify(subArray);
console.log(iAmString);
console.log(typeof(iAmString));

console.log('-----------------------------------------------------');

iAmArray = JSON.parse(iAmString);
console.log(iAmArray);
console.log(typeof(iAmArray));