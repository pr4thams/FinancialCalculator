function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var curryear = new Date().getFullYear();
    if (p<=0){
        alert("Enter a positive number");
    } else if (p == ""){
        alert("Enter a positive number");
    } else {
        var targetDiv = document.getElementById("summary");
        targetDiv.style.display = "block";
        var interest = (p*r*t)/100;
        document.getElementById("interest").innerHTML = interest;
        var year = Number(curryear) + Number(t);
        document.getElementById("year").innerHTML = year;
        document.getElementById("prin").innerHTML = p;
        document.getElementById("rat").innerHTML = r;
    }
}

function hideDiv()
{
var targetDiv = document.getElementById("summary");
targetDiv.style.display = "None";
}

function showVal()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; 
    slider.oninput = function() {
    output.innerHTML = this.value;
    }
}