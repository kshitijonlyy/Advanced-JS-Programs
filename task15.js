// (a) create an array of 10 elements and print the array with its length.
// (b) print each element of the array using 'for..each', 'for..in', 'for..of' and 'for' loops.
// (c) create another array named teenGuna which stores each element of iAmArray multiplied by three. print teenGuna array, its type and its length.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(arr.length);

console.log('-----------------------------------------------------');

// printing each element using 'for..each' loop
arr.forEach(e => {
    console.log(e);
});

console.log('-----------------------------------------------------');

// printing each element using 'for..in' loop
for (i in arr){
    console.log(arr[i]);
}

console.log('-----------------------------------------------------');

// printing each element using 'for..of' loop
for (j of arr){
    console.log(j);
}

console.log('-----------------------------------------------------');

// printing each element using 'for' loop
for (k=0; k<arr.length; k++){
    console.log(arr[k]);
}

console.log('-----------------------------------------------------');

iAmArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // copied from task14.js
teenGuna = [];
iAmArray.forEach(element => {
    teenGuna.push(element);
});
console.log(teenGuna);
console.log(typeof(teenGuna));
console.log(teenGuna.length);