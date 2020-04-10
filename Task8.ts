let i,j,temp: number;
let getEvenAndSort = (numbers: number[]): number[] => {
  const arrayLength = numbers.length;
  let array: number[] = numbers.filter((x) => x % 2 === 0);

  for (i = 0; i < arrayLength; ++i) {
    for (j = i + 1; j < arrayLength; ++j) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
console.log(getEvenAndSort([1,81,10,4,7,2]));