function nestedAdd(array) {
  let result = 0;

  array.forEach(el => {
    if (Array.isArray(el)) {
      result += nestedAdd(el)
    } else {
      result += el;
    }
  });

  return result;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});