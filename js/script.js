"use strict";
const inputRef = document.getElementById("input");
function getInput() {
    const returnRef = document.getElementById("content--checker_container--return");
    let splitString = inputRef.value.replace(/\W|_|\s/g, "").toLowerCase();
    if (splitString === splitString.split("").reverse().join("") && splitString != "") {
        returnRef.innerHTML = "Palindrome";
    }
    else if (splitString != "") {
        returnRef.innerHTML = "Kein Palindrome";
    }
    else {
        returnRef.innerHTML = "";
    }
}
inputRef.addEventListener("input", function () {
    getInput();
});
