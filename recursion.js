function merge(array1, array2) {
  const sorted = [];

  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sorted.push(array1[i]);
      i += 1;
    } else {
      sorted.push(array2[j]);
      j += 1;
    }
  }

  return sorted.concat(i < array1.length ? array1.slice(i) : array2.slice(j));
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const splitPoint = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, splitPoint));
  const rightArray = mergeSort(array.slice(splitPoint));

  return merge(leftArray, rightArray);
}

console.log(mergeSort([9,3,4,1,85]));