let input = require('readline-sync')
let fs = require('fs')


class address {

        AddPersonData(object) {
                let format = /^[a-zA-Z]+$/;
                let formatNum =/^\d{10,10}$/; ;

              try  {       
                       

                        console.log("\t 1.enter FirstName")
                        let firstname = input.question()
                        if (format.test(firstname) == false) throw "firstname should in string format";

                      
                        console.log("\t 2.enter LastName")
                        let Lastname = input.question()
                        if (format.test(Lastname) == false) throw "lastname should in string format";
                       
                        
                        console.log("\t Enter Address")
                        let address = input.question()
                        if (format.test(address) == false) throw "address should in string format";

                        
                        console.log("\t Enter City")
                        let city = input.question()
                        if (format.test(city) == false) throw "city should in string format";

                        
                        console.log("\t Enter State")
                        let state = input.question()
                        if (format.test(state) == false) throw "state should in string format";
  
                        console.log("\t Enter Zip")
                        let Zip = input.questionInt()
                        if (formatNum.test(Zip) == false) throw "zip should in number format";
                        
                        console.log("\t Enter Phone number")
                        let phonenumber = input.questionInt()
                        if (formatNum.test(phonenumber) == false) throw "phonenumber should in number format";
                        object.push(
                                {
                                        "firstname": firstname,
                                        "lastname": Lastname,
                                        "address": address,
                                        "city": city,
                                        "state": state,
                                        "zip": Zip,
                                        "phonenumber": phonenumber

                                });
                                this.saveFile(object)
                }catch(e)
                { return e;
                }
                        let Zip = input.questionInt()
                return [firstname,Lastname,address,city,state,Zip,phonenumber]
                   
        }
        EditPersonData(object) {
                let value = -1
                console.log("enter your name")
                let firstname = input.question()

                console.log("enter your phone number")
                let phonenumber = input.questionInt()
                for (let k = 0; k < object.length; k++) {
                        if (object[k].firstname == firstname && object[k].phonenumber == phonenumber) {
                                value = k
                        }
                }
                if (value == -1) {
                        console.log("not found")
                        return value
                }

                this.show(object, value)
                console.log("which one you want to edit ");
                console.log("\t 1. FIRSTNAME\n\t 2. LASTNAME\n\t 3. ADDRESS\n\t 4. PHONENUMBER");
                let choice = input.questionInt()
                switch (choice) {
                        case 1:
                                object[value].firstname = input.question()
                                break;

                        case 2:
                                object[value].lastname = input.question()
                                break;
                        case 3:

                                object[value].address = input.question()
                                break;
                        case 4:

                                object[value].phonenumber = input.question()
                                break;
                               }
                this.saveFile(object);
        }
        

        show(object, value) {
             
                console.log("FirstName : " + object[value].firstname);
                console.log("LastName : " + object[value].lastname);
                console.log("Address : " + object[value].address);
                console.log("Mobile No : " + object[value].phonenumber);
                          }

   
                          


              
        DeletePersonData(object) {  
                        let value = -1
                        console.log("enter your name")
                        let firstname = input.question()
        
                        console.log("enter your phone number")
                        let phonenumber = input.questionInt()
                        for (let k = 0; k < object.length; k++) {
                                if (object[k].firstname == firstname && object[k].phonenumber == phonenumber) {
                                        value = k
                                }
                        }
                        if (value == -1){
                                console.log("not found")
                                return value
                        }             
                        console.log("are you sure to delete file if yes press 1 otherwise 0");
                        let choice=input.questionInt();
                
                        switch(choice)
                        {
                            case 1:/**splice its array method that delete element from array  */
                                object.splice(value,1);
                                console.log("your data is deleted");
                                break;
                
                            case 2:
                                console.log("your data is not deleted");
                                break;
                            
                            default:
                                console.log("wrong choice");
                                break;
                        }                                   
        }






        SortByLastName(object) 
                {
                        for(let i=0;i<object.length;i++)
                        {
                            for(let j=0;j<object.length-1;j++)
                            {   
                                if(object[j].lastname >object[j+1].lastname)
                                {   
                                    let temp=object[j];
                                    object[j]=object[j+1];
                                    object[j+1]=temp;
                                }
                            }
                 
                      }
                      console.log(object)
        }


        SortByZipCode(object) {
                for(let i=0;i<object.length;i++)
                        {
                            for(let j=0;j<object.length-1;j++)
                            {   
                                if(object[j].zip >object[j+1].zip)
                                {   
                                    let temp=object[j];
                                    object[j]=object[j+1];
                                    object[j+1]=temp;
                                }
                            }
                
                        }
                        console.log(object)
                    }

       display(object)
       {
               for(let i=0;i<object.length;i++)
               {
                console.log("FirstName : " + object[i].firstname);
                console.log("LastName : " + object[i].lastname);
                console.log("Address : " + object[i].address);
                console.log("Mobile No : " + object[i].phonenumber);       
               }
       }
      

        

        saveFile(object) {
                try {

                        fs.writeFileSync('address.json', JSON.stringify(object))
                        console.log("All updated data are saved");
                } catch (e) {
                        return e;
                }
        }

}
module.exports = { address }










