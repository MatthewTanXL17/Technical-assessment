function findLargestNumber(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
  
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  console.log(findLargestNumber([2, 4, 8, 6])); //Output is 8
  
  console.log(findLargestNumber([88, 22, 33, 99])); // Output id 99
  
  console.log(findLargestNumber([]));