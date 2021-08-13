// VERIFICATIONS FORMULAIRE

document.getElementById('inputLastName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips30 = document.getElementById('tips20');
        this.style.border="2px solid red";
        this.style.color="red";
        tips30.style.color="red";
        tips30.style.display="block";
    }
    else{
        var tips30 = document.getElementById('tips30');
        this.style.border="2px solid green";
        this.style.color="black";
        tips30.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips31 = document.getElementById('tips31');
        this.style.border="2px solid red";
        this.style.color="red";
        tips31.style.color="red";
        tips31.style.display="block";
    }
    else{
        var tips31 = document.getElementById('tips21');
        this.style.border="2px solid green";
        this.style.color="black";
        tips31.style.display="none";
    }
});

document.getElementById('inputSubject').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips32 = document.getElementById('tips32');
        this.style.border="2px solid red";
        this.style.color="red";
        tips32.style.color="red";
        tips32.style.display="block";
    }
    else{
        var tips32 = document.getElementById('tips32');
        this.style.border="2px solid green";
        this.style.color="black";
        tips32.style.display="none";
    }
});

document.getElementById('inputMessage').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips33 = document.getElementById('tips33');
        this.style.border="2px solid red";
        this.style.color="red";
        tips33.style.color="red";
        tips33.style.display="block";
    }
    else{
        var tips33 = document.getElementById('tips33');
        this.style.border="2px solid green";
        this.style.color="black";
        tips33.style.display="none";
    }
});

var lastName = document.getElementById('inputLastName');
var firstName = document.getElementById('inputFirstName');
var titre = document.getElementById('inputSubject');
var message = document.getElementById('inputMessage');

function EnableDisable() {
    //Reference the Button.
    var buttonSubmit = document.getElementById("submitButton");

    //Verify the TextBox value.
    if ((lastName.value.trim() != "") && (firstName.value.trim() != "") && (titre.value.trim() != "") && (message.value.trim() != ""))  {
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
    alert('Votre avis a bien été prise en compte.');
});
