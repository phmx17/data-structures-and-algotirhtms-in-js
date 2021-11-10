// get first pair to equal zero

function pairZero(array) {
  let leftP = 1
  let rightP = array.length -1

  while (leftP < rightP) {
    let sum = array[rightP] - array[leftP]
    if (sum == 0) return [array[leftP], array[rightP]]
    if (sum > 0) {rightP -= 1}
    if (sum < 0) leftP += 1
  }
  return 'none found'
}