// Bubble sort: worst ==  O = n^2

function bubbleSort(arr) {
  let pass = 0
  let noSwaps = true  // flag true if a pass yields no swapps; in that case exit i loop
  for (var i = 0; i < arr.length; i++) {
    noSwaps = true
    // single pass
    for (var j = 0; j < arr.length; j++) {
      //swap if larger
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        noSwaps = false
        console.log(`current arr inside j loop: ${arr}`)
      }
    }
    pass += 1
    console.log(`completed pass: ${pass}`)
    if (noSwaps) break
  }
  return arr
}
let result = bubbleSort([1,88,100,3,9,66,22,33,55,77,6,2])
console.log(result)
// console.log(bubbleSort([100,3,22,33,66,77, 88, 1]))  