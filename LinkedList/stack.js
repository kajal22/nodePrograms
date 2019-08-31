class Stack {
    constructor(){
     this.top =-1;
     this.stack=[];

    }

    //push operation

        push(Exp) {

            this.top = this.top + 1;   
            this.stack[this.top] = Exp;
     
       
    }
    //pop operation

        pop()
        {
           
        if(this.top==-1) {
            
        }else if(this.stack[this.top]=='{' || this.stack[this.top]=='(' || this.stack[this.top]=='[' )
         {
       this.top = this.top-1; 
         }
         }

        /* printstack()
         {
             if(this.isempty())
             {
                 console.log("stack is empty")
             }
                 else
                 for(let i=0;i<this.stack.length;i++)
                 {
                     console.log(this.stack[i])
                 }
             }
         */

    // empty operation
      isempty(){
       
      if(this.top==-1)
      return true

      else 
      return false
              }


}
module.exports={Stack}