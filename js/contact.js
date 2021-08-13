// VERIFICATIONS FORMULAIRE
var tips8 = document.getElementById('tips8');
var tips9 = document.getElementById('tips9');
var tips10 = document.getElementById('tips10');

document.getElementById('inputLastName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips8 = document.getElementById('tips8');
        this.style.border="2px solid red";
        this.style.color="red";
        tips8.style.color="red";
        tips8.style.display="block";
    }
    else{
        var tips8 = document.getElementById('tips8');
        this.style.border="2px solid green";
        this.style.color="black";
        tips8.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips9 = document.getElementById('tips9');
        this.style.border="2px solid red";
        this.style.color="red";
        tips9.style.color="red";
        tips9.style.display="block";
    }
    else{
        var tips9 = document.getElementById('tips9');
        this.style.border="2px solid green";
        this.style.color="black";
        tips9.style.display="none";
    }
});

document.getElementById('inputEmail').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        var tips10 = document.getElementById('tips10');
        this.style.border="2px solid green";
        this.style.color="black";
        tips10.style.display="none";
    }
    else{
        var tips10 = document.getElementById('tips10');
        this.style.border="2px solid red";
        this.style.color="red";
        tips10.style.color="red";
        tips10.style.display="block";
    }
});

var lastName = document.getElementById('inputLastName');
var valLastName = lastName.value;
var firstName = document.getElementById('inputFirstName');
var valFirstName = firstName.value;
var email = document.getElementById('inputEmail');
var valEmail = email.value;
var bouton = document.getElementById('submitButton');
var form = document.getElementById('form');


function EnableDisable() {
    //Reference the Button.
    var buttonSubmit = document.getElementById("submitButton");

    //Verify the TextBox value.
    if ((lastName.value.trim() != "") && (firstName.value.trim() != "") && (email.value.trim() !=""))  {
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
    alert('Votre demande a bien été prise en compte.');
});






