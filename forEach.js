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

cars.forEach(function(car) { //? this fn can take 3 parameters (iterator, index, whole array)
  console.log(car);
});                     //? this is much cleaner

/*
  cars.forEach(function(car) {
    console.log(car.model);
  });
*/