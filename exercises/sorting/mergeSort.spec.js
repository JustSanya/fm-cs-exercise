function merge(arr1, arr2) {
  const res = [];

  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]){
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }

  return res.concat(arr1, arr2);
}

const mergeSort = (nums) => {
  // array of length 1 is always sorted (base case)
  if (nums.length <= 1) {
    return nums;
  }

  // otherwise split the array further down and merge what we expect to be 2 sorted arrays
  const point = Math.floor(nums.length / 2);
  const arr1 = nums.slice(0, point);
  const arr2 = nums.slice(point);


  return merge(mergeSort(arr1), mergeSort(arr2));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});