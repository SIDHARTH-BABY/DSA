

// class LinkedList{
//     constructor(value){

//         this.head={
//             value: value,
//             next: null
//         }
//         this.tail = this.head,
//         this.length =  1

//     }
// }

// const myLinkedList = new LinkedList(10)


// console.log(myLinkedList);


// class LinkedList{
//     constructor(value){

//         this.head={
//             value: value,
//             next:null
//         }
//         this.tail= this.head
//         this.length = 1

//     }
// }


// const myLinkedList = new LinkedList(7)
    


// console.log(myLinkedList);


class LinkedList{
    constructor(value){
        this.head={
             value : value,
             next:null
        }
        this.tail = this.head
        this.length=1

    }
    append(value){
        const newNode={
            value: value,
            next:null
        }
        this.tail.next=newNode
        this.tail = newNode

        this.length++
        return this;


    }
}


const myLinkedList = new LinkedList(7)


myLinkedList.append(100)



