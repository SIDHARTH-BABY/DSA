

class LinkedList{

    constructor(value){
        this.head={
            value :value,
            next :null
        }
        this.tail = this.head
        let length = 1

    }

    append(value){
        const newNode ={
            value: value,
            next :null
        }
        this.tail.next= newNode
        this.tail=newNode
         this.length++
         return this
    }

    prepend(value){ 
        const newNode={
            value:value,
            next:null
        }
        newNode.next= this.head
        this.head = newNode
        this.length++
        return this


    }


}


const MyLinkedList = new  LinkedList(10)


console.log(MyLinkedList.append(7));
console.log(MyLinkedList.prepend(44));

