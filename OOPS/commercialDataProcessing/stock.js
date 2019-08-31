const fs=require('fs')
let input=require('readline-sync')

let data1=fs.readFileSync('company.json')
let CompanyData = JSON.parse(data1)
  
let data2=fs.readFileSync('customer.json')
    let CustomerData = JSON.parse(data2)
    

    let data3=fs.readFileSync('transaction.json')
    let transaction = JSON.parse(data3)
    
  
class StockAccount
{

buy(ID,Symbol)
{
   
        
           for(let i=0;i<CompanyData.length;i++)
         {
            if(CompanyData[i].symbol==Symbol)
           {     
	           for (let j = 0; j < CustomerData.length; j++) 
			   {

                    /**finding user details using ID*/
                    if (CustomerData[j].ID == ID) {
                        console.log("customer ID : " + CustomerData[j].ID + " and customer balance : " + CustomerData[j].balance);


               console.log("enter the number of share ")
                    let NoOfShare=input.questionInt() 
					
				 let customerAmount = (NoOfShare * CompanyData[i].price);
                 console.log("\n customer wants to spent money " + customerAmount) 
					
					if (NoOfShare <= CompanyData[i].share && customerAmount <= CustomerData[j].balance) 
					{

                            /** Noofshare reduced of company */
                            CompanyData[i].share = (CompanyData[i].share - NoOfShare);

                            /**reduced customer balance  */
                            CustomerData[j].balance = (CustomerData[j].balance - customerAmount);

                            /**add number of share which is user buy */
                            CustomerData[j].share = CustomerData[j].share + NoOfShare;

                            console.log("\ncustomer bought " + NoOfShare + " share  money " + customerAmount)
					
				

                   
						  let DATE = new Date();
                             

                             /** add details */
                             let transactionData=
                                 {
                                    
                                     customerID: ID,
                                     Boughtfrom: CompanyData[i].name,
                                     NoOFshare: NoOfShare,
                                     AmountSpend: customerAmount,
                                     DateTime: DATE,
                                     symbol:CompanyData[i].symbol
                                 }
                             
                                 transaction.push(transactionData)
                                 fs.writeFileSync('transaction.json',JSON.stringify(transaction))  
							
							
							
							
							
					    break;
							
						}else{
                            /** when number of share and pay money is greater */
                            if(NoOfShare > CompanyData[i].share)
                            console.log("comapny does not have that much shares");
                            if(customerAmount > CustomerData[j].balance)
                            console.log("customer Does not have that much amount to buy shares");
					         }
					       }	 
					}
			   }
		 }
console.log( CompanyData)
console.log( CustomerData) 
    fs.writeFileSync('company.json',JSON.stringify(CompanyData))
    fs.writeFileSync('customer.json',JSON.stringify(CustomerData))
    fs.writeFileSync('transaction.json',JSON.stringify(transaction))    
}
                       
sell(ID, Symbol) {		
		
		     for (let i = 0; i < CustomerData.length; i++) {
            /** get user details */
            if (CustomerData[i].ID == ID)
            {   
                /** ask customer to set share price */
           
                console.log("enter your share price ");
                let CustomerSharePrice = input.questionInt();

                for (let j = 0; j < CompanyData.length; j++) {
                    /**get company details using symbol taken from user */
                    if (CompanyData[j].symbol == Symbol)
                    {
                        console.log("\nCUSTOMER WANTS TO SELL SHARE " + CompanyData[j].symbol) 
					
                        console.log("\nhow many shares company wants to buy from user");
                        let NoOfShare = input.questionInt();

                        /** company need money to buy customer share */
                        let companyAmount = CustomerSharePrice * NoOfShare;
						if (NoOfShare <= CustomerData[i].share) {

                            /** company shares increase after buy operation successful*/
                            CompanyData[j].share = CompanyData[j].share + NoOfShare;

                            /** customer balance increase after sell operation*/
                            CustomerData[i].balance = CustomerData[i].balance + companyAmount;

                            /** update customer share after sell the share*/
                            CustomerData[i].share = CustomerData[i].share - NoOfShare;
                            
                            console.log("company buy " + NoOfShare + " and company have to pay " + companyAmount)
						
						
					
					 /** take current date as tracsaction time and data */
                          let DATE = new Date();
                             
                            
                               /** add transaction detailS */
                             let transactionData=
                                  {
                                     customerID : ID,
                                     operationWith : CompanyData[i].name,
                                     NoOFshare: NoOfShare,
                                     Amountspend: companyAmount,
                                     DateTime : DATE
                                  }
                             transaction.push(transactionData)
                             fs.writeFileSync('transaction.json',JSON.stringify(transaction))   

					
					
					
					     break;
                        }else{
                            console.log("number of shares exceeds");
                            
                        }
					}
				}
            }
            console.log( CompanyData)
            console.log( CustomerData) 
                fs.writeFileSync('company.json',JSON.stringify(CompanyData))
                fs.writeFileSync('customer.json',JSON.stringify(CustomerData))
                  

        }	
        	
}					
                       

}
module.exports={StockAccount}