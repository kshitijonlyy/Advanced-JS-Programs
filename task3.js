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