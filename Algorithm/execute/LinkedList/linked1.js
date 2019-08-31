/*a={
    data:1
    
}
b={
    data:2,
    next:null
    
}
a.next=b
console.log(a)*/

class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

    
//Insertfirst node
insertFirst(data)
{
    this.head=new Node(data,this.head)
}

//insertlast node 
insertLast(data){
    let node = new Node(data);
    let current;

// if it is empty, make that head
if(!this.head)
{
this.head=node
}
else{
current= this.head
while(current.next){
    current=current.next

        }
    current.next=node
    }
    this.size++;
}
// index value
getIndex(index){
let current =this.head;
let count=0;
current=current.next;



while(current){
    if(count==index){
        console.log(current.data)
    }
    count++;
}
}

//insert at index
insertAt(data,index){
    if(index>0 && index>this.size){
        return 
    }
   
   // if first index
   if(index==0){
   this.head=new Node(data,this.head) // this.insertFirst(data)
   return
}
let node=new Node(data)
let current,previous;

//set current to first
current=this.head;
let count=0;
while(count<index){
    previous = current;
    count++;
    current=current.next;
}
node.next=current
previous.next= node

}

//remove
removeAt(index){
    if(index>0 && index>this.size){
    return
}
current=this.head;
let count=0;

//remove first
if(index==0){
this.head=current.next
    }
    else
    {       
while(count<index){
    previous=current;
    current=current.next
        } 
 previous.next=current.next
    }
this.size--;
}

PrintListData(){

    let current=this.head;

    while(current!=null){
        console.log(current.data)
            current=current.next
        }
         
     }
    }   



let linked=new LinkedList();
linked.insertFirst(100)
linked.insertFirst(200)
linked.insertFirst(300)
linked.insertLast(500)
linked.removeAt(2)
//linked.insertAt(400,1)
//linked.getIndex(2)
//linked.PrintListData()

    


