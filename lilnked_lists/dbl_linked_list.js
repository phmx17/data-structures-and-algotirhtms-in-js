// doubly linked list

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // methods

  push(val) {
    let node = new Node(val)
    if (!this.head) { // edge case
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if (!this.tail) return undefined  // edge case
    let poppedNode = this.tail  // temp var to return
    poppedNode.prev = null // required so caller is not tempted to commit fakakta mishegas
    this.tail = this.tail.prev
    if (!this.tail) { // if the list is now empty then init head and length and exit with return
      this.head = null
      this.length = 0
      return poppedNode
    }
    this.tail.next = null
    this.length--
    return poppedNode  
  }

  shift() {
    if (!this.head) return undefined  // edge case
    let poppedNode = this.head
    // poppedNode.next = null // this can't be here!! it acts as a de-referencing pointer to this.head and will change its value of .next to null
    this.head = this.head.next
    if (!this.head) { // edge case
      this.tail = null
      this.length = 0
    } else {
      this.head.prev = null
      this.length--
      poppedNode.next = null
    }
    return poppedNode
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {   // edge case
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
    }
    this.head = newNode
    this.length++
    return this
  }

  traverse(isBackwards) {
    if (!this.head) return undefined  // edge case
    let current = this.head
    if (isBackwards) current = this.tail
    while (current) {
      console.log(current.val);
      if (isBackwards) current = current.prev
      else current = current.next
    }
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined // edge case
    // let half = Math.floor(this.length / 2) // loop does not discriminate floats, it uses floor, so 2 === 2.5
    if (idx <= this.length / 2) {  // do left side
      var start = 0
      var end = idx
      var current = this.head
    } else {  // do right side
      var start = idx
      var end = this.length - 1
      var current = this.tail
    }  

    for (start; start < end; start++) { // loop will no execute should start === end;
      if (start < this.length / 2) {
        current = current.next  // from head
      } else {
        current = current.prev  // from tail
      }    
    }    
    return current
  }

  set(idx, val) {
    let current = this.get(idx)
    if (!current) return
    current.val = val
    return current
  }

  insert (idx, val) {
    if (!val) return undefined
    let current = this.get(idx)
    if (!current) return
    if (current.next === null) this.push(val) // idx is tail
    else if (current.prev === null) this.unshift(val) // idx is head
    else {
      var newNode = new Node(val)
      current.prev.next = newNode
      current.next.prev = newNode
      newNode.next = current
      newNode.prev = current.prev
    }
    this.length++
    return true
  }

  remove(idx) {
    let current = this.get(idx)
    if (!current) return 
    if (current.next === null) this.pop() // idx is tail
    else if (current.prev === null) this.shift() // idx is head
    else {
      current.prev.next = current.next
      current.next.prev = current.prev      
    }
    this.length--
    return current
  }

  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current
    let prevNode = null // first node must point to null
    let i = 0    
    while (i < this.length) {
      let nextNode = current.next // temp store for next iteration
      current.next = prevNode // first pass would be null; current node must point to previous node
      current.prev = nextNode
      console.log('pass:', i, 'current: ', current);
      // prep for next itereation
      prevNode = current
      current = nextNode
      i++
    }
    return this
  }
}

let list = new DoublyLinkedList()
list.unshift('Hi')
list.push('Anya')
list.push('Josephine')
list.push('Taylor')
list.push('-Joy')
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.get(2));
// console.log(list.set(2, 'Marie'));
// console.log(list.insert(3, 'Marie'));
// console.log(list.remove(3));
console.log(list.reverse());
list.traverse(false)  // set 'isBackwards' bool
