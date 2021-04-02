const Gameboard = ( ()=>{
     let array = ["","","","","","","","",""];   
    return {array}
})();

const gameController= ( ()=>{
    const checkState= ()=>{
        if ( (Gameboard.array[0]===playerOne.sign ) && (Gameboard.array[1]===playerOne.sign) && (Gameboard.array[2]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        }
         else if ((Gameboard.array[3]===playerOne.sign ) && (Gameboard.array[4]===playerOne.sign) && (Gameboard.array[5]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        }
        else if ((Gameboard.array[6]===playerOne.sign ) && (Gameboard.array[7]===playerOne.sign) && (Gameboard.array[8]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        } 
        else if ((Gameboard.array[2]===playerOne.sign ) && (Gameboard.array[4]===playerOne.sign) && (Gameboard.array[6]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        } 
        else if ((Gameboard.array[0]===playerOne.sign ) && (Gameboard.array[4]===playerOne.sign) && (Gameboard.array[8]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        } 
        else if ((Gameboard.array[0]===playerOne.sign ) && (Gameboard.array[3]===playerOne.sign) && (Gameboard.array[6]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        }
        else if ((Gameboard.array[1]===playerOne.sign ) && (Gameboard.array[4]===playerOne.sign) && (Gameboard.array[7]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        }
        else if ((Gameboard.array[2]===playerOne.sign ) && (Gameboard.array[5]===playerOne.sign) && (Gameboard.array[8]===playerOne.sign)){
            displayControler.result.textContent=playerOne.name+" has won!"
        }


        /////////////////////////////////////////////////////// chekcing if playerTwo won;


        else if ((Gameboard.array[3]===playerTwo.sign ) && (Gameboard.array[4]===playerTwo.sign) && (Gameboard.array[5]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        }
        else if ((Gameboard.array[6]===playerTwo.sign ) && (Gameboard.array[7]===playerTwo.sign) && (Gameboard.array[8]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        } 
        else if ((Gameboard.array[2]===playerTwo.sign ) && (Gameboard.array[4]===playerTwo.sign) && (Gameboard.array[6]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        } 
        else if ((Gameboard.array[0]===playerTwo.sign ) && (Gameboard.array[4]===playerTwo.sign) && (Gameboard.array[8]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        } 
        else if ((Gameboard.array[0]===playerTwo.sign ) && (Gameboard.array[3]===playerTwo.sign) && (Gameboard.array[6]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        }
        else if ((Gameboard.array[1]===playerTwo.sign ) && (Gameboard.array[4]===playerTwo.sign) && (Gameboard.array[7]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        }
        else if ((Gameboard.array[2]===playerTwo.sign ) && (Gameboard.array[5]===playerTwo.sign) && (Gameboard.array[8]===playerTwo.sign)){
            displayControler.result.textContent=playerTwo.name+" has won!"
        }
        /////////////////////////////////////////////////////////// Checking if its a Tie
        else if ( Gameboard.array.every(square => ( square === playerTwo.sign || square===playerOne.sign ) ) ){
            displayControler.result.textContent="its a tie!"
        }       
    };
    const resetButton = document.querySelector("#reset");
        const _resetGame = (e)=> {
        Gameboard.array=["","","","","","","","",""];
       displayControler.squares.forEach(square=>square.textContent=" ")
       displayControler.whoTurn.textContent="";

    };
    resetButton.addEventListener("click",e=>_resetGame(e));

    return {checkState}
})();

const displayControler = (()=>{
    const grid = document.querySelector("#gameBoard");
    const squares = Array.from(grid.querySelectorAll(".square"));
    const whoTurn= document.querySelector("#turn");
    const result = document.querySelector("#result")
    grid.addEventListener("click",e=>{
        if(e.target!==e.currentTarget){
            result.textContent="";
            displayTurn();
            const selectedSquare=document.querySelector("#"+`${e.target.id}`);
        if(selectedSquare.textContent===" " && playerOne.turn===true){ 
            selectedSquare.textContent=playerOne.sign;
            Gameboard.array.splice(selectedSquare.classList[1]-1,1,selectedSquare.textContent);
            playerOne.turn = false ;
            playerTwo.turn = true }
        if(selectedSquare.textContent===" " && playerTwo.turn===true){ 
             selectedSquare.textContent=playerTwo.sign;
             Gameboard.array.splice(selectedSquare.classList[1]-1,1,selectedSquare.textContent)
             playerOne.turn = true ;
             playerTwo.turn = false ;
             }
             gameController.checkState();   
       };
     });

     const displayTurn= ()=>{
         if(playerOne.turn===true){
             whoTurn.textContent=playerTwo.name+"'s turn";
         }
         else {
             whoTurn.textContent=playerOne.name+"'s turn"}
     }



     return {squares,whoTurn,result}
}) ();


const playerFactory = (name,sign,turn) => { 
    const win = ()=>{ return name +" won"};
    return{name,sign,turn,win}
}

const playerOne = playerFactory("PlayerOne","X",true);
const playerTwo = playerFactory("PlayerTwo","O",false);
