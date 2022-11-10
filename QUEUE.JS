class node{
    constructor(value){
        this.value= value
        this.next= null
    }

}

class mystack{
    constructor(){
        this.first=null
        this.last=null
        this.length=0
    }

    enqueue(){
        const newNode = new Node(value)
        if(this.length == 0){
            this.first=newNode
            this.last=newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.this.length ++
        return this

    }
    this
    dequeue(){
        if(!this.first){
            return null
        }
        this.first=this.first.next
        this.length--
        return this

    }
    peek(){
        return this.first
    }
}



