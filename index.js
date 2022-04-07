const input1 = document.getElementById('button1');
input1.addEventListener('click', function() {
    let link = document.getElementById('styleSheet');
    link.setAttribute('href', './css/style.css');
});
const input2 = document.getElementById('button2');
input2.addEventListener('click', function() {
    let link = document.getElementById('styleSheet');
    link.setAttribute('href', './css/style2.css');
});
const input3 = document.getElementById('button3');
input3.addEventListener('click', function() {
    let link = document.getElementById('styleSheet');
    link.setAttribute('href', './css/style3.css');
});


document.getElementById("fNameForm").onkeyup = function() {
    let stringValue = document.getElementById("fNameForm").value;
    document.getElementById("firstNameP").innerText = stringValue;
}

document.getElementById("lNameForm").onkeyup = function() {
    let stringValue = document.getElementById("lNameForm").value;
    document.getElementById("secondNameP").innerText = stringValue;
}

document.getElementById("dateForm").onkeyup = function() {
    let stringValue = document.getElementById("dateForm").value;
    document.getElementById("dateP").innerText = stringValue;
}

document.getElementById("locationForm").onkeyup = function() {
    let stringValue = document.getElementById("locationForm").value;
    document.getElementById("locationP").innerText = stringValue;
}