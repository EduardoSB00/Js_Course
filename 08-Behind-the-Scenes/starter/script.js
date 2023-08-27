'use strict';
/*

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1991 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, you are a millenial, ${firstName}`
            console.log(str);

            /*function add(a,b) {
                return a + b;
            }*//*
        }

        console.log(millenial);
    }

    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);

*/
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;*/

/*
console.log(addDecl(1,2));
console.log(addExpr(1,2));
console.log(addArrow(1,2));

function addDecl(a,b) {
    return a+b;
}

const addExpr = function(a,b) {
    return a+b;
}

const addArrow = (a,b) => {
    return a+b
}*/
/*
if(!numProducts) deleteShoppingCar();

var numProducts = 10;

function deleteShoppingCar() {
    console.log('All products deleted');
}
*/
/*
console.log(this);

const calcAge = function(birthYear) {
    console.log(2037  - birthYear);
    console.log(this);
}

calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037  - birthYear);
    console.log(this);
}

calcAgeArrow(1991);

const jonas = {
    birthYear: 1991,
    calcAge: function() {
        console.log(this)
        console.log(2037 - this.birthYear)
    }
}

jonas.calcAge();

const Matilda = {
    birthYear: 2017,
}

Matilda.calcAge = jonas.calcAge;

Matilda.calcAge()

const f = jonas.calcAge;

f();*/
/*
const jonas = {
    year: 1991,
    firstName: 'jonas',
    
    calcAge: function() {
        console.log(this)
        console.log(2037 - this.year)
        const self = this;
        const isMillenial = function(){
            console.log(self.year >= 1981 && self.year <= 1996)
            
        }
        isMillenial();
    },
    calcAge2: function() {
        console.log(this)
        console.log(2037 - this.year)
        const isMillenial2 = () => {
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial2(); 
    },
    greeet: () => console.log(`Hey ${this.firstName}`)
}

jonas.greeet();
jonas.calcAge();
jonas.calcAge2();

const addExpr = function(a,b) {
    console.log(arguments);
    return a + b;
};

addExpr(2,5);
addExpr(2,5,8,12);

var addArrow = (a,b) => {
    console.log(arguments);
    return a+b;
}

addArrow(2,5,8,12);*/
/*

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30
};

const friend = me;

friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

let lastName = 'Williams'
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'



jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);