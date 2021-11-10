function factorial(num) {   
  while (num > 1) {
    return num * factorial(num - 1)
  }
  return num   
 
}
console.log(factorial(4))
