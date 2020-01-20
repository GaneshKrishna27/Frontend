function show() {
    var name1 = document.getElementById("txtbox1").value;
    var name2 = document.getElementById("txtbox2").value;
    var age_box = document.getElementById("age").value;
    var address_box = document.getElementById("address").value;
    var Gender = document.getElementById("gender").value;
    confirm("u have entered:" + "\n Name:" + name1 + " " + name2 + "\n Age: " + age_box + "\naddress_box: " + address_box + "\n Gender: " + Gender)
}
function changeColor(val) {
    if ((val.value == "") || (val.value == null)) {
        val.style.background = "pink";
    }
    else {
        val.style.background = "green";
    }
}