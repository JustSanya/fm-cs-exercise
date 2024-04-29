function binarySearch(id, array) {
  let currentId;
  let currentIndex = Math.floor(array.length / 2);

  do {
    currentId = array[currentIndex].id;

    if (currentId < id) {
      currentIndex = currentIndex + Math.floor((array.length - currentIndex) / 2);
    } else if (currentId > id) {
      currentIndex = Math.floor(currentIndex / 2);
    }

  } while(currentId !== id);

  return array[currentIndex];
}

// unit tests
// do not modify the below code
test("binary search", function () {
  const lookingFor = { id: 6, name: "Burke" };
  expect(
    binarySearch(6, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      { id: 5, name: "John" },
      lookingFor,
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      { id: 23, name: "Brian" },
      { id: 24, name: "Ben" }
    ])
  ).toBe(lookingFor);
});
