// **********************CLASSES********************** //

// class MyClass{ // creating class and writing functions in the class.
//     myFun(){
//         console.log('this is my function');
//     }
//     myFun2(){ // no need to use 'function' keyword here.
//         console.log('this is my function 2');
//     }
// }

// x = new MyClass(); // creating an object of the class.

// x.myFun(); // calling a function from class [syntax>> object.functionName()]



// **********************CONSTRUCTOR********************** //

// class MyClass{
//     constructor(){
//         console.log('this is a constructor');
//     }
//     myFun(){
//         console.log('this is a function');
//     }
// }

// x = new MyClass(); // constructor will be called automatically here when the object is created. but, function is only executed when called.



// **********************PARAMETERIZED CONSTRUCTOR********************** //

// class MyClass{
//     constructor(name, course){
//         this.name = name; // value of 'name' stored.
//         this.course = course; // value of 'course' stored.
//         console.log('the name is: ', name);
//         console.log('the course is: ', course);
//     }
//     myFun(){
//         console.log('this is a function');
//         console.log(this.name, this.course); // value of 'name' and 'course used.
//     }
// }

// x = new MyClass('kshitij', 'android'); // parameters for the constructor are given here, when the object of class is created.

// x.myFun() // when we want the function to use the same values as the constructor, we use 'this' keyword.

// // if we want the function to take other value, pass the parameters in the function and do not use this (like normal functions).