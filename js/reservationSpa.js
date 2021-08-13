// DATEPICKER
$('#datepicker3').datepicker({
    uiLibrary: 'bootstrap4'
});

// VERIFICATIONS FORMULAIRE

document.getElementById('inputLastName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips20 = document.getElementById('tips20');
        this.style.border="2px solid red";
        this.style.color="red";
        tips20.style.color="red";
        tips20.style.display="block";
    }
    else{
        var tips20 = document.getElementById('tips20');
        this.style.border="2px solid green";
        this.style.color="black";
        tips20.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips21 = document.getElementById('tips21');
        this.style.border="2px solid red";
        this.style.color="red";
        tips21.style.color="red";
        tips21.style.display="block";
    }
    else{
        var tips21 = document.getElementById('tips21');
        this.style.border="2px solid green";
        this.style.color="black";
        tips21.style.display="none";
    }
});

document.getElementById('inputPhone').addEventListener("keyup", function() {
    var val = "";
    val = this.value;
    var phone = /^\d{10}$/;

    if(!this.value.match(phone)){
        var tips23 = document.getElementById('tips23');
        this.style.border="2px solid red";
        this.style.color="red";
        tips23.style.color="red";
        tips23.style.display="block";
    }
    else{
        var tips23 = document.getElementById('tips23');
        this.style.border="2px solid green";
        this.style.color="black";
        tips23.style.display="none";
    }
});

document.getElementById('inputEmail').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        var tips22 = document.getElementById('tips22');
        this.style.border="2px solid green";
        this.style.color="black";
        tips22.style.color="red";
        tips22.style.display="none";
    }
    else{
        var tips22 = document.getElementById('tips22');
        this.style.border="2px solid red";
        this.style.color="red";
        tips22.style.color="red";
        tips22.style.display="block";
    }
});

document.getElementById('datepicker3').addEventListener("change", function() {
    var val = "";
    val = this.value;

    if(val.length == null || val.length == undefined || val.length <= 8){
        var tips24 = document.getElementById('tips24');
        this.style.border="2px solid red";
        tips24.style.color="red";
        tips24.style.display="block";
    } else {
        var tips24 = document.getElementById('tips24');
        this.style.border="2px solid green";
        tips24.style.display="none";
    }
});

var lastName = document.getElementById('inputLastName');
var firstName = document.getElementById('inputFirstName');
var email = document.getElementById('inputEmail');
var phone = document.getElementById('inputPhone');
var datepicker3 = document.getElementById('datepicker3');
// var form = document.getElementById('form');

function EnableDisable() {
    //Reference the Button.
    var buttonSubmit = document.getElementById("submitButton");

    //Verify the TextBox value.
    if ((lastName.value.trim() != "") && (firstName.value.trim() != "") && (email.value.trim() !="") && (phone.value.trim() !="") && (datepicker3.value.trim() !=""))  {
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