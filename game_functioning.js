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
        window.location.assign('game_main.html');
        return true;
    }
    else{
        return false;
    }
}

function updateStatus(){
    console.log(userDetails);
    document.getElementById('hello').innerHTML = 'Hello ' + userDetails['name'] + '!';
}