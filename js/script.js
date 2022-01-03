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

function getNumber () {
  let num = +prompt ('Input your three-digit number');
  let c = Math.floor (num/100);
  console.log (c);
  let b = Math.floor (num/10 ) % 10;
  console.log (b);
  let a = Math.floor (num % 100) % 10;
  console.log (a);
  alert (`your number ${a}${b}${c}`);

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

// function multiplicationTable () {
//     let result = '';
//     for (let i = 2; i<=9; i++) {
//         for (let j = 1; j<=10; j++) {
//             result =  i + 'x' + j +'=' + (i*j);
//             console.log (result);
//         }
//         console.log ('');
//     }
// }

function multiplicationTable () {
    let result = '';
    for (let i = 2; i<=9; i++) {
for (let j = 1; j<=10; j++) {
    result = i + 'x'+ j + '=' + i*j;
    console.log (result);
}
console.log ('')
    }
}

function WhoAreYou () {
    let age;
    age = +prompt('How old are you?');
    if (age === 0 && age<=12 ) {
alert ('You are a child')
    } else if (age>12 && age<=18) {
        alert ('You are a teenager') 
    } else if (age>18 && age<60) {
        alert ('You are an adult') 
    } else if (age>=60) {
        alert ('You are  retired')
    } else if (age < 0) {
        alert ('Your age is wrong ')
    }
}
function userNum () {
    let num;
    num = +prompt('Input your number 1....9');
    switch (num) {
        case 1 :
            alert ('!')
            break;
            case 2: 
            alert ('@')
            break;
            case 3: 
            alert ('#')
            break;
            case 4:
                alert('$')
                break;
                case 5:
                    alert('%')
                    break;
                    case 6:
                        alert('^')
                        break;
                        case 7:
                            alert ('&')
                            break;
                            case 8:
                                alert ('(')
                                break;
                                case 9:
                                    alert (')')
                                    break;
                                    default:
                                        alert ('your number is wrong')

    }


}

function AleapYear () {
    let year = +prompt ('Input your year');
 if ( year % 400 ===0) {
     alert ('a leap year')
 } else if  (year % 4 === 0 && year % 100 >0) {
     alert ( 'this is a leap year') 
 } else {
     alert ('this is not a leap year')
 }
}
function palindrome () {
    let num,a,b,c,d,e;
    num = +prompt('Input your number');
     e = num % 10 ; 
    console.log (e);
    d = Math.floor (num/10) % 10;
    console.log (d);
    c = Math.floor (num/100)%10;
    console.log (c);
    b = Math.floor (num/1000)%10;
    console.log (b);
    a = Math.floor (num/10000);
    console.log (a);
    if (a===e && b===d ) {
        alert ('This number is palindromе')
    } else  {
    alert ('This number is not a palindromе')
    }
}
function currencyСonverter () {
    let d;
    d = +prompt ('Enter the amount in dollars');
    let result =+prompt ('In which currency you want to convert dollars? 1- EUR,2-UAN, 3-AZN');
let amount;
if (result === 1) {
    amount = d * 0.88;
alert (amount);
} else if (result===2) {
    amount = d * 27.27;
    alert (amount);
} else if (result===3) {
    amount = d * 0.59;
    alert (amount);
} else {
    alert ('you entered an incorrect code')
}

}
 function buyAmount () {
     let buy = +prompt ('Input your bye');
     if (buy<200) {
         alert (buy);
     } else if ( buy>=200 && bye<300) {
         alert (buy-(buy*0.03));
     } else if ( buy>=300 && buy<=500) {
         alert (buy-(buy*0.05));
     } else if (buy>500){
        alert (buy-(buy*0.07));
     }
 }
 function question () {
     alert ('complete the sentence with the correct verb forms');
     let a,b,c;
     let result = 0;
     a = +prompt ('.... i on time? 1 - am; 2 - is; 3 - are');
     b = +prompt ('...he on time?  1 - am,  2 - is;  3 - are');
     c = +prompt ('....they late?  1 - am;  2 - is;  3 - are');
if (a===1) {
    result +=2;
} 
if (b===2) {
    result +=2;
} 
if (c===3) {
    result +=2;
} 
alert (`Your result ${result}`)
 }

 function data () {

      let day = +prompt('Input your day');
     let month = +prompt('Input your month');
    let year = +prompt('Input your year');
     if (( year % 400 ===0 || year % 4 === 0 && year % 100 >0) && day===28 && month === 2) {
         day +=1;
         month +=0;
alert (`Your result N1 ${day}.${month}.${year}`)
     } 
     else if ((year % 400 ===0 || year % 4 === 0 && year % 100 >0) && day===29 && month === 2) {
         day -=28;
         month +=1;
         alert (`Your result N2 ${day}.${month}.${year}`)
     } 
     else if ((year % 400 > 0 || year % 4 > 0 && year % 100 ===0) && day===28 && month ===2 ) {
day -=27;
month +=1;
alert (`Your result ${day}.${month}.${year}`)
     } 
     else if (month=== 1 && day === 31 || month=== 3 && day === 31 || month === 5 && day === 31 || month === 7 && day === 31 || month === 8 && day === 31  || month === 10 && day === 31) {
day -=30;
month +=1;
alert (`Your result N3 ${day}.${month}.${year}`) 
}
     



 }
