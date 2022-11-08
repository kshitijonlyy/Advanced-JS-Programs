// create a class with constructor and two functions. the constructor takes two arguments: name and price. 
// (a) function1 prints the name and price.
// (b) function2 takes one argument and prints the sum of argument and price.

class MyClass{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    myFun1(){
        console.log('name is: ', this.name);
        console.log('price is: ', this.price);
    }
    myFun2(num){
        console.log('sum of price and ', num, ' is: ', (num + this.price));
    }
}

x = new MyClass('kshitij', 4000);
x.myFun1();
console.log('-------------------------------------------------');
x.myFun2(500);