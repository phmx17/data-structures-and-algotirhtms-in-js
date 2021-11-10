// count unique values

function countUnique(arr) {
  if (arr.length === 0) return 0
  let i = 1
  let j = 2
    while (j <= arr.length) {
      if (arr[i] !== arr[j]) {
        i++
        arr[i] = arr[j]      
      }
    j++
  }
  return i + 1
}

function maxSubArraySum(arr, num) {
  if (num > arr.length) return null
  let i = 0
  let maxTotal = -Infinity
  let sum = arr[1]
  while (i < arr.length - num + 1 ) {
    for (let j = i + 1; j <= i + num; j++) {
      let sum = sum + arr[j]
    }
    if (sum > maxTotal) {
      maxTotal = sum
    }
    i++
  }
  return maxTotal
}
maxSubArraySum([1, 2, 3, 0, 5, 8, 3, 2, 1, 1], 3)

// Sliding Window
function slidingWindow(arr, spread) {
  if (spread > arr.length) {
    return null
  }
  let maxSum = 0
  // preliminary loop
  for (let i = 0; i < spread; i++) {
    let sum = sum + arr[i]
  } 
  maxSum = sum
  // sliding window loop
  i = spread // set to next index to process
  while (i < arr.length) {
    sum = sum - arr[i - spread] + arr[i]
    maxSum = Math.max(maxSum, sum)
    i++ 
    }
    return maxSum
  } 

// divide and conquer
function divideConquer(ar, val) {
  let min = 0
  let max = arr.length -1
  while (min < max) {
    let middle = Math.floor((min + max) / 2)
    let currentVal = arr[middle]
    if (val < currentVal) {
      max = middle - 1
    }
    if (val > currentVal) {
      min = middle + 1
    }
    return currentVal
  }
  return null
}