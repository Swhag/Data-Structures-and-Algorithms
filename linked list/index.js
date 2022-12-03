import LinkedList from './LinkedList.js';

const ll = new LinkedList();
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.append(5);
ll.append(3);
ll.append(1);

ll.toString();
console.log(ll.at(1));
console.log(ll.getSize());
console.log(ll.getHead());
console.log(ll.getTail());

ll.pop();
ll.toString();
console.log(ll.getSize());

console.log(ll.contains(10));
console.log(ll.find(10));

ll.insertAt(25, 1);
ll.toString();

ll.removeFirst();
ll.toString();

ll.removeAt(1);
ll.toString();
