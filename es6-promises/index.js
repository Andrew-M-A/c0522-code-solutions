const takeAChance = require('./take-a-chance');

const keptPromise = takeAChance('Andrew');

keptPromise.then(value => {
  console.log(value);
});

keptPromise.catch(value => {
  console.log(value);
});
