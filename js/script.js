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

function getSpeed () {
    let distanse;
    let time;
    distanse = +prompt ('Input your distanse');
    time = +prompt ('Input your time');
    let speed;
    speed = distanse/time;
if (distanse<0 || time <0) {
    alert ('Error')
} else if (distanse===0 || time===0) {
    alert ('Good luck!')
}else {
    alert (`Your speed ${speed}`);
}
}

function getCurrencyConverter() {
    let currency;
    const exchangeRate = 0.88 ;
    currency  = +prompt ('Input the amount in dollars');
    let euro = currency * exchangeRate;
    if (currency < 0) {
        alert ('Error');
    } else if ( currency===0) {
        alert ('Good luck')
    } else {
        alert (`Your amount ${euro} Euro`);
    }
}

function getNumberOfFiles () {
    let volume;
    volume = +prompt ('Input the volume of the flash drive');
    const size = 0.820 ;
    let num = Math.floor ( volume / size ); 
    if (volume < 0 ) {
        alert ('Error')
    } else if (volume===0) {
        alert ('Good luck');
    } else {
        alert (`Your number of files ${num} `);
    }
}

function getNumChocolate () {
    let amount = +prompt ('Input the amount of money in your wallet');
    let price = +prompt ('Input price chocolate');
    let num = Math.floor (amount/price);
    let costs = num * price;
    let balance = amount-costs;
    if ( amount<0||amount ===0) {
        alert ('You have no money')
    } else if (price === 0 || price < 0) {
        alert ('no price');
    } else {
        alert (`You can buy ${num} chocolate, your balance ${balance}`)
    }

}

function getAmountInterest () {
    let amount;
    amount = +prompt ('Input your amount');
    const interest = 0.00833
    let result = amount*interest;
if (amount<=0 ) {
    alert ('Good luck')
} else {
    alert (`Your amount interest ${result}`)
}
}
