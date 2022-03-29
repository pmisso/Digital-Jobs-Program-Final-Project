function printMsg(){

    let inputVal = document.getElementById("nameTxt");
    let nameVal = inputVal.value;
    document.getElementById("welcomeMsg").innerText = "Hello " + nameVal;
}