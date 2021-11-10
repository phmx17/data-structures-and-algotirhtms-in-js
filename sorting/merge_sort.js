// merge sort
// part 2 merging 2 sorted arrs; function will be called from part 1 after dividing array
const mergeArrays = (arr1, arr2) => {
  let i = 0
  let j = 0
  let container = []  
  while (i < arr1.length && j < arr2.length) {  // first loop
    if (arr1[i] < arr2[j]) {     
      container.push(arr1[i])
      i++ 
    } else {
      container.push(arr2[j])
      j++  
    }
  }
  // case that either arr1 or arr2 is larger, keep filling up container with 2nd loop
  while (i < arr1.length) {
    container.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    container.push(arr2[j])
    j++
  }
  return container 
}
// entrance part 1; employs recursion
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr // base case
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid)) // 'left' processing will complete first; call stack will start popping off when arr is returned above
  let right = mergeSort(arr.slice(mid)) // then 'right' processing
  console.log(`left: ${left} | right: ${right}`)
  return mergeArrays(left, right)  // gets called first while 'left' is processing; then when 'right' is processing
} 

console.log(mergeSort([2,7,44,99,101,1,6,70,0]))


// let result = mergeArrays([1, 14], [2, 10, 101])
// console.log(result)

// const slicer = (arr, idx) => {
//   return arr.slice(idx)
// }
// console.log(slicer([1,2,3,4], 2));
