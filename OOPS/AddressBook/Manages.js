//console.log(__filename)
let input=require('readline-sync')
let Utility=require('../AddressBook/address')
let fs=require('fs')
let data=fs.readFileSync("/home/admin1/Desktop/kajal/OOPS/AddressBook/address.json")
let object=JSON.parse(data)
function manage()
{
    let choice,name
let addressBook=new Utility.address;
let firstname,LastName,address,city,state,Zip,phonenumber;
do{
console.log("\n \t 1.Add Person Data "+"\n \t 2.edit person Data "+"\n \t 3.delete person Data"+"\n\t 4.Sort By LastName of Person Data"+"\n \t 5. Sort By ZipCode"+"\n \t 6.Display all records"+"\n\t Save all files")
console.log("Enter Your Choice")
choice=input.questionInt()

switch(choice)
{    
                 
    case 1 :
             
            addPerson=addressBook.AddPersonData(object) 
            firstname=addPerson[0]
            LastName=addPerson[1]
            address=addPerson[2]
            city=   addPerson[3]
            state=  addPerson[4]
            Zip=    addPerson[5]
            phonenumber=addPerson[6]
            console.log("\t added Person Data sucessfully ")
            break;
    
    case 2 : result= addressBook.EditPersonData(object)
    console.log("\t edited Person Data sucessfully")
            if(result==-1)
            console.log("not updated data")
            else
            console.log("updated data")
            break;
            
    case 3 :addressBook.DeletePersonData(object)  
           console.log("\t Deleted Person Data sucessfully")
          
            break;
            
    case 4 : addressBook.SortByLastName(object)  
          console.log("\t Sorted By LastName of Person Data sucessfully")
           
            break;

    case 5 : addressBook.SortByZipCode(object) 
          console.log("\t Sorted By ZipCode sucessfully")
          
            break;
            
    case 6 : addressBook.display(object)
            console.log("\t Displayed All records")
           
            break;

    case 7 : addressBook.saveFile(object) 
            console.log("\t File Saved ")
           
            break;

   default : 
           console.log(" wrong choice")/** when user enter wrong choice */
            break;       
        }
        console.log("\nDo you want continue press 1 else 0");
         choice=input.questionInt();
           
}while(choice==1)



fs.writeFileSync('address.json',JSON.stringify(object))

return [addPerson,firstname,LastName,address,city,state,Zip,phonenumber]
}
module.exports=manage()

