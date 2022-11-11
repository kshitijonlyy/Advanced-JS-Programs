userDetails = {};


// function used when 'PLAY' button is clicked on the homescreen.
function play(){
    var name = document.getElementById('name').value;
    var cards = document.getElementById('cards').value;

    // function to check the 'Name' field is not blank or has invalid input.
    var checkName = () => {
        var pattern = /^[a-zA-Z ]{1,}$/;
        if (name==''){
            document.getElementById('error1').style.display = 'block';
            document.getElementById('error2').style.display = 'none';
            return false;
        }
        else if (pattern.test(name)){
            document.getElementById('error1').style.display = 'none';
            document.getElementById('error2').style.display = 'none';
            userDetails['name'] = name;
            return true;
        }
        else{
            document.getElementById('error1').style.display = 'none';
            document.getElementById('error2').style.display = 'block';
            return false;
        }
    }

    // function to check that user has chosen the number of cards to play the game.
    var checkCards = () => {
        if (cards=='Select'){
            document.getElementById('error3').style.display = 'block';
            return false;
        }
        else{
            document.getElementById('error3').style.display = 'none';
            userDetails['cards'] = parseInt(cards);
            return true;
        }
    }

    // shifting to the next window only when both of the previous functions return true.
    if (checkName()==true && checkCards()==true){
        // testing.
        console.log(userDetails);

        // passing the input to the next screen.
        detailsString = JSON.stringify(userDetails);
        localStorage.setItem('data', detailsString);

        // navigating to the new screen
        window.location.assign('game_main.html');
        return true;
    }
    else{
        return false;
    }
}

function updateStatus(){
    // getting the data from the previous screen.
    temp = localStorage.getItem('data');
    console.log(temp);
    tempDetails = JSON.parse(temp);

    // testing.
    console.log(tempDetails);
    
    document.getElementById('hello').innerHTML = 'Hello ' + tempDetails['name'] + '!';
}