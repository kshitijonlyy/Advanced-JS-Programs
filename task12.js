// create an array of 20 elements and perform the following functions:
// (a) using 'for..of' print all the elements.
// (b) create a sub-array named 'array_string' which stores the original array in the form of string. print 'array_string' and it's type.
// (c) create another array named 'myArray' which stores 'array_string' into original array. print 'myArray' and it's type.

mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (x of mainArray){
    console.log(x);
}

console.log('---------------------------------------------------------')

array_string = JSON.stringify(mainArray);
console.log(mainArray);
console.log(typeof(array_string));

console.log('---------------------------------------------------------')

myArray = JSON.parse(array_string);
console.log(myArray);
console.log(typeof(myArray));