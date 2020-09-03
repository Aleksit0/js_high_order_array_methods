const cars = [
  {
    name: 'Ford',
    model:  'Mustang',
  },
  {
    name: 'Audi',
    model:  'R8',
  },
  {
    name: 'Tesla',
    model:  'Model S',
  },
  {
    name: 'Mercedes',
    model:  'AMG GT'
  }
];

const carNames = cars.map(function(car) {
  return cars.name;
});

console.log(carNames);