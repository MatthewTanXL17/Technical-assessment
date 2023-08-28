function sortAscending(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
    
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortAscending([]));

console.log(sortAscending([2, 4, 8, 6]));

console.log(sortAscending([88, 22, 33, 99]));