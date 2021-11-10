function collectOddValues(arr) {
    let collection = []
    if (arr.length === 0) {
        return []
    }    
    if (arr[0] % 2 !== 0) {
        collection.push(arr[0])
    }    
    return collection = collection.concat(collectOddValues(arr.slice(1)))            
    
}
console.log(collectOddValues([2, 5, 99, 6, 11, 103, 108, 118, 117]))