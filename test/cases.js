var assert = require('chai').assert
var square2= require('../functional/fun').demo
var result = square2()

describe('square function',function(){
    it('square is ',function(){
        assert.equal(result,36)
    })

})