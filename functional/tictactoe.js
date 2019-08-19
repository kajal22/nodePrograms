function TicTacToe()
{
   
var Input=require('readline-sync');
var Utility = require('../kajal/utility')
var player1='X',player2='O',play=1,win
var matrix =[['1','2','3'],
           ['4','5','6'],
           ['7','8','9']]
console.log(matrix[0][0], "|", matrix[0][1],  "|" , matrix [0][2] ) 
console.log(matrix[1][0], "|" ,matrix[1][1],  "|", matrix[1][2] ) 
console.log(matrix[2][0], "|" ,matrix[2][1] , "|",matrix[2][2] ) 

for(var i=0;i<9;i++)
{
    var pos=0
console.log(matrix)
if(play==1)
{
console.log("enter player1 position") 
pos=Input.question()
Utility.display(matrix,pos,player1)
play=2
}
else
{
console.log("enter player2 position")
pos=Input.question()
Utility.display(matrix,pos,player2)
play=1
}

Utility.display(matrix)
win=Utility.checkwin(matrix)
console.log(win)


if(win!=' ')
{
    if(win=='X')
    {
        console.log(" player1 win ")
        break;
    }
    else if(win=='O')
    {
        console.log(" player2 win ")
         break;
    }
        
         }
    }
}



module.exports=TicTacToe()

