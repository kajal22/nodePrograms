class Queue  {
    constructor(){
        this.front=-1;
        this.rear=-1;
         this.queue=[]
    }

    // add in a queue
     enqueue(element){
         if(this.rear==-1)
         {
        this.rear=this.rear+1;
        this.front=this.front+1;
         }
        else{
         this.rear=this.rear+1;
            }
             this.queue[this.rear] = element
         }


     //check for empty 
    isempty()
     {
        if(this.rear==-1)
         return true 
        else 
        return false
     }

    // delete from queue

     dequeue(){

        if (this.isempty()) 
     {
         console.log("queue is empty")
     }
        for(let i=this.front;i<this.rear;i++)
        {
              this.queue[i]=  this.queue[i+1]
        }
             this.rear=this.rear-1;         

        
        
     }


     Display(){
         for(let i=this.front;i<this.rear;i++)
         {
             console.log(this.queue[i])
         }
        }
        
        

           // remove at front
           RemoveFront(){
           let value = this.queue[this.front]
           this.front=this.front+1
           return value
           
           }
   
            // remove at rear
            Removerear(){
                let value = this.queue[this.rear]
                this.rear=this.rear+1
                return value
                        }

}
module.exports={Queue}