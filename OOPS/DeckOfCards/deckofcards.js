
let utility=require('../DeckOfCards/classofdeck')
let obj=new utility.Deck;
function deckOFcards() {
   
   //Creating object of Deck class

   let suit= ["Clubs","Diamonds", "Hearts", "Spades"]
   let value =["2","3","4","5","6","7","8","9","10","jack","Qeen","king","ace"]
obj.createDeck(suit,value)
console.log(obj.deck.length)
obj.shuffle()
//Printing distributed cards among four player. 
console.log(obj.distributeCard())



  }
module.exports=deckOFcards()