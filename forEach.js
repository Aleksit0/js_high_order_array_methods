cars = [
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

const nums = [12, 35, 99, 65, 34, 78, 72];

cars.forEach(function(car) { //? this fn can take 3 parameters (iterator, index, whole array)
  console.log(car);
});

/*
  cars.forEach(function(car) {
    console.log(car.model);
  });
*/