'use strict';
/*
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    /*
    this.calcAge = function(){
        console.log(2037 - this.birthYear)
    }*//*
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

jonas.calcAge();
matilda.calcAge();

Person.prototype.species = 'homosapiens';

console.log(jonas.species)
console.log(matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

*/


/*

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    } 

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    static hey(){
        console.log('Hello')
    }
}

const Jessica = new PersonCl('Jessica Davis', 1996)
Jessica.calcAge();

PersonCl.prototype.greet = function() {
    console.log(`Hello my name is ${this.fullName}`)
}

Jessica.greet();
console.log(Jessica)*/

/*const PersonCl = class {}*//*

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    
    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements)

console.log(Jessica.age)

PersonCl.hey();

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2022;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);*/
/*
class FasterCar {
    constructor (speed){
        this.speed = speed
    }

    get speedUS(){
        return this.speed/1.6;
    }

    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

const Ford = new FasterCar(120);

console.log(Ford);
console.log(Ford.speedUS);
Ford.speedUS = 14;
console.log(Ford.speed);

*//*

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
};

const Student = function(firstName, birthYear, course) {
    Person.call(this,firstName,birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
    console.log(`Hello my name is ${this.firstName}`)
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike)
mike.introduce();
mike.calcAge()

*//*
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed+=10;
    console.log(this.speed);
}

Car.prototype.break = function(){
    if(this.speed >= 5) this.speed-=5;
    console.log(this.speed);
}

const EV = function(make, speed, charge){
    Car.call(this,make,speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed+=20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`)
}

const tesla = new EV('tesla', 120, 23)

*/
/*
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    } 

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    static hey(){
        console.log('Hello')
    }
}

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }

    introduce = function(){
        console.log(`Hello my name is ${this.fullName}`)
    }

    calcAge() {
        console.log(`Hello i am ${2037 - this.birthYear}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName,birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const Steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log('hi')
}
const jay = Object.create(StudentProto);
jay.introduce();
*/
/*
class Account{
    locale = navigator.language;
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account ${this.owner}!`)
    }

    getMovements(){
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;

    }

    withdraw(val) {
        this.deposit(-val);
        return this;

    }

    #approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log('Loan Approved')
        }
        return this;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(5000);

console.log(acc1)
console.log(acc1.getMovements())
//console.log(acc1.#movements)

acc1.deposit(10).deposit(3).withdraw(49).requestLoan(100);
console.log(acc1.getMovements())
*/

class CarCl {
    constructor(make,speed) {
        this.make = make;
        this.speed= speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}`);
        return this;

    }

    break() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}`);
        return this;

    }

    get speedUS(){
        return speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;

        console.log(`${this.make} is going at ${this.speed}km/h with a charge of ${this.#charge}`);
        return this;

    }
}

const rivian = new EVCl('Rivian',120,23);

