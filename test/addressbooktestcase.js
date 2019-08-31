const assert = require('chai').assert;
/** require address book class */
const result = require('../../kajal/OOPS/AddressBook/Manages');

const fs=require("fs");

describe(" positive test cases are ", function () {   /** calling method */
    
 

    it("firstname should in string format", function () {
        assert.isString(result[1], "firstname should in string format")
    });
    
        it("lastname should in string format", function () {
            assert.isString(result[2], "lastname should in string format")
        });
       
    
            it("address should in string format", function () {
                assert.isString(result[3], "address should in string format")
            });
      
    
             it("city should in string format", function () {
        assert.isString(result[4], "city should in string format")
    });

  
        it("state should in string format", function () {
            assert.isString(result[5], "state should in string format")
        });
      
    
            it("zip should in number format", function () {
                assert.isNumber(result[6], "zip should in number format")
            });
            it("phonenumber should in number format", function () {
                assert.isNumber(result[6], "phonenumber should in number format")
            });
        })               
        describe(" negative test cases are ", function () {   /** calling method */
    
 

            it("firstname should in string format", function () {
                assert.equal(result[1], "firstname should in string format")
            });
            
                it("lastname should in string format", function () {
                    assert.equal(result[2], "lastname should in string format")
                });
               
            
                    it("address should in string format", function () {
                        assert.equal(result[3], "address should in string format")
                    });
              
            
                     it("city should in string format", function () {
                assert.equal(result[4], "city should in string format")
            });
        
          
                it("state should in string format", function () {
                    assert.equal(result[5], "state should in string format")
                });
              
            
                    it("zip should in number format", function () {
                        assert.equal(result[6], "zip should in number format")
                    });
                    it("phonenumber should in number format", function () {
                        assert.equal(result[6], "phonenumber should in number format")
                    });
                }) 