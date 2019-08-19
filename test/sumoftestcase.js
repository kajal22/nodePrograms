const assert = require('chai').assert
const result= require('../functional/SumOfThreeInteger')

describe("Positive testing for ", function () {


    it("output should be an array", function () {
        assert.isArray( result[1], "output should be an array")
     
      });
      it("should not be string", function () {
        assert.isNotString( result[0] && result[1], "should not be string")
     
      });
    })