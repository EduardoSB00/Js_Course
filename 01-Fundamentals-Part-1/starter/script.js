/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';

console.log(firstName);

//Variables */

//Data Types -----------------------

/*console.log(true);
let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 22);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES';
console.log(typeof javaScriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);*/


// Let const and var ------------------
/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';
*/
// Operators ---------------------
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3 );

const firstName = "Jonas";
const lastName = "Schneider";

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log( ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
let x, y;

x = y = 25-10-5;

console.log(x,y)*/

//Type conversion and cohersion ----------------------

/*const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

console.log("I am " +23 + " years old");

console.log("23" - "10" - 3);

console.log("23" * 10);*/

//Truthy and falsy values -----------------------------
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if(money) {
    console.log("Dont spend it all")
} else {
    console.log("You should get a job")
}

let height;

if(height) {
    console.log("height is defined");
} else {
    console.log("type is undefined");
}
*/

//Equality operators --------------------------------
/*
const age = 18;

if(age === 18) console.log("You just became an adult (strict)");
if(age == 18) console.log("You just became an adult (Loose)");

const favourite = Number(prompt("Whats your favourite number?")) ;
console.log(favourite);

if (favourite === 23) {
    console.log("cool! 23 is an amazing number");
} else if (favourite === 7) {
    console.log("Seven is also a cool number")
} else {
    console.log("Number isnt 23 or 7");
}

if (favourite !== 23) {
    console.log("why not 23?")
} */

// Logical Operators ----------------------------------
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log("Sarah is able to drive")
} else {
    console.log("someone else should drive")
}


const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);


if(shouldDrive && !isTired) {
    console.log("Sarah is able to drive")
} else {
    console.log("someone else should drive")
}

*/

// Switch statement ------------------------
/*
const day = "saturday";

switch(day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code");
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log("rest");
        break;
    default:
        console.log("Not a valid day");
        break;
}

*/

//Ternary Operator ----------------------
/*
const age = 19;

age >=18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`); */

//