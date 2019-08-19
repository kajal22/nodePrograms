const assert = require('chai').assert;
const result = require('../functional/Distance');


describe("Positive testing for distance", function () {


  it("Entered inputs are numbers", function () {
      assert.isNumber(result[0] && result[1], "Entered inputs should be numbers")
  });
  it("Entered inputs are not string", function () {
    assert.isNotString(result[0] && result[1], "Entered inputs are not strings")
});
it("Generated output must be not be null", function () {
    assert.isNotNull(result[2], 'Generated output must be not be null');
});
 

})