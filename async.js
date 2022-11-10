async function myFun(){
    console.log('start');
    let myPromise = new Promise (function (resolve, reject){

        var error = false;

        if (error==false){
            console.log('resolved');
            setTimeout(() => {resolve('by kshitij')}, 3000);
        }
        else{
            console.log('rejected');
            reject();
        }
    });
    let result = await myPromise; // without await, the result will show <pending>
    console.log(result);
}

myFun();