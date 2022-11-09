class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail =this.head
        this.length=1
    }

    append(value){
        const newNode={
            value : value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    Printlist(){
        const array=[]
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next

        }
    }
  
}


const MyLinkedList = new LinkedList(12)

