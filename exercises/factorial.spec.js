function factorial(n) {
  if (n <= 1) return 1;
  
  return n * factorial(n - 1);
}

// unit tests
// do not modify the below code
test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(10)).toEqual(3628800);
});