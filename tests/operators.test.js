// basic test

it('testing operators', ()=>{
  // + add - minus * multiply / divide
  expect(1 + 1).toBe(2);
  expect(1 - 1).toBe(0);
  expect(3 / 2).toBe(1.5);
  expect(3 * 2).toBe(6);

  // % modulus - returns remainder of division
  expect(3 % 2).toBe(1);
  expect(2 % 2).toBe(0);

  // ++ adds 1
  let num = 0;
  num++
  expect(num).toBe(1);

  // logic operators
  // && || !
  expect(true && true).toBe(true);
})