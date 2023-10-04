 const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const addExpense = function (state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  const lim = spendingLimits[cleanUser] ? spendingLimits[cleanUser] : 0;

  return value <= lim ? 
    [...state, { value: -value, description, user: cleanUser }] :
    [...state];


    //budget.push({ value: -value, description, user: cleanUser });

};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1);

const check = function () {
  for (const entry of budget) {
    const lim = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;
    if (entry.value < -lim) {
      entry.flag = 'limit';
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (const entry of budget) {
    if (entry.value <= -limit) {
      output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);
