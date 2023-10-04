'use strict';

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*9
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);

console.log(letters.join('-'))*/
/*
const arr = [23,11,64];

console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length-1])
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1))
*/

/*for (const movement of movements) {
  console.log(`You ${movement>=0 ? 'deposited' : 'withdrew'}: ${Math.abs(movement)}`);
}*/
/*
movements.forEach(function(movement, i, arr){
  console.log(`Movement ${i} You ${movement>=0 ? 'deposited' : 'withdrew'}: ${Math.abs(movement)}`);
})*/
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(curr, key, map){
  console.log(`${key}: ${curr}` )
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(curr, key, map){
  console.log(`${key}: ${curr}` )
})*/

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? [...movements].sort((a,b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}


const createUsernames = function(accs) {

accs.forEach(function(acc) {
  acc.username = acc.owner.toLowerCase().split(' ').map((name)=>{
    return name[0]
  }).join('');

})
}

createUsernames(accounts);

const calcDisplayBalance = function(acc) {
  const balance = acc.movements.reduce((acc,curr) => acc + curr);
  acc.balance = balance;
  labelBalance.textContent = `${balance} EUR`
}


const calcDisplaySummary = function({movements, interestRate}){
  const incomes = movements.filter(mov => mov > 0).reduce((acc,curr) => acc + curr);

  labelSumIn.textContent = `${incomes}E`;

  const out = movements.filter(mov => mov < 0).reduce((acc,curr) => acc + curr);
  labelSumOut.textContent = `${Math.abs(out)}E`;

  const interest = movements.filter(mov => mov > 0).map((dep)=>dep*interestRate/100).filter((int)=>int>=1).reduce((acc,int) => acc + int)
  labelSumInterest.textContent = interest
}

const updateUI = function(acc) {
  displayMovements(acc.movements)
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}


let currentAccount;

btnLogin.addEventListener('click', function(event) {
  event.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    displayMovements(currentAccount.movements)
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);

    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();
  }

})

btnTransfer.addEventListener('click', function(event){
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

  if(amount > 0 && currentAccount.balance > amount && recieverAccount && recieverAccount.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';

})

btnClose.addEventListener('click', function(event){
  event.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    accounts.splice(index,1);

    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';

})

btnLoan.addEventListener('click', function(event){
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some((mov)=>(mov >= amount*0.1))) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
})

let isSorted = false;

btnSort.addEventListener('click', (event) => {
  event.preventDefault();
  displayMovements(currentAccount.movements, !isSorted)
  isSorted = !isSorted
})


/////////////////////////////////////////////////// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const checkDogs = function(arr1, arr2){
  const arr1Correct = arr1.slice(1,-2);
  const allDogs = arr1Correct.concat(arr2);
  
  allDogs.forEach(function(dog,i) {
    console.log(`Dog number ${i + 1} is an ${dog >= 3 ? 'adult' : 'puppy'} and it is ${dog} years old`)
  })
}

checkDogs(dogsJulia, dogsKate)*/
/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
})

console.log(movements,movementsUSD);

const movementUSDnew = movements.map(mov => mov * eurToUsd);
*//*

const deposits = movements.filter(function(mov){
  return mov > 0;
})

const withdrawals = movements.filter(function(mov){
  return mov < 0;
})

console.log(deposits)
console.log(withdrawals)
*//*

const balance = movements.reduce((acc, curr) => {
  return acc + curr;
})

console.log(balance)*//*

const maxValue = movements.reduce((acc,curr) => acc > curr ? acc : curr)

console.log(movements);
console.log(maxValue);

*/
/*
const calcAverageHumanAge = function(dogAges) {
  const humanAges = dogAges.map((dog)=>{
    if(dog <= 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  })

  const filteredDogs = humanAges.filter((dog) => {
    return dog >= 18;
  })

  return filteredDogs.reduce((acc,curr,i,arr)=>{

    console.log(curr, acc)
    if(i+1 == arr.length){
      return (acc+curr)/(i+1)
    } else {
      return acc + curr;
    }
  })

}

console.log(calcAverageHumanAge([5,2,4,1,15,8,3]))
console.log(calcAverageHumanAge([16,6,10,5,6,1,4]))*/
/*
const totalDepositsUsd = movements.filter((mov)=>mov>0).map((mov)=>mov*1.1).reduce((acc,mov)=>acc+mov)
console.log(totalDepositsUsd)*/
/*
const elements = movements.find((movement) => movement < 0);

console.log(elements)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

*/
/*
console.log(account4.movements.every((mov)=>(mov>0)))

const deposits = mov => mov > 0;

console.log(movements.some(deposits))
console.log(movements.every(deposits))
console.log(movements.filter(deposits))
*/
/*
const arr = [[1,2,3],[4,5,6],7,8];
console.log(arr.flat());

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);

console.log(accountMovements);
const allMovements = accountMovements.flat();

const overallBalance = allMovements.reduce((acc,reduce) => (acc + reduce));
console.log(overallBalance);

const overallBalance2 = accounts.flatMap( acc => acc.movements).reduce((acc,curr) => acc +curr);
console.log(overallBalance2);

*/

/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

console.log(movements.sort((a,b) => a - b ))*/
/* 
const arr = new Array(7);
console.log(arr);

arr.fill(1,3)
console.log(arr)

const newArr = Array.from({length: 7}, (_, i) => i+1)
console.log(newArr)


labelBalance.addEventListener('click', ()=>{
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'))
  console.log(movementsUI.map(el => Number(el.textContent.replace('E', ''))));
})*//*

const bankDepositSum = accounts.flatMap(account => account.movements).filter(mov => mov > 0).reduce((acc,curr) => acc +  curr)
console.log(bankDepositSum);

const numDeposits1000 = accounts.flatMap(account => account.movements).filter(mov => mov > 1000).length;
console.log(numDeposits1000);

const sums = accounts.flatMap(account => account.movements).reduce((acc,curr) => {
  curr > 0 ? acc.deposits += curr : acc.withdrawls += curr;
  return acc;
},{deposits:0, withdrawls:0})

console.log(sums);

const convertTitleCase = function(title) {
  const exeptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is', 'and'];

  const titleCase = title.toLowerCase().split(' ').map((word)=>exeptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')
  return titleCase[0].toUpperCase() + titleCase.slice(1);

}

console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('and here is another title with an example'))
*/

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach((dog)=>{
  dog.recommendedFood = dog.weight ** 0.75 * 28;
})

const SarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

const eatingType = function(curFood, recommendedFood) {
  if (curFood > recommendedFood + recommendedFood *0.1) {
    return 'too much';
  } else if (curFood < recommendedFood - recommendedFood*0.1) {
    return 'too little';
  } else {
    return 'good'
  }
}
console.log(SarahsDog);
console.log(`Sarahs dog is eating ${eatingType(SarahsDog.curFood, SarahsDog.recommendedFood)}`)

const ownersEatTooMuch = dogs.filter(dogs => eatingType(dogs.curFood, dogs.recommendedFood) === 'too much').flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter(dogs => eatingType(dogs.curFood, dogs.recommendedFood) === 'too little').flatMap(dog => dog.owners)

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much `);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little `);

console.log(dogs.filter(dogs => eatingType(dogs.curFood, dogs.recommendedFood) === 'good').length > 0);
const goodDogs = dogs.filter(dogs => eatingType(dogs.curFood, dogs.recommendedFood) === 'good');
console.log(goodDogs)

const sortedDogs = dogs.sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);