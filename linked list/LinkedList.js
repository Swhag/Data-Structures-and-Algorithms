class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    let current = this.head;

    if (current === null) this.prepend(value);
    else {
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  removeFirst() {
    this.head = this.head.nextNode;
    this.size--;
  }

  pop() {
    let current = this.head;

    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.size--;
  }

  contains(value) {
    let current = this.head;

    while (current != null && current.value !== value) {
      current = current.nextNode;
    }
    return current == null ? false : true;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current != null) {
      if (current.value == value) return index;
      index++;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}(${current.value}) -> `;
      current = current.nextNode;
    }
    console.log(`${output}null`);
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) return this.prepend(value);

    const prev = this.at(index - 1);
    if (prev == null) return null;

    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index === 0) return this.removeFirst();

    const prev = this.at(index - 1);
    if (prev == null) return null;

    prev.nextNode = prev.nextNode.nextNode;
    this.size--;
  }
}
