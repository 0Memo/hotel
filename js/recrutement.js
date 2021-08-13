// VERIFICATIONS FORMULAIRE
var tips14 = document.getElementById('tips14');
var tips15 = document.getElementById('tips15');





document.getElementById('inputLastName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips11 = document.getElementById('tips11');
        this.style.border="2px solid red";
        this.style.color="red";
        tips11.style.color="red";
        tips11.style.display="block";
    }
    else{
        var tips11 = document.getElementById('tips11');
        this.style.border="2px solid green";
        this.style.color="black";
        tips11.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips12 = document.getElementById('tips12');
        this.style.border="2px solid red";
        this.style.color="red";
        tips12.style.color="red";
        tips12.style.display="block";
    }
    else{
        var tips12 = document.getElementById('tips12');
        this.style.border="2px solid green";
        this.style.color="black";
        tips12.style.display="none";
    }
});


document.getElementById('inputEmail').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        var tips13 = document.getElementById('tips13');
        this.style.border="2px solid green";
        this.style.color="black";
        tips13.style.display="none";
    }
    else{
        var tips13 = document.getElementById('tips13');
        this.style.border="2px solid red";
        this.style.color="red";
        tips13.style.color="red";
        tips13.style.display="block";
    }
});

$('input[type=file]').change(function () {
    if ($('input[type=file]').val() == '') {
        $('button').attr('disabled', true);
    }
    else {
        $('button').attr('disabled', false);
    }
});

document.querySelectorAll('input[type=file]').addEventListener('change', function () {
    if (document.querySelectorAll('input[type=file]').value == '' ) {
        var bouton = document.getElementById('submitButton');
        bouton.disabled= true;
    } else {
        bouton.disabled= false;
    }
});

var lastName = document.getElementById('inputLastName');
var firstName = document.getElementById('inputFirstName');
var email = document.getElementById('inputEmail');
var cv = document.getElementById('inputCv');
var lettre = document.getElementById('inputLettre');
var form = document.getElementById('form');

function EnableDisable() {
    //Reference the Button.
    var buttonSubmit = document.getElementById("submitButton");

    //Verify the TextBox value.
    if ((lastName.value.trim() != "") && (firstName.value.trim() != "") && (email.value.trim() !="") && (cv.value() !="") && (lettre.value() !=""))  {
        //Enable the TextBox when TextBox has value.
        buttonSubmit.disabled = false;
    } else {
        //Disable the TextBox when TextBox is empty.
        buttonSubmit.disabled = true;
    }
};

var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre réservation a bien été prise en compte.');
});




