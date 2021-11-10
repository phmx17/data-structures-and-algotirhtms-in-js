// Selection Sort
// create a collection of already sorted data, which don't require redundant passes, at beginning of array
// I solved this all by myself without pseudo code

function selectionSort(arr) {
  let newMin    // temp container
  let minChanged    //   flag

  for (var i = 0; i < arr.length; i++) {  
   console.log(`pass: ${i}`)
   let min = arr[i] // // establish base min for each pass
    for (var j = i + 1; j < arr.length; j++) { // inner loop      
      if (arr[j] < arr[i]) {                
        newMin = arr[j] // capture temporary min and then compare to established min               
        if (newMin < min ) {
          min = newMin  // update min
          minChanged = true // flag to allow element swap after end of pass
          var tempJ = j // capture index of element to swap later with arr[i]
          console.log(`min has changed: ${min}`)
        }
      }
    }
    if (minChanged) {
      [arr[i], arr[tempJ]] = [arr[tempJ], arr[i]]   // swap indexes i and j(of current min value)
      minChanged = false
      console.log(`swap occured: ${arr} | i: ${i} | tempJ: ${tempJ} | min: ${min}`)
    } 
  }
  return arr
}
let result = selectionSort([100, 2, 99, 44, 22, 3, 88, 77, 1])
console.log(`Done! result: ${result}`);