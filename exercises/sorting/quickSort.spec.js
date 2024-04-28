function quickSort(nums) {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for(i = 0; i < nums.length - 1; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
