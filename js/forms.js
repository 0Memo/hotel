// VERIFICATIONS FORMULAIRE
var tips1 = document.getElementById('tips1');
var tips2 = document.getElementById('tips2');
var tips3 = document.getElementById('tips3');
var tips4 = document.getElementById('tips4');
var tips5 = document.getElementById('tips5');
var tips6 = document.getElementById('tips6');
var tips7 = document.getElementById('tips7');
var tips8 = document.getElementById('tips8');
var tips9 = document.getElementById('tips9');

var val = "";

document.getElementById('inputLastName').addEventListener("keyup", function() {
    val = this.value;

    if(val.length == undefined || val.length < 2){
        this.style.border="2px solid red";
        tips1.style.display="block";
    }
    else{
        this.style.border="2px solid green";
        tips1.style.display="none";
    }
});

document.getElementById('inputFirstName').addEventListener("keyup", function() {
    val = this.value;

    if(val.length == undefined || val.length < 2){
        this.style.border="2px solid red";
        tips2.style.display="block";
    }
    else{
        this.style.border="2px solid green";
        tips2.style.display="none";
    }
});

document.getElementById('inputPhone').addEventListener("keyup", function() {
    val = this.value;
    var phone = /^\d{10}$/;

    if(!this.value.match(phone)){
        this.style.border="2px solid red";
        tips3.style.display="block";
    }
    else{
        this.style.border="2px solid green";
        tips3.style.display="none";
    }
});

document.getElementById('inputEmail').addEventListener("keyup", function() {
    val = this.value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        this.style.border="2px solid green";
        tips4.style.display="none";
    }
    else{
        this.style.border="2px solid red";
        tips4.style.display="block";
    }
});

document.getElementById('datepicker1').addEventListener("click", function() {
    val = this.value;

    if(val.length == null || val.length == undefined || val.length <= 8){
        this.style.border="2px solid red";
        tips5.style.display="block";
    } else {
        this.style.border="2px solid green";
        tips5.style.display="none";
    }
});

document.getElementById('datepicker2').addEventListener("click", function() {
    val = this.value;

    if(val.length == null || val.length == undefined || val.length <= 8){
        this.style.border="2px solid red";
        tips6.style.display="block";
    } else{
        this.style.border="2px solid green";
        tips6.style.display="none";
    }
});

document.getElementById('gridCheck').addEventListener("focus", function() {
    event.preventDefault();

    if(!this.checked) {
        tips7.style.display="none";
        document.getElementById('submitButton').disabled = false;
        
    } else {
        tips7.style.display="block";
        document.getElementById('submitButton').disabled = true;
    }
})













// MULTISELECT
let multipleSelect2 = new MultipleSelect('#inputOptions', {
    placeholder: 'Vos options'
});

// DATEPICKER
$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
});

$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});


