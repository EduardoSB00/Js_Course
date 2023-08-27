'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDeliver: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient,otherIngredients);

  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
let [first, ,second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [starter, mainCourse] = restaurant.oreder(2,0);
console.log(starter, mainCourse)

const nested = [2, 4, [5, 6]];

const [i,,[j,k]] = nested;
console.log(i,j,k);

const [p = 1, q = 1, r = 1] = [8,9];
console.log(p,q,r)
*//*

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours:hours, categories:tags} = restaurant;
console.log(restaurantName, hours, tags)

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

let a =111;
let b = 999;
const obj = {a:23, b:7, c:14};

({a,b} = obj);

console.log(a,b)

const {sat: {open, close}} = openingHours;

console.log(open,close)

restaurant.orderDeliver({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})*//*

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

const str = 'jonas';

const letters = [...str];

console.log(letters);
*//*

const ingridients = [prompt('Lets make pasta: ingridient 1'), prompt('Lets make pasta: ingridient 2'), prompt('Lets make pasta: ingridient 3')];

restaurant.orderPasta(...ingridients)
*//*
const newRestaurant = {
  ...restaurant, foundedIn: 1998, founder: 'Guisepe'
}

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Rissoto Romma';
restaurantCopy.mainMenu.push('chives')

console.log(restaurant);
console.log(restaurantCopy);

*/
/*
const arr = [1,2, ...[3,4]];

const [a, b, ...others] = [1, 2, 3, 4 ,5];

console.log(a,b,others);

const [pizza, ,risotto, ...otherFood]= [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza,risotto,otherFood);

const  {sat, ...weekday} = restaurant.openingHours;

console.log(weekday);

const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
}

add(2,3);
add(5,3,7,2)

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives')*/
/*
console.log('------OR------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', "spinach");
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');*/
/*
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests = rest1.numGuests || 10;

console.log(rest1, rest2);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANNONYMOYS>';
rest2.owner = rest2.owner && '<ANNONYMOYS>';

rest1.owner &&= '<ANNONYMOUS>';
rest2.owner &&= '<ANNONYMOUS>';

console.log(rest1, rest2);*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1, x:draw, team2} = game.odds;


const printGoals = function (...players) {
  console.log(...players, players.length)
}

printGoals(...game.scored)

console.log(`The team most likely to win is ${team1 > team2 ? game.team1 : game.team2}`)
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i,el] of menu.entries()) {
  console.log(`${i}: ${el}`)
}
*//*
console.log(restaurant.openingHours.sat?.open);
console.log(restaurant.openingHours.mon?.open);


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`)
}


console.log(restaurant.order?.(0,1) ?? 'Method does not exist')
console.log(restaurant.orderRissoto?.(0,1) ?? 'Method does not exist');

const user = [
  {name: 'Jonas', email: 'test@gmail.com'}
]

const user2 = [
]

console.log(user[0]?.name ?? 'User Array is Empty')

console.log(user2[0]?.name ?? 'User Array is Empty')
*/
/*
const properties = Object.keys(restaurant.openingHours);
let propertiesStr = `We are open on ${properties.length} days`;

for (const day of properties) {
  propertiesStr += ` ${day}`;
}

console.log(propertiesStr);

const values = Object.values(restaurant.openingHours);
const entries = Object.entries(restaurant.openingHours);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}*//*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i,player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:`,player)
}

let oddCount = 0;
let average = 0;

for (const odd of Object.entries(game.odds)) {
  console.log(odd)
  oddCount += odd[1];
  average = oddCount/Object.entries(game.odds).length 
}

console.log(`This is the average odd ${average}`);

for (const odd of Object.entries(game.odds)) {
  console.log(`Odd of ${game[odd[0]] ?? 'Draw'}: ${odd[1]}`)
}

let scorers = {};

for (const players of game.scored) {
  console.log(players)
  scorers[players] ? scorers[players]++ : scorers[players] = 1;
}

console.log(scorers)*/
/*
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissotto', 'Pasta', 'Pizza']);

console.log(orderSet)
console.log(orderSet.size);
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread')
orderSet.delete('Rissotto');
console.log(orderSet);
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

*/
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
rest.set(2, 'Lisbon Portugal');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(')

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear()
rest.set(document.querySelector('h1'), 'heading')

const arr = [1,2]
rest.set(arr, 'Test');
console.log(rest.get(arr))
console.log(rest);
*//*

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'CORRECT!'],
  [false, "TRY AGAIN"]
])

console.log(question)

console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map (Object.entries(restaurant.openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if(typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = prompt('Your Answer');


//console.log(question.get(Number(answer) === question.get('Correct')));

console.log([...question]);
console.log(question.keys())
console.log(question.entries())
console.log(question.values())

*/
/*

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const eventsSet = new Set(gameEvents.values());
const events = [...eventsSet];

gameEvents.delete(64);

console.log(gameEvents);

console.log(`An event happened on average every ${90/gameEvents.size} minutes`)

for (const event of gameEvents) {
  console.log(`${event[0] <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${event[0]}: ${event[1]}`)
}*/
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1])
console.log(plane[2])
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4))
console.log(airline.slice(4,7))

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+ 1))

console.log(airline.slice(1,-1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === 'B' || s ==='E') {
    console.log('You got a middle seat')
  } else {
    console.log('You got lucky')
  }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

*/
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';

const passLower = passenger.toLowerCase()

const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passCorrect)

const email = 'hello@jonas.com';
const loginEmail = ' Hello@Jonas.com \n';

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

const price = '288,97#';

const priceUS = price.replace('#', "$").replace(',','.')
console.log(priceUS);

const announcement = 'All passangers como to boarding door 23, Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.startsWith('Ai'));
console.log(plane.endsWith('neo'));

const checkBaggage = function (items){
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed onboard')
  } else {
    console.log('You are allowed onboard')
  }

} 

checkBaggage('I have a laptop, some foot and a pocket Knife')
checkBaggage('Socks and a camera')
checkBaggage('Got some snacks and a gun for protection')

*/

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')
console.log(firstName,lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const passanger = 'Jessica ann smith davis';

const capitalizeName = function(name) {
  let names = name.split(' ');
  let finalName = []

  for (let name of names) {
    let newName = name.toLowerCase();
    finalName.push(newName[0].toUpperCase() + newName.slice(1))
  }

  console.log(finalName.join(' '));
  return finalName.join(' ');
}

capitalizeName(passanger);
capitalizeName('jonas schmetdman')

const message = 'Go to gate 23!';

console.log(message.padStart(25, '+').padEnd(30,'+'))
console.log('Jonas'.padStart(25, '+').padEnd(30,'+'))

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}



console.log(maskCreditCard(45156261884652));
console.log(maskCreditCard("5556545165651516565"));

const message2 = 'Bad weather... All departures delayed...';

console.log(message2.repeat(5))

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${' => '.repeat(n)}`)
}


planesInLine(4);
planesInLine(6);
