'use strict';
/*
const flight = 'LH234';
const jonas = {
    name: 'Jonas Shmetdman' ,
    passport: '23345245'
}

const checkIn = function(flightNum, passanger) {
    flightNum = 'LH999';
    passanger.name = 'Mr. ' + passanger.name;

    if (passanger.passport === '23345245') {
        alert('check in');
    } else {
        alert ('Wrong Passport')
    }
}

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person) {
    person.passport= Math.trunc(Math.random() * 10000000000000);
}

newPassport(jonas);
checkIn(flight,jonas)
*//*

const oneWord = function(str) {
    return str.replaceAll(" ","").toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transofrmer = function(str, fn) {
    console.log(`Original String ${str}`)
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`)
}

transofrmer('Javascript is the best!', upperFirstWord);
transofrmer('Javascript is the best!', oneWord);

const high5 = function() {
    console.log("5")
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);*/
/*
const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greeterHey2 = greet2("hello")

greeterHey2('Jonas2');
greeterHey2('Steven2');*/
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book: function(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name
        })
    }
}

lufthansa.book(239, 'Jonas Shmedtman');
lufthansa.book(635, 'John Smith')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book; 

book.call(eurowings,23,'Sarah Williams')
book.call(lufthansa,239,'Mary Cooper')

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss,239,'Mary Cooper')

const flightData = [583, 'George Cooper'];

book.apply(swiss,flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');

console.log('----------------DIVIDIER---------')

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this)
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const ChallengeVAT = function (rate) {
    return function (value) {
        return addTax (rate, value)
    }
   
}

const newVat = ChallengeVAT(0.23);


console.log('this is new vat',newVat(100))*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
    question: 'WHat is your favourite programming language?',
    option: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer: function() {
        const promptStr = 'What is your favourite programming language?\n' +this.option.join('\n') + '\n(Write option number)';

        const usrInput = prompt(promptStr)
        const usrInputNum = Number(usrInput);
                
        if (usrInputNum >= 0 && usrInputNum < this.answers.length) {
            this.answers[usrInputNum]++;
        } else {
            alert('Something failed')
        }

        this.displayResults();
        this.displayResults('string');

    },

    displayResults: function (type) {
        if (type === 'string') {
            console.log(this.answers.join(', '))
        } else {
            console.log(this.answers)
        }
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
const bonus1 = {answers: [5, 2, 3]};
const bonus2 = {answers: [1, 5, 3, 9, 6, 1]};

poll.displayResults.call(bonus1);
poll.displayResults.call(bonus2);
*/
/*
const runOnce = function () {
    console.log('This will never run again');
}

runOnce();

(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again'))();

*//*

const secureBooking = function() {
    let passangerCount = 0;

    return function (){
        passangerCount++;
        console.log(`${passangerCount} passangers`);
    }
}

const booker = secureBooking();

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b =  777;
    f = function () {
        console.log(b *2);
    }
}

g();
f();
h();
f();

const boardPassangers = function(n, wait) {
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passangers`);
        console.log(`There are 3 groups each with ${perGroup} passangers`)
    },wait*1000)
    console.log(`Will start boarding in ${wait} seconds`)
}

boardPassangers(180, 3);

*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', function() {
        header.style.color = 'blue'
    })
})();