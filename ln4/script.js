var x = 450;;
var y = 1750;

document.getElementById("a").innerHTML = x+y;
document.getElementById("b").innerHTML = String(x) + String(y);

try {
 
 addalert("JavaScript Error Code: 29836i6");


}

catch(err) {


    document.getElementById("c").innerHTML = err.message;


}

add = (a,b) => a+b;

document.getElementById("d").innerHTML = add (4,6);