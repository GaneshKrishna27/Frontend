function getAlert() {
    var m1 = isNaN("2");
    var m2 = isNaN("Raman");
    var m3 = isNaN("4333");
    var d = eval("45*6");
    document.getElementById("ref").innerHTML += m1 + "<br>";
    document.getElementById("ref").innerHTML += m2 + "<br>";
    document.getElementById("ref").innerHTML += m3 + "<br>";
    document.getElementById("ref").innerHTML += d + "<br>";
    var m4 = parseInt("10", 2);
    var m5 = parseInt("11", 8);
    var m6 = parseInt("15", 10);
    var m7 = parseFloat("123ssgffhg")
    var m8 = parseFloat("123.22");
    document.getElementById("ref").innerHTML += m4 + "<br>";
    document.getElementById("ref").innerHTML += m5 + "<br>";
    document.getElementById("ref").innerHTML += m6 + "<br>";
    document.getElementById("ref").innerHTML += m7 + "<br>";
    document.getElementById("ref").innerHTML += m8 + "<br>";
} getAlert();

