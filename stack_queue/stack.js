// stack

class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.first) { // only runs when stack is empty
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.last  // set direction of next (here: right to left)
      this.last = newNode // update .last to newNode
    }    
    return ++this.length
  }

  traverse() {
    let current = this.last
    while (current) {
      console.log(current.val);
      current = current.next
    }
  }

  pop() {
    if (!this.first) return 'undefined'
    let popped = this.last
    if (!this.last.next) { // if current is the last node on the stack
      this.first = null
      this.last = null
    } else {
      this.last = this.last.next
    }
    this.length--
    return popped
  }
}

let stack = new Stack
console.log(stack.push('Anya'))
console.log(stack.push('Taylor'))
console.log(stack.push('Joy'))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.traverse()


