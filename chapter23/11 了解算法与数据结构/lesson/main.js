// // function sum(a,b){
// //     return a+b;
// // }

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.pop();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "No elements in Stack";
//     }
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }

//   printStack() {
//     let str = "";
//     for (let i = 0; i < this.items.length; i++) {
//       str += this.items[i] + " ";
//     }
//     return str;
//   }
// }

// // 使用示例
// let stack = new Stack();
// console.log(stack.isEmpty()); // true
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.printStack()); // 10 20 30
// console.log(stack.peek()); // 30
// console.log(stack.pop()); // 30
// console.log(stack.printStack()); // 10 20


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      let current, previous;

      current = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let i = 0;

        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }

      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let current, previous, i = 0;
      current = this.head;
      previous = current;

      if (index == 0) {
        this.head = current.next;
      } else {
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.size--;

      return current.element;
    }
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.element === element) {
        if (previous == null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        this.size--;

        return current.element;
      }

      previous = current;
      current = current.next;
    }

    return -1;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        return count;
      }

      count++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.element + " ";
      current = current.next;
    }

    console.log(str);
  }
}

// 使用示例
let list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

list.printList(); // 10 20 30

list.insertAt(15, 1);

list.printList(); // 10 15 20 30

list.removeFrom(3);

list.printList(); // 10 15 20

console.log(list.indexOf(15)); // 1

console.log(list.sizeOfList()); // 3

console.log(list.isEmpty()); // false