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
if (YearOfbirth>2021 || YearOfbirth < 0) {
    alert ('Error1')
} else if (YearOfbirth===0) {
    alert ('Good luck')
}
else {
    alert (`Your age ${age}`);
}
}

function getPerimeter () {
    let length;
    length = +prompt ('Input your length sides of the square');
    let perimeter;
    perimeter = length*4;
    alert (`Perimeter your square ${perimeter}`);
}

function getRadius () {
    let radius;
    radius = +prompt('Input radius circle');
    let result;
    result = Math.round (radius**2*Math.PI);
    alert (`Your result ${result} `);

}