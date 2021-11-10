// Binary Search Tree
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class Tree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (!this.root) { // edge case: plant the root
      this.root = newNode
      return this
    }

    let current = this.root    
    while (true) {  // loop until end of left or right branch reached
      if (value === current.val) return undefined // exit the loop if duplicate found; other option would be to add frequency counter to the node
      if (value > current.val){ // travel down right side
        if (current.right === null){  // if no leaf
          current.right = newNode // insert new leaf
          return this // return tree
        } current = current.right // move to next node               
      } else {  // travel down left side
        if (current.left === null) {
          current.left = newNode
          return this
        } current = current.left
      }
    }    
  }  
}
// handle duplicates: either ignore or add another porperty to each node called 'frequency'
let tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
console.log(tree.insert(7))
//        10
//    5         13
// 2    7    11    16

// Tree traversal
// this does not require a BST, it can contain unsorted values
// This is a breadth first traversal

// create a queue and then an array to store values

const { Queue } = require('./queue')    // import my queue class

let queue = new Queue()
console.log(queue.first);
let visitedNodes = []

while (queue.first) {
  
}