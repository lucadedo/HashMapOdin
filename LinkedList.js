


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = null;
    this.tail = this.getTail();
  }

  insertAtHead(key, value) {
    let newNode = new Node(key, value);//create new node and pass the parameters, set head as next node
    if (this.head === null) {
      this.head = newNode;
      this.length = 1;
    }else{
      this.getTail();
      let last = this.getTail();
      last.next = newNode;
      this.length++;
    }
  }

  getElementIndex(index) {
    if(index < 0 || index >= this.length ) return null

    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current;
  }


  getTail() {
    let current = this.head;
    if (this.head === null) {
      return null;
    }
    while (current.next !== null) {
          current = current.next;
    }
    return current
  }




  print() {
    let output = '';
    let current = this.head;
    while (current) {
        output = ` ${output} ${current.value} -> `
        current = current.next;
    }
    console.log(`${output}null`);
  }

  insertAtIndex(index, value) {
    if(index === 0) return this.insertAtHead(value);
    const prev = this.getElementIndex(index - 1);
    if(prev == null) return null;

    prev.next = new Node(value, prev.next)
    this.length++;

  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if(index === 0) return this.removeHead();
    const prev = this.getElementIndex(index - 1);
    if(prev == null) return null;

    prev.next = prev.next.next
    this.length--;


  }



}





LinkedList.formValues = function(...values) {
    const list = new LinkedList();
    for (let i =  values.length - 1 ; i >= 0; i--) {
     list.insertAtHead(values[i])
    }
    return list
}



export { LinkedList };
