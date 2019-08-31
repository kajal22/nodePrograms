function Stock()
{

const fs=require('fs')
let input=require('readline-sync')

let Utility=require('../commercialDataProcessing/stock')
let Utility2=require('../../LinkedList/list2')
let Utility3=require('../../LinkedList/queueusinglinkedlist')
let Utility4=require('../../LinkedList/stackusinglinkedlist')

let object=new Utility.StockAccount
let object1=new Utility2.LinkedList;
let objQueue=new Utility3.QueueLinkedList;
let objStack=new Utility4.StackLinkedList;

let data1=fs.readFileSync('company.json')
let CompanyData = JSON.parse(data1)
    console.log( CompanyData)
    

let data2=fs.readFileSync('customer.json')
    let CustomerData = JSON.parse(data2)
    console.log( CustomerData)

let data3=fs.readFileSync('transaction.json')
let transaction = JSON.parse(data3)




		 /** choice for user to perform operation buy and sell share */
            console.log("\n\t 1. **************BUY SHARES********************");
            console.log("\t 2. *************SELL SHARES**********************");
            console.log("**************enter your choice ********************");
            let choice = input.questionInt();
            
            switch (choice) {
                case 1:
				console.log("\nEnter customer ID who want to buy share");
                    ID = input.questionInt();
                    /** take comapny symbol */
                    console.log("Enter company symbol which wants to buy");
                    let Symbol = input.question();
					
					
					object.buy(ID, Symbol);
                    break;
					
			    case 2:
				
				console.log("\nEnter customer ID who wants to SELL share");
                    ID1 = input.questionInt();

                    /** take comapny symbol */
                    console.log("Enter company symbol which user want to BUY");
                    Symbol1 = input.question();
						object.sell(ID1, Symbol1);
                    break;
				
                default: /** when user enter wrong choice */
                    console.log(" wrong choice")
                    break;
                   
            }
			
		
		 	for(let i=0;i<CompanyData.length;i++)
         {
             /** add particular company shares into list */
                object1.insertAdd(CompanyData[i].share)

         }

        console.log("display linkedlist");
        let result=object1.printListData();
        console.log(result)
          
        
        for(let j=0;j<transaction.length;j++)
    {
        objStack.push(transaction[j].symbol)
        objQueue.enqueue(transaction[j].DateTime)
    }
    console.log("Inserting company symbol to stack")
    objStack.printList()
    
     console.log("Inserting transaction time in Queue")
     objQueue. printQueueList()
    	
        
    
    
}
module.exports=Stock()
