function addFunction(num1, num2){

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1+num2;
    document.getElementById("ans").innerHTML = "The sum between " + num1 + " and " + num2 + " is " + sum;

}

function subFunction(num1, num2){

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var diff = num1-num2;
    document.getElementById("ans").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + diff;

}

function multFunction(num1, num2){

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var prod = num1*num2;
    document.getElementById("ans").innerHTML = "The product of " + num1 + " and " + num2 + " is " + prod;

}

function divdFunction(num1, num2){

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var div = num1/num2;
    document.getElementById("ans").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + div;

}

function modFunction(num1, num2){

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var rem = num1%num2;
    document.getElementById("ans").innerHTML = "The modulus of " + num1 + " and " + num2 + " is " + rem;

}

