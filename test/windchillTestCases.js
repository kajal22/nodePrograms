const assert = require('chai').assert;
const result = require('../functional/windchill');


describe("Positive testing for WindChill", function () {


  it("Entered inputs are numbers", function () {
      assert.isNumber(result[0] && result[1], "Entered inputs should be numbers")
  });
  

  it("Entered inputs are not string", function () {
      assert.isNotString(result[0] && result[1], "Entered inputs are not strings")
  });
  

  it("Temperature must be less than 50 ", function () {
      assert.isBelow(result[0], 50, "Temperature must be less than 50 ")
  })
 

  it("Wind must be greater than 3", function () {
      assert.isAbove(result[1], 3, "Wind must be greater than 3")
  })
  it("Wind must be less than 120", function () {
      assert.isBelow(result[1], 120, "Wind must be less than 120")
  })
  

  it("Generated output must be a number", function () {
      assert.isNumber(result[2], "Output should be a number")
  });
  
  

  it("Generated output must be not be null", function () {
      assert.isNotNull(result[2], 'Generated output must be not be null');
  });
   

})


