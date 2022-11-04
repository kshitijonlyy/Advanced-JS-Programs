function create(){
    tempItems = [];
    tempObject = {};
    mainArray = [];
    finalBill = [];
}
function add_prod(){
    item = document.getElementById('item').value;
    document.getElementById('item_list').innerHTML += "<option>" + item + "</option>";
    tempItems.push(item);
    document.getElementById('alert1').style.display='block';
    document.getElementById('alert1').innerHTML = 'Item "' + item + '" added';
    document.getElementById('item').value = '';
    setTimeout(alertTimer, 900);
}
function alertTimer(){
    document.getElementById('alert1').style.display='none';
    document.getElementById('alert2').style.display='none';
    document.getElementById('alert3').style.visibility='hidden';
}
function add_price(){
    price = document.getElementById('price').value;
    item = document.getElementById('item_list').value;
    tempObject['name'] = item;
    tempObject['price'] = price;
    mainArray.push(tempObject);
    tempObject = {};
    document.getElementById('alert2').style.display='block';
    document.getElementById('alert2').innerHTML = 'Price of "' + item + '" set to $' + price;
    document.getElementById('price').value = '';
    setTimeout(alertTimer, 900);
}
function newTransaction(){
    document.getElementById('alert3').style.visibility='visible';
    for (i=0; i<mainArray.length; i++){
        document.getElementById('main_list').innerHTML += "<option value='" + mainArray[i]['name'] + "'>" + mainArray[i]['name'] + ' $' + mainArray[i]['price'] + '/unit' + "</option>";
    }
    setTimeout(alertTimer, 900);
}
function quantity(num){
    document.getElementById('units').value += num;
}
function erase(){
    document.getElementById('units').value = '';
}
function addToCart(){
    units = parseInt(document.getElementById('units').value);
    document.getElementById('units').value = '';
    product = document.getElementById('main_list').value;
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
    alert('Added To Cart')
    // console.log(finalBill);
}