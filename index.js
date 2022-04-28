const superheroes = require('superheroes');
const supervillains = require('supervillains');

const villain = supervillains.random();
const hero = superheroes.random();

const versus = {
  'hero': hero,
  'villain': villain
}

// console.log(versus);
console.log(versus.hero + ' VS ' + versus.villain);