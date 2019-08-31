const assert = require('chai').assert;

const deckOfCard=require("../../objectOrientedConcept/DeckOfCards")

describe("test case for dect of cards",function(){

    it("random number not generated",function(){
        assert.equal(deckOfCard,"random number not generated")
    })

    it("result not got",function(){
        assert.equal(deckOfCard,"result not got")
    })

    it("suit should store in array",function(){
        assert.isArray(deckOfCard[0],"suit should store in array")
    })

    it("Rank should store in array",function(){
        assert.isArray(deckOfCard[1],"Rank should store in array")
    })

    it("cards should store in array",function(){
        assert.isArray(deckOfCard[1],"cards should store in array")
    })
})