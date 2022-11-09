// **********************VARIABLES********************** //

// var x = 10;
// console.log(x); // 10 will be printed.

// function myFun(){
//     x = 20; // value of x will be changed from 10 to 20 gloabally.
//     console.log(x);
// }

// myFun(); // 20 will be printed.
// console.log(x); // 20 will be printed.



// **********************CONSTANTS********************** //

// const pi = 3.14;
// console.log(pi);

// function myFun2(){
//     pi = 4; // we can not reassign value to 'const', hence this will generate an error.
//     console.log(pi);
// }

// myFun2();
// console.log(pi);



// **********************LET********************** //

// function myFun3(){
//     a = 10;
//     b = 10;
//     if (a!=b){
//         // var z = 50;
//         let z = 50;
//     }
//     console.log(z); // error will show not 'undefined'.
// }

// // when variables are not found: undefined
// // when 'let' is not found: error

// function myFun4(){
//     a = 10;
//     b = 10;
//     z = 20;
//     if (a==b){
//         let z = 50;
//         console.log(z); // 50 will be printed.
//     }
//     console.log(z); // 20 will be printed.
// }

// // let is used to work with variables for a particular block of text (or when we have to work with temporary values).