// initializing all the arrays and objects used in the project.
function create(){
    tempItems = [];
    tempObject = {};
    mainArray = [];
    finalBill = [];
}

// functions executed on click of 'Add Product' button.
function add_prod(){
    var pattern = /^[a-zA-Z]{1,}$/;
    item = document.getElementById('item').value;

    if (pattern.test(item)){
        document.getElementById('item').style.borderColor='';
        document.getElementById('item').placeholder='Enter Item';

        if (tempItems.length!=0){
            for (i=0; i<tempItems.length; i++){
                if (item==tempItems[i]){
                    document.getElementById('alert1').style.display='block';
                    document.getElementById('alert1').innerHTML='Duplicate Value';
                    document.getElementById('item').value='';
                    setTimeout(alertTimer, 900);
                    return false;
                }
            }
        }

        document.getElementById('item_list').innerHTML += "<option>" + item + "</option>";
        tempItems.push(item);
        document.getElementById('alert1').style.display='block';
        document.getElementById('alert1').innerHTML = 'Item "' + item + '" added';
        document.getElementById('item').value = '';
        setTimeout(alertTimer, 900);
        return true;
    }
    else{
        document.getElementById('item').style.borderColor='red';
        document.getElementById('item').placeholder='Invalid Name';
        return false;
    }
}

// functions executed on click of 'Add Price' button.
function add_price(){
    price = document.getElementById('price').value;
    item = document.getElementById('item_list').value;
    var pattern = /^[0-9]{1,}$/;

    if (item=='Select'){
        document.getElementById('price').style.borderColor='red';
        document.getElementById('price').placeholder='Choose An Option First';
        return false;
    }
    else{
        document.getElementById('price').style.borderColor='';
        document.getElementById('price').placeholder='Enter Price';
        
        if (pattern.test(price)){
            tempObject['name'] = item;
            tempObject['price'] = price;
            mainArray.push(tempObject);
            console.log(mainArray);
            tempObject = {};
            document.getElementById('alert1').style.display='block';
            document.getElementById('alert1').innerHTML = 'Price of "' + item + '" set to $' + price;
            document.getElementById('price').value = '';
            setTimeout(alertTimer, 900);
            return true;
        }
        else{
            document.getElementById('price').style.borderColor='red';
            document.getElementById('price').placeholder='Invalid Price';
            return false;
        }
    }
}

// functions executed on click of 'New Transaction' button.
function newTransaction(){
    document.getElementById('alert3').style.visibility='visible';
    for (i=0; i<mainArray.length; i++){
        document.getElementById('main_list').innerHTML += "<option value='" + mainArray[i]['name'] + "'>" + mainArray[i]['name'] + ' $' + mainArray[i]['price'] + '/unit' + "</option>";
    }
    setTimeout(alertTimer, 900);
}