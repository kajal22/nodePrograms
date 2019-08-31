let input=require('readline-sync')
let utility = require('../LinkedList/queue')
function queue() {  

    let ob= new utility.Queue;
    console.log("enter the bank amount")
    let amount=input.questionInt()
    console.log(" enter how many people in a queue")
      size=input.questionInt()
      if(size!=0)
    {
        for(let i=0;i<size;i++)
        {
            ob.enqueue(i)
        }

        do
        {
            
            console.log("bank amount")
            console.log("1.Deposit")
            console.log("2.Withdraw")
            console.log("Enter your choice:")
            choice=input.question()
    
            switch(choice)
            {
    case '1':console.log("Enter amount to Deposit:")
                    let depositAmount=input.questionInt()
                    amount=amount+depositAmount
                    ob.dequeue()
                    console.log("Total Balance is:"+amount)
                    break;
    case '2':console.log("Enter amount to Withdraw:")
            let withdrawAmount=input.questionInt()
            if(withdrawAmount<=amount)
                    {
                    amount=amount-withdrawAmount
                    ob.dequeue()
                    console.log("Total Balance is:"+amount)
                    }
                    else
                    {
                        console.log('No cash')
                    }
                   
                    break;
    
    
                default:
                    console.log("invalid choice")
                    break;
                    
            }
           
           

        }while(!ob.isempty())
        }
        console.log("Total Balance is:"+amount)
            
    }
    module.exports=queue()