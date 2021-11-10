// pivot function to find a pivot of an arr
const pivot = (arr, start) => {  
  let pivotVal = arr[start]
  let swapIndex = 0 // which index swap will take place to fill ujp left side  
  for (let i = start + 1; i < arr.length; i++ ) {    
    if (arr[i] < pivotVal) {
      swapIndex += 1;
      console.log(`swapIndex: ${swapIndex}`);
      // console.log(`arr[i]: ${arr[i]}; arr[swap]: ${arr[swapIndex]}`);
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]] // ES6 swap
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
  console.log(`final arr: ${arr}`);
  return swapIndex
} 
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    console.log(`left: ${left}, right: ${right}`);
    let pivotIndex = pivot(arr, left)    
    // console.log(`pivotIndex: ${pivotIndex}`);
    // left side
    quickSort(arr, left, pivotIndex-1);
    // right side
    quickSort(arr, pivotIndex+1, right);
  }
  return arr
}

result = quickSort([10,5,6,4,8,1])
console.log(result);