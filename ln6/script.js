function validateForm(){

var x = document.forms["myForm"]["fname"].value;

if (x == "") {

    alert("Name must be filled out");
    return false;


}

}

function myFunction() {


var inpObj = document.getElementById("id1");

if (!inpObj.checkValidity()){

document.getElementById("result").innerHTML = inpObk.validationMessage;

} else {

 document.getElementById("result")  .innerHTML = "Input OK";

}

}
