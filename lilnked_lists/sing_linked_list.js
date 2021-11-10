// singly linked list

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) { // this will only execute once
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1;
    return this // return the whole.list
  }
  pop() {
    if (!this.head) return undefined
    let newTail // will contain 2nd to last node
    let current = this.head
    while (current.next) { // exit when last node reached
      newTail = current // always trailing current by 1 node
      current = current.next // move to next
    }
    this.tail = newTail // 2nd to last becomes new tail
    this.tail.next = null // sever last node from list
    this.length--;
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current  // return popped node
  }
  shift() { // remove first node
    if (!this.head) return undefined
    this.head = this.head.next
    list.length--; 
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return true
  }
  unshift(val) {  // insert new node at zero
    let newNode = new Node(val)
    if (!this.head) { // empty list
      this.head = newNode
      this.tail = this.head // this must be present
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  traverse() { // display all node values
    let current = this.head
    for (let i = 0; i < this.length; i++) {
      console.log(current.val);
      current = current.next
    }
  }
  get(idx) {  // get node at idx
    if (idx < 0 || idx >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== idx) {
      current = current.next
      counter += 1
    }
    return current
  }
  set(idx, val) { // ie overwrite node at idx 
    let current = this.get(idx) 
    if (!current) return 'index not found'
    current.val = val
    return true
  }
  insert(idx, val) {
    if (idx > this.length || idx < 0) return 'index out of bounds'
    if (idx === this.length) return !!this.push(val)
    if (idx === 0) return !!this.unshift(val) // double negate will create boolen for the expression; also referred to as 'bang bang'
    
    let previous = this.get(idx - 1)
    let newNode = new Node(val)
    newNode.next = previous.next // take over pointer
    previous.next = newNode  // set previous node to point to newNode
    this.length++
    return true
  }
  remove(idx) {
    if (idx >= this.length || idx < 0) return 'out of bounds'
    if (idx === 0) return !!this.unshift()
    if (idx === this.length -1) return !!this.pop() // bang bang !!

    let previousNode = this.get(idx - 1)
    let nodeToBeRemoved = previousNode.next // assign current node to variable
    previousNode.next = nodeToBeRemoved.next
    this.length--
    return nodeToBeRemoved
  }
  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current
    let nextNode  // temp placeholder
    let prevNode = null // first node must point to null
    let i = 0    
    while (i < this.length) {
      nextNode = current.next // temp store for next iteration
      current.next = prevNode // first pass would be null; current node must point to previous node
      console.log('pass:', i, 'prev: ', prevNode, 'current: ', current, 'next: ', nextNode);
      // prep for next itereation
      prevNode = current
      current = nextNode
      i++
    }
    return true
  }
}

let list = new SinglyLinkedList()
// pop will traverse list up to 2nd to last node and set its .next to null
// also save the value of popped and return
// console.log('popped tail: ', list.pop())
// console.log('popped head: ', list.shift())
list.push('Anya')
list.push('Taylor')
list.push('-Joy')
list.unshift('Hi')
// console.log('set Josephine at pos 1', list.set(1, 'Josephine'))
// console.log('get "Taylor" 3rd node: ', list.get(2))
console.log('insert Josephine before Taylor: ', list.insert(2, 'Josephine'))
// console.log('remove Josephine @ 2: ', list.remove(2,))
list.reverse()
list.traverse()
