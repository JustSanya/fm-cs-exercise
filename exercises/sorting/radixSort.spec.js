
function radixSort(array) {
  const maxNumber = Math.max(...array);
  const maxLength = maxNumber.toString().length;

  let buckets = new Array(10).fill().map(() => []);
  let arrayWIP = [...array];

  for (let i = 1; i <= maxLength; i++) {
    let tempArr = [];
    
    for(let j = 0; j < arrayWIP.length; j++) {
      buckets[getDigit(i, arrayWIP[j], maxLength)].push(arrayWIP[j]);
    }

    for (let b = 0; b < 10; b++) {
      buckets[b].forEach(num => {
        tempArr.push(num);
      })
    }

    buckets = new Array(10).fill().map(() => []);
    arrayWIP = [...tempArr];
  }

  return arrayWIP;
}

function getDigit(depth, num, maxLength) {
  let number = num.toString()
  const diff = maxLength - number.length;

  for (let i = 0; i < diff; i++) {
    number = '0' + number;
  }

  return Number(number[number.length - depth]);
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  // it("should sort 99 random numbers correctly", () => {
  //   const fill = 99;
  //   const nums = new Array(fill)
  //     .fill()
  //     .map(() => Math.floor(Math.random() * 500000));
  //   const ans = radixSort(nums);
  //   expect(ans).toEqual(nums.sort());
  // });
});