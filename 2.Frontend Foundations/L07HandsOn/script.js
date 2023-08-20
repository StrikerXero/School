//First letter of first name must be capitalized ^[A-Z]
//First letter of last name must ne capitalized ^[A-Z]
//User cannot enter <= 1 character for first and last name
//Don't allow special characters [a-zA-Z]

//if the above = true alert("Yay!, Your inputs were all correct!.")
//if any requirements above != true alert("Oh no, Thats an invalid format!")
const valRegex = /^[A-Z]+[a-zA-Z]+$/;

const regexChecker = () => {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById('lastName').value;

    if (firstName.match(valRegex) && lastName.match(valRegex)) {
        alert("Yay, Your inputs were all correct!")
    }
    else {
        alert("Oh no, Thats an invalid format!")
    }
}









////////////////////////////////////////////
/*    Works but can be improved
let firstName = '';
let lastName = '';

firstName = document.getElementById('firstName').value;
console.log(firstName);
lastName = document.getElementById('lastName').value;
console.log(lastName);


const nameRegex = /^[A-Z]+[a-zA-Z]+$/;

function regexChecker() {
    if (firstName.match(nameRegex) && lastName.match(nameRegex)){
        alert("Yay, Your inputs were all correct!");
        console.log(true);
    }
    else {
        alert("Oh no, Thats an invalid format!");
        console.log(false);
    }
}
*/
/////////////////////////////////////////////////










/***Failures***/
/*

////////////////////////////////////////
// && lastName.match(nameRegex

let fullName = firstName + " " + lastName;
console.log(fullName);

const fullNameRegex = /(^[A-Z][a-zA-Z]+)\s([A-Z][a-zA-Z]+)&/;

function regexChecker2() {

}
//////////////////////////////////////


///////////////////////////////////////////////////////
/*
const alphabetRegex = /^[A-Z]+[a-zA-Z]$/
const numbersRegex = /\d* /g



const valFirstname = () => {
    let firstName = document.getElementById('firstName').value;

    
}
////////////////////////////////////////////////////////////
*/
