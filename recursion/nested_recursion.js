function collectOddValues(arr) {
    let collection = []    
    // helper inner
    function helper(helperArr) {
      // base case
      if (helperArr.length === 0) {
        return
      }
      if (helperArr[0] % 2 !== 0) {
         collection.push(helperArr[0])       
      }
      helper(helperArr.slice(1)) // recursion
    }
    helper(arr) // initial inner call
    return collection
}
console.log(collectOddValues([0, 1, 44, 56, 77, 76, 79, 81, 100, 101, 122]))