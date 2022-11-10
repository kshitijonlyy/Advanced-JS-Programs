function myFun(){
    console.log('start');
    let myPromise = new Promise (function (resolve, reject){
        // 'new' is used because objects are being created.
        // 'function' is a callback function here.
        // function can either be resolved or rejected.

        var error = false; // the errors come from the back-end by default. we are giving it here manually for understanding.

        if (error==false){ // executed when there is no error.
            console.log('resolved');
            // resolve(); // goes to 'then' part of the promise.
            setTimeout(() => {resolve('by kshitij')}, 3000);
        }
        else{ // executed when there is error.
            console.log('rejected');
            reject(); // goes to 'catch' part of the promise.
        }
    });

    myPromise.then(
        (name) => {
            console.log('thanks for resolving', name); // feedback when error is resolved.
        }
    ).catch(
        () => {
            console.log('so bad'); // feedback when error is rejected.
        }
    )
}

myFun();

// parameters passed in resolve() and reject() are arguments for then() and catch().
// when timeout is given in case of promises, the code is executed properly (it waits for the time duration before eexecuting).