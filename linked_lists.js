class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let node1 = new ListNode(3);
let node2 = new ListNode(6);

node1.next = node2;

let list = new LinkedList(node1);