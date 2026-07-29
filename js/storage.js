// ==========================================
// LOLA'S BLOCK PUZZLE
// STORAGE.JS
// Local Storage Manager
// ==========================================


const STORAGE_KEYS = {

    HIGH_SCORE: "lolaBlockPuzzleHighScore",

    LAST_SCORE: "lolaBlockPuzzleLastScore"

};



// ==========================================
// SAVE HIGH SCORE
// ==========================================

function saveHighScore(score){


    const currentHigh =
    getHighScore();



    if(score > currentHigh){


        localStorage.setItem(

            STORAGE_KEYS.HIGH_SCORE,

            score

        );


    }


}



// ==========================================
// GET HIGH SCORE
// ==========================================

function getHighScore(){


    return Number(

        localStorage.getItem(
            STORAGE_KEYS.HIGH_SCORE
        )

    ) || 0;


}



// ==========================================
// SAVE LAST SCORE
// ==========================================

function saveLastScore(score){


    localStorage.setItem(

        STORAGE_KEYS.LAST_SCORE,

        score

    );


}



// ==========================================
// GET LAST SCORE
// ==========================================

function getLastScore(){


    return Number(

        localStorage.getItem(
            STORAGE_KEYS.LAST_SCORE
        )

    ) || 0;


}



// ==========================================
// LOAD PLAYER DATA
// ==========================================

function loadPlayerData(){


    const highScore =
    getHighScore();



    const scoreElement =
    document.getElementById(
        "highScore"
    );



    if(scoreElement){


        scoreElement.textContent =
        highScore;


    }



    return {

        highScore: highScore

    };


}



// ==========================================
// CLEAR DATA
// ==========================================

function clearGameData(){


    localStorage.removeItem(

        STORAGE_KEYS.HIGH_SCORE

    );


    localStorage.removeItem(

        STORAGE_KEYS.LAST_SCORE

    );


    console.log(
        "Game data cleared"
    );


}