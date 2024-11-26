var myObj = {

command: "proxy # set",

main: "internet",

type: "data_transfer"

}

var myJSON = JSON.stringify(myObj); // converts  JSON into object for sending data to

var newObj = JSON.parse(myJSON); // converts JSON into object while receiving data

document.getElementById("psde").innerHTML = newObj.command;

async function add(a,b) {
   let response = await a + b; display(response);
}

function display(some) {

    document.getElementById("json").innerHTML = some;

}

add(65,35);

function myDisplayer(value) {

  document.getElementById("cfl").innerHTML = value; 

}

function myCalculator (num1, num2, myCallback) {

    let sum = num1 + num2;
    myCallback(sum);

}

myCalculator(5, 5, myDisplayer);
    