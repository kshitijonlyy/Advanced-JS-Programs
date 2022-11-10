// initializing all the arrays and objects used in the project.
function create(){
    tempItems = [];
    tempObject = {};
    mainArray = [];
    finalBill = [];
    count = 1;
}

// timeout function called for showing alerts.
function alertTimer(){
    document.getElementById('alert1').style.display = 'none';
    document.getElementById('alert2').style.visibility = 'hidden';
}

// functions executed on click of 'Add Product' button.
function add_prod(){
    var pattern = /^[a-zA-Z ]{1,}$/;
    item = document.getElementById('item').value;

    if (pattern.test(item)){
        document.getElementById('item').style.borderColor = '';
        document.getElementById('item').placeholder = 'Enter Item';

        if (tempItems.length!=0){
            for (i=0; i<tempItems.length; i++){
                if (item==tempItems[i]){
                    document.getElementById('alert1').style.display = 'block';
                    document.getElementById('alert1').innerHTML = 'Duplicate Value';
                    document.getElementById('item').value = '';
                    setTimeout(alertTimer, 900);
                    return false;
                }
            }
        }

        document.getElementById('item_list').innerHTML += "<option>" + item + "</option>";
        tempItems.push(item);
        document.getElementById('alert1').style.display = 'block';
        document.getElementById('alert1').innerHTML = 'Item "' + item + '" added';
        document.getElementById('item').value = '';
        setTimeout(alertTimer, 900);
        return true;
    }
    else{
        document.getElementById('item').style.borderColor = 'red';
        document.getElementById('item').placeholder = 'Invalid Name';
        return false;
    }
}

// functions executed on click of 'Add Price' button.
function add_price(){
    price = document.getElementById('price').value;
    item = document.getElementById('item_list').value;
    var pattern = /^[0-9/.]{1,}$/;

    if (item=='Select'){
        document.getElementById('price').style.borderColor = 'red';
        document.getElementById('price').placeholder = 'Choose An Option First';
        return false;
    }
    else{
        document.getElementById('price').style.borderColor = '';
        document.getElementById('price').placeholder = 'Enter Price';
        
        if (pattern.test(price)){
            if (mainArray.length!=0){
                for (i=0; i<mainArray.length; i++){
                    if (mainArray[i]['name']==item){
                        mainArray[i]['price'] = parseFloat(price).toFixed(2);
                        document.getElementById('alert1').style.display = 'block';
                        document.getElementById('alert1').innerHTML = 'Price Updated';
                        document.getElementById('price').value = '';
                        setTimeout(alertTimer, 900);
                        return true;
                    }
                }
            }
            tempObject['name'] = item;
            tempObject['price'] = parseFloat(price).toFixed(2);
            mainArray.push(tempObject);
            tempObject = {};
            document.getElementById('alert1').style.display = 'block';
            document.getElementById('alert1').innerHTML = 'Price of "' + item + '" set to $' + price;
            document.getElementById('price').value = '';
            setTimeout(alertTimer, 900);
            return true;
        }
        else{
            document.getElementById('price').style.borderColor = 'red';
            document.getElementById('price').placeholder = 'Invalid Price';
            return false;
        }
    }
}

// functions executed on click of 'New Transaction' button.
function newTransaction(){
    finalBill = [];
    document.getElementById('body3').innerHTML = "<table cellspacing='0'><tr><th>Product</th><th>$/Unit</th><th>Unit(s)</th><th>Amount</th></tr></table>"

    if (mainArray.length==0){
        document.getElementById('alert2').style.visibility = 'visible';
        document.getElementById('alert2').innerHTML = 'No Data Found';
        setTimeout(alertTimer, 900);
        return false;
    }
    else{
        document.getElementById('alert2').style.visibility = 'visible';
        document.getElementById('alert2').innerHTML = 'New Transaction In Progress';
        setTimeout(alertTimer, 900);

        document.getElementById('main_list').innerHTML = "<option selected disabled>Select</option>";
        for (i=0; i<mainArray.length; i++){
            document.getElementById('main_list').innerHTML += "<option value='" + mainArray[i]['name'] + "'>" + mainArray[i]['name'] + ' $' + mainArray[i]['price'] + '/unit' + "</option>";
        }
        return true;
    }
}

// functions executed on click of the numbers.
function quantity(num){
    if (document.getElementById('main_list').value=='Select'){
        document.getElementById('main_list').style.borderColor = 'red';
        return false;
    }
    else{
        document.getElementById('main_list').style.borderColor = '';
        document.getElementById('units').value += num;
        return true;
    }
}
function erase(){
    document.getElementById('units').value = '';
}

// functions executed on click of 'Add To Cart' button.
function addToCart(){
    units = parseInt(document.getElementById('units').value);
    product = document.getElementById('main_list').value;
    
    document.getElementById('units').value = '';
    
    if (product=='Select'){
        document.getElementById('main_list').style.borderColor = 'red';
        return false;
    }
    else{
        document.getElementById('main_list').style.borderColor = '';
        for (i=0; i<mainArray.length; i++){
            if(product==mainArray[i]['name']){
                finalBill.push(mainArray[i]);
                for(j=0; j<finalBill.length; j++){
                    if(product==finalBill[j]['name']){
                        finalBill[j]['quantity'] = units;
                    }
                }
            }
        }
    
        setFinalBill = new Set();
        for (k=0; k<finalBill.length; k++){
            setFinalBill.add(finalBill[k]);
        }
        alert('Added To Cart')
        arrayFinalBill = Array.from(setFinalBill);
        return true;
    }
}

// functions executed on click of 'Pay Now' button.
function payNow(){
    document.getElementById('body3').innerHTML = "<div id='receipt'></div>";

    dateTime = new Date();
    document.getElementById('receipt').innerHTML = 'Date: ' + dateTime.getDate() + '/' + (parseInt(dateTime.getMonth())+1) + '/' + dateTime.getFullYear();
    document.getElementById('receipt').innerHTML += "<br>";
    document.getElementById('receipt').innerHTML += 'Time: ' + dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();
    
    document.getElementById('receipt').innerHTML += "<br>";
    
    document.getElementById('receipt').innerHTML += "<table id='bill'></table>"
    document.getElementById('bill').innerHTML = "<tr><th>Product</th><th>$/Unit</th><th>Unit(s)</th><th>Amount</th></tr>"

    for (i=0; i<arrayFinalBill.length; i++){
        document.getElementById('bill').innerHTML += "<tr id='item" + i +"'></tr>"
        document.getElementById('item'+[i]).innerHTML = "<td>" + arrayFinalBill[i]['name'];
        document.getElementById('item'+[i]).innerHTML += "<td>" + arrayFinalBill[i]['price'];
        document.getElementById('item'+[i]).innerHTML += "<td>" + arrayFinalBill[i]['quantity'];
        document.getElementById('item'+[i]).innerHTML += "<td class='amount'>" + (arrayFinalBill[i]['price']*arrayFinalBill[i]['quantity']).toFixed(2);
    }

    elements = document.getElementsByClassName('amount').length;
    totalAmount = 0;
    for (j=0; j<elements; j++){
        totalAmount += parseFloat(document.getElementsByClassName('amount')[j].innerHTML);
    }

    document.getElementById('receipt').innerHTML += "<br>";
    document.getElementById('receipt').innerHTML += 'Total Amount: $' + totalAmount;
    document.getElementById('receipt').innerHTML += "<br>";
    document.getElementById('receipt').innerHTML += 'Taxes: $' + (0.05*totalAmount).toFixed(2);
    document.getElementById('receipt').innerHTML += "<br>";
    document.getElementById('receipt').innerHTML += "<br>";
    document.getElementById('receipt').innerHTML += 'Amount Due: $' + (totalAmount+(0.05*totalAmount));
}

// functions executed on click of 'Print' button.
function printReceipt(){
    var printing = window.open();
    printing.document.write(document.getElementById('receipt').innerHTML);
    printing.print()
}