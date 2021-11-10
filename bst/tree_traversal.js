// this does not require a BST, it can contain unsorted values
// This is a breadth first traversal

// create a queue and then an array to store values

const { Queue } = require('./queue')    // import my queue class

let queue = new Queue()
console.log(queue.first);
let visitedNodes = []

while (queue.first) {
  
}