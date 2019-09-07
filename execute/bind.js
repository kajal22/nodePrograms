var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 


//console.dir(bound); ///returns a function

//Output using .bind() below 

console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
