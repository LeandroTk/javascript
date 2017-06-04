var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

function getAnimals(value) {
  return value.species === 'dog';
}

var filtered = animals.filter(getAnimals);
console.log(filtered);﻿

// With for loop
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  dogs.push(animals[i]);
}
