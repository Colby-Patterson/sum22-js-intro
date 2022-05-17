// test here
it('test datatypes',()=>{
  //test here
  const PI = 3.14;
  expect (PI).toBe(3.14);
  expect(typeof PI).toBe('number');

  let myName = 'Colby';
  let PI_STR = '3.14'
  expect(myName).toBe('Colby');
  expect(typeof myName).toBe('string');

  expect (1).toBe(1);
  // expect (1 == 1).toBe('boolean');
  expect(1)   
  
  let outback = {make: "subaru", model: "outback",  mileage: 23000, electric: false};
  let tesla = {make:"tesla", model:'3', mileage: 13000, electric: true};

  expect(outback.make).toBe('subaru');
  expect(tesla.make).toBe('tesla');
  expect(tesla.make).not.toBe(3);

  let people = ['Jill', 'Jack', 'Fred'];
  expect(people[0]).toBe('Jill');
  expect(people.length).toBe(3);

  people.push('Bob');
  // expect(people[people.length - 1].toBe('Bob'));
})