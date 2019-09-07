class Animal{  
    eat()
    {console.log("eating...");}  
    }  
    class Dog extends Animal{  
    bark()
    {console.log("barking...");}  
    }  
    class Cat extends Animal{  
    meow()
    {console.log("meowing...");}  
    }  
 

    var c=new Cat();  
    c.meow();  
    c.eat();  