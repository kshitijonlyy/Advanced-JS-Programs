function myFun(){
    console.log('start');
    let myPromise = new Promise (function (resolve, reject){
        // 'new' is used because an object is created.
        // 'function' is a callback function here.
        // function can either be resolved or rejected.

        var error = true; // the errors come from the back-end by default. we are giving it here manually for understanding.

        if (error!=true){ // executed when there is no error.
            console.log('resolved');
            resolve(); // goes to 'then' part of the promise.
        }
        else{ // executed when there is error.
            console.log('rejected');
            reject(); // goes to 'catch' part of the promise.
        }
    });

    myPromise.then(
        () => {
            console.log('thanks for resolving');
        }
    ).catch(
        () => {
            console.log('so bad');
        }
    )
}

myFun();