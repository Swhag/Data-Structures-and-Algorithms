class Node {
  constructor(value, next) {
    this.value = value;
    this.nextNode = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
  }

  append(data) {
    const newNode = new Node(data);
    let current = this.head;

    if (current === null) this.prepend(data);
    else {
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
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
}
