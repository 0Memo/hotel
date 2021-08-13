// VERIFICATIONS FORMULAIRE

document.getElementById('inputLastName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips1 = document.getElementById('tips1');
        this.style.border="2px solid red";
        this.style.color="red";
        tips1.style.color="red";
        tips1.style.display="block";
    }
    else{
        var tips1 = document.getElementById('tips1');
        this.style.border="2px solid green";
        this.style.color="black";
        tips1.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(val.length == undefined || val.length < 2){
        var tips2 = document.getElementById('tips2');
        this.style.border="2px solid red";
        this.style.color="red";
        tips2.style.color="red";
        tips2.style.display="block";
    }
    else{
        var tips2 = document.getElementById('tips2');
        this.style.border="2px solid green";
        this.style.color="black";
        tips2.style.display="none";
    }
});

document.getElementById('inputPhone').addEventListener("keyup", function() {
    var val = "";
    val = this.value;
    var phone = /^\d{10}$/;

    if(!this.value.match(phone)){
        var tips3 = document.getElementById('tips3');
        this.style.border="2px solid red";
        this.style.color="red";
        tips3.style.color="red";
        tips3.style.display="block";
    }
    else{
        var tips3 = document.getElementById('tips3');
        this.style.border="2px solid green";
        this.style.color="black";
        tips3.style.display="none";
    }
});

document.getElementById('inputEmail').addEventListener("keyup", function() {
    var val = "";
    val = this.value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        var tips4 = document.getElementById('tips4');
        this.style.border="2px solid green";
        this.style.color="black";
        tips4.style.color="red";
        tips4.style.display="none";
    }
    else{
        var tips4 = document.getElementById('tips4');
        this.style.border="2px solid red";
        this.style.color="red";
        tips4.style.color="red";
        tips4.style.display="block";
    }
});

document.getElementById('datepicker1').addEventListener("click", function() {
    var val = "";
    val = this.value;

    if(val.length == null || val.length == undefined || val.length <= 8){
        var tips5 = document.getElementById('tips5');
        this.style.border="2px solid red";
        tips5.style.color="red";
        tips5.style.display="block";
    } else {
        var tips5 = document.getElementById('tips5');
        this.style.border="2px solid green";
        tips5.style.display="none";
    }
});

document.getElementById('datepicker2').addEventListener("click", function() {
    var val = "";
    val = this.value;

    if(val.length == null || val.length == undefined || val.length <= 8){
        var tips6 = document.getElementById('tips6');
        this.style.border="2px solid red";
        tips6.style.color="red";
        tips6.style.display="block";
    } else{
        var tips6 = document.getElementById('tips6');
        this.style.border="2px solid green";
        tips6.style.display="none";
    }
});

document.getElementById('gridCheck').addEventListener("focus", function() {

    if(!this.checked) {
        this.style.border="2px solid green";
        var tips7 = document.getElementById('tips7');
        tips7.style.display="none";
        document.getElementById('submitButton').disabled = false;
        
    } else {
        this.style.border="2px solid red";
        var tips7 = document.getElementById('tips7');
        tips7.style.display="block";
        tips7.style.color="red";
        document.getElementById('submitButton').disabled = true;
    }
})

// MULTISELECT
let multipleSelect2 = new MultipleSelect('#multi-select', {
    placeholder: 'Vos options'
});

// DATEPICKER
$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});

var lastName = document.getElementById('inputLastName');
var firstName = document.getElementById('inputFirstName');
var email = document.getElementById('inputEmail');
var phone = document.getElementById('inputPhone');
var datepicker1 = document.getElementById('datepicker1');
var datepicker2 = document.getElementById('datepicker2');
var gridCheck = document.getElementById('gridcheck');
var form = document.getElementById('form');

function EnableDisable() {
    //Reference the Button.
    var buttonSubmit = document.getElementById("submitButton");

    //Verify the TextBox value.
    if ((lastName.value.trim() != "") && (firstName.value.trim() != "") && (email.value.trim() !="") && (phone.value.trim() !="") && (datepicker1.trim() !="") && (datepicker2.trim() !="") && (gridCheck.value.trim() !=""))  {
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
