// ==========================================
// LOLA'S BLOCK PUZZLE
// GAME MANAGER
// ==========================================

const Game = {

    started: false,

    score: 0,

    highScore: 0,

    piecesRemaining: 3,

    gameOver: false

};

/* ==========================================
   START GAME
========================================== */
function startGame(){

    Game.started = true;

    Game.gameOver = false;

    Game.piecesRemaining = 3;

    resetScore();

    resetBoard();

    generatePieces();

    loadPlayerData();

    startMusic();

}

/* ==========================================
   PIECE USED
========================================== */

function pieceUsed(index){

    removePiece(index);

    Game.piecesRemaining--;

    if(Game.piecesRemaining <= 0){

        generatePieces();

        Game.piecesRemaining = 3;

    }

}

/* ==========================================
   GAME OVER
========================================== */

function endGame(){

    Game.gameOver = true;


    saveLastScore(
        getScore()
    );

    saveHighScore(
        getScore()
    );


    alert(
            `🌸 Game Over!

            Score : ${getScore()}

            🏆 Best : ${getHighScore()}

            Good Job Lola ❤️`
            );


}

/* ==========================================
   RESET
========================================== */

function restartGame(){

    resetScore();

    resetBoard();

    generatePieces();

    Game.gameOver = false;

    Game.piecesRemaining = 3;

}

/* ==========================================
   CHECK GAME OVER
========================================== */

function checkGameOver(){

    /*
        NEXT VERSION

        Dito ichecheck kung
        may pwede pang ilagay
        na kahit isang piece.

    */

    return false;

}

/* ==========================================
   WELCOME POPUP
========================================== */

const playButton =
document.getElementById("playBtn");

playButton.addEventListener("click",()=>{

    document
    .getElementById("welcomePopup")
    .style.display="none";

    startGame();

});

function showGameOver(){

    Game.gameOver = true;

    document.getElementById("finalScore").textContent =
    getScore();

    document
    .getElementById("gameOverModal")
    .classList.remove("hidden");

}

document
.getElementById("restartBtn")
.addEventListener("click", () => {

    document
        .getElementById("gameOverModal")
        .classList.add("hidden");

    restartGame();

});
