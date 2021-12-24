'use strict'
function getUserName () {
    let name;
    name = prompt('Input your name');
    alert (`Hello ${name}`);
}

function getYearOfBirth () {
    let YearOfbirth;
    let age;
    YearOfbirth = +prompt ('Input  the year of birth');
    const year = 2021; 
age = year - YearOfbirth;
alert (`Your age ${age}`);
}