class Node{
    constructor(values){
        this.values = values
        this.next= null
    }
}

class stack{
    constructor(){
        this.top= null
        this.bottom = null
        this.length = 0
    }
    peek(){

    }
    push(value){
        const newNode =new Node(value)
        if(this.length== 0){
            this.top=newNode
            this.bottom=newNode
        }else{
            const holdingPointer =this.top
            this.top =newNode
            this.top.next =holdingPointer
        }
        this.length++
        return this 
    }
    pop(){
        if(!this.top){
            return null
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return holdingPointer

    }
}

const mystack = new stack()

console.log(mystack.push('haiii'))
console.log(mystack.push('siduh'))

console.log(mystack.pop());

  
