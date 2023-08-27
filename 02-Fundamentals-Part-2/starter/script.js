'use strict';
/* strict mode --------------------------------------
 let hasDriversLicesne = false;
 const passTest = true;

 if (passTest) hasDriversLicesne = true;
 
 if(hasDriversLicesne) console.log("I can drive");

 //const interface = "Audio";*/

/* Functions -----------------------------------------
 function logger() {
    console.log(`My name is Jonas`);
 }

 logger();
 logger();
 logger();

 function fruitProcessor(apples,oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
 }

 const appleJuice = fruitProcessor(5,0);
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice); */

 // Functions , declaratinos and expressinos -------------------
/*
 function callAge1(birthYear) {
    return 2037 - birthYear;
 }

 const Age1 = callAge1(1991);
 console.log(Age1);

 const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
 }

 const Age2 = calcAge2(1991);
 console.log(Age2); */

 //Arrow function -------------------------------
/*
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    return `${firstName} reitres in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'Jonas')); */
//*function within functions ----------------------
/*
function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
 }

 console.log(fruitProcessor(2,3));

 */

 //Arrays ---------------------------------------
/*
 const friends = ['Michael' , 'Steven', 'Peter'];
 console.log(friends);

 const years = new Array(1991, 1984, 2008, 2020);

 console.log(friends[0]);
 console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends[2]);

const jonas = ['Jonas', 'Schemdtamnn', 2034-1991, 'teaacher', friends];

*/

//Basic Array Operations --------------------------
/*const friends = ['Michael' , 'Steven', 'Peter'];

friends.push("Jay");
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Bob'))
console.log(friends.includes('Steven'))
*/

//Introduction to Objects -----------------------------
/*
const jonas = {
   firstName : 'Jonas',
   lastName : 'Tihnari',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Michael' , 'Steven', 'Peter'];
   hasDriversLicense: true;
}

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

const intrest = prompt('What do you want to know about jonas, choose between firstName, lastName, age, job and friends');

if (jonas[intrest]) {
   console.log(jonas[intrest]);
} else {
   console.log('Wrong Request');
}

jonas.location = "Portugal";
jonas["twitter"] = '@jonas';

console.log(jonas);
*/

//Object Methods -------------------------------------
/*
const jonas = {
   firstName : 'Jonas',
   lastName : 'Tihnari',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Michael' , 'Steven', 'Peter'],
   hasDriversLicense: false,

   /*calcAge : function (birthYear) {
      return 2037 - birthYear
   }*/

   /*calcAge : function () {
      return 2037 - this.birthYear
   }*/
/*
   calcAge : function () {
      this.age = 2037 - this.birthYear;
      return this.age;
   },

   summary : function ( ) {
      return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense?'a':'no'} driver's license`
   }
}

console.log(jonas.calcAge());

console.log(jonas.summary());
 */

//for loop --------------------------------------------
/*
for(let rep = 1; rep <=10; rep++) {
   console.log(`This is rep #${rep}`);
} */

//Looping Arrays, Breaking and Continuing------------
/*
const jonas = {
   firstName : 'Jonas',
   lastName : 'Tihnari',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Michael' , 'Steven', 'Peter'],
   hasDriversLicense: true
}

const types = [];

for(let i = 0; i < jonas.friends.length; i++) {
   console.log(jonas.friends[i]);
   types.push(typeof jonas.friends[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i++) {
   ages.push(2037 - years[i]);
}

console.log(ages);

const example = ['Hello', 1, 3, 'World', true, false, "Test"];

for (let i = 0; i < example.length; i++) {

   if(typeof example[i] !== 'string') continue;

   console.log(example[i]);
}

for (let i = 0; i < example.length; i++) {

   if(typeof example[i] === 'boolean') break;
   
   console.log(example[i]);
} */

//Looping Back -------------------------------------
/*
const example = ['Hello', 1, 3, 'World', true, false, "Test"];

for (let i = example.length - 1; i >= 0; i--) {
   console.log(example[i]);
}

for (let excersise = 1; excersise <= 3; excersise++) {
   console.log(`excersise ${excersise}`);

   for(let rep = 1; rep <= 5; rep ++) {
      console.log(`rep ${rep}`)
   }
}
*/

//while loop --------------------------------------

let rep = 1;

while (rep <= 10) {
   console.log(rep);
   rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
   console.log(`You rolled a ${dice}`)
   dice = Math.trunc(Math.random() * 6) + 1;

}