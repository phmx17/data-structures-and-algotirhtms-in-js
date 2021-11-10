// queue: will incorporate unshift(enqueue) and pop(dequeue)

class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  // make sure direction of next is right to left in order to employ 'popping'
  // enqueue (unshift)
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {   
        this.first.next = newNode // these 2 lines establish direction of next pointer (here it is left)        
        this.first = newNode // insert from left
    }
    this.length++
    return this
  }

  traverse() {
    let current = this.last // must be last because it points to next node
    while (current) {
      console.log(current.val);
      current = current.next
    }
  }

  // dequeue (pop)
  dequeue() {
    if (!this.last) return undefined    
    let popped = this.last  // temp store for return
    if (!this.last.next) {  // we are on the last remaining node, so reset
      this.first = null
      this.last = null
    } else {
      this.last = this.last.next  // define new .last
    }    
    this.length--
    return popped
  }
}
module.exports = { Queue } 

// queue = new Queue()
// queue.enqueue('Hi')
// queue.enqueue('Anya')
// queue.enqueue('Josephine')
// queue.enqueue('Taylor')
// queue.enqueue('-Joy')
// queue.traverse()
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// [Anya, Hi]
// last: Hi -> Anya
// first: Anya -> null

