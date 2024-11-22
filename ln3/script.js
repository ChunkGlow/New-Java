var points = [53 , 435, 553, 1047, 5435, 78454];

document.getElementById("result").innerHTML = points;

function ascending() {
 points.sort(function(a,b){return a-b})
 document.getElementById("result").innerHTML = points;
}

function descending() {
    points.sort(function (a, b) { return b - a })
    document.getElementById("result").innerHTML = points;
}

var numbers = [1, 2, 3, 4, 5]

function myFunction(num) {
    return num * 10;
}

var newarray = numbers.map(myFunction);

document.getElementById("product_value").innerHTML = newarray;





var numbers = [2,4,5,6]

function myfucntion(num){

return num * 10

}

var s = numbers.map(myfucntion)

document.getElementById("a").innerHTML = s

