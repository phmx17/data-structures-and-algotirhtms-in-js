// insertion sort

const insertionSort = (arr) => {  
  for (var i = 0; i < arr.length; i++) {
    console.log(`pass i: ${i}`);
    if (arr[i + 1] < arr[i]) {
      let tempVal = arr[i+1]  // store new element
      arr.splice(i + 1, 1)  // remove that element from arr
      console.log(`${arr[i+1]} is smaller than ${arr[i]}; start j loop`);
      for (var j = i; j >= 1; j--) {  // must stop at 1 otherwise out of bounds later
        console.log(`j: ${j}`);
        if (tempVal < arr[0]) { // if true tempVal will take arr[0]; this is required because j loop can only got to j==1 before it goes out of bounds
          arr.splice(0, 0, tempVal) // insert tempVal at index [0]
          console.log(`index [0] swap!! : ${arr} | arr[i]: ${arr[i]} | i: ${i}`);          
          break
        }
        if (tempVal < arr[j] && tempVal > arr[j - 1]) {
          arr.splice(j, 0, tempVal) // insert tempVal
          console.log(`swap occured: ${arr} | arr[i]: ${arr[i]} | i: ${i}`);          
          break
        } 
      }
    } 
  }
  return arr
}
let result = insertionSort([3, 44, 38, 5, 47, 0, 15, 2, 1]) // repeating nums will not return
console.log(result)