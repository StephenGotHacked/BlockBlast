// ==========================================
// LOLA'S BLOCK PUZZLE
// SCRIPT.JS
// Main Initializer
// ==========================================


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        console.log(
            "🌸 Lola's Block Puzzle Loaded"
        );


        initializeGame();


    }
);



// ==========================================
// INITIALIZE GAME
// ==========================================

function initializeGame(){

    loadPlayerData();

    resetBoard();

    updateScore();

    console.log(
        "🎮 Waiting for player..."
    );

}
