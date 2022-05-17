const exp = require("constants");

it('testing conditions', ()=>{
  // if statements
  let num = 2;
  let isOdd;

  expect(num).toBe(2);
  expect(isOdd).toBe(undefined);

  if(num % 2 !== 0){
    isOdd = true;
  } else{
    isOdd = false;
  }
  expect(isOdd).toBe(false);

  // if else statements
  // if else if else statments

  //define the function
  const variable = (personAge => {
    return true;
  })
})