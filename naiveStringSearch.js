function naiveSearch(string, val) {
  let counter = 0  
 
  for (var i = 0; i < string.length; i++) {
      for (var j = 0; j < val.length; j++) { // do not use 'let' as it will be out of scope outside of loop!
          console.log(`j === ${j} val[j]: ${val[j]}, string[i+j]: ${string[i + j]}`) 
          if (val[j] !== string[i + j]){ 
            console.log(`Break! : j === ${j}`)
            break // break if no match 
          }
          if (j === val.length-1) {
            counter += 1    
            console.log(`score ! ${counter, j}`)                    
          }  
                 
      }
  }
   
  return `${val} was found ${counter} times`       
  
}
console.log(naiveSearch('xoixoooxoioooxoixV', 'xoix'))