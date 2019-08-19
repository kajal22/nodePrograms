const assert = require('chai').assert
const result= require('../functional/quadratic');

describe("positive testing for harmonic", function () {
  
it("the input must be a number ", function(){
    assert.isNumber(result[0], "Entered inputs should be numbers")
 });
 it("the input should not be string ", function(){
    assert.isNotString(result[0], "Entered inputs should  not be string")
});
    it("the number should not equla to zero ", function(){
        assert.isAbove(result[1] && result[2] ,1, "the number should not equla to zero")

 });
})