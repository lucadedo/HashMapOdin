
class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class NodeWithValue extends Node {
	constructor(key, value = null) {
		super(key);
		this.value = value;
	}
}


export class LinkedList {
  constructor() {
    this.head = null;
    this.length = null;
    this.tail = this.getTail();
  }

  insertAtHead(key, value) {
      let newNode = value ? new NodeWithValue(key, value) : new Node(key,value); //create new node and pass the parameters, set head as next node
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

  getElementIndex(data) {

    let current = this.head;
    while (current.next !== null) {
      if (current.key === data) {
          return current.value;
      };
      current = current.next;
    }
    if (current.next === null) {
      return current.value;
    }
  }


  getTail() {
    let current = this.head;
    if (this.head === null) {
        return null;
    }
    while (current.next !== null) {
          current = current.next;
    }
    return current;
  }




  print(all) {
    let current = this.head;
    while (current) {
      if (current.value) {
        all.push([current.key, current.value]);
      }else{
        all.push(current.key);
      }  
        current = current.next;
    }
   
  };

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

  removeAtIndex(key) {
      if (this.head.key === key) {
        // the list is only 1 long:
        if (this.length === 1) {
          this.head = null;
          this.length = 0;
        } else {
          this.head = this.head.next;
          this.length--;
        }
        return true;
      }else{
        let current = this.head;
        if (current.next) {
          while (current !== null) {
            // if current is the value before:
            if (current.next.key === key) {
              // if there is a value after:
              if (current.next.next) {
               current.next = current.next.next;
                // if value to delete is the tail:
              } else {
                current.next = null;
              }
              this.length--;
              return true;
            }
            current = current.next;
          }
        }
        return false;
      }


  };
  contains(data) {
		let current = this.head;

		if (current.key === data || this.getTail().key === data) {
			return true;
		}
		while (current.next !== null) {
			if (current.key === data) {
        
				return true;
			}
			current = current.next;
       
		}
    
		return false;
	}



}





LinkedList.formValues = function(...values) {
    const list = new LinkedList();
    for (let i =  values.length - 1 ; i >= 0; i--) {
     list.insertAtHead(values[i])
    }
    return list
}




