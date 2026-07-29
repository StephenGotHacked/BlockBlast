// ==========================================
// LOLA'S BLOCK PUZZLE
// SCORE.JS
// Score Management
// ==========================================


let currentScore = 0;



// ==========================================
// ADD SCORE
// ==========================================

function addScore(points){


    currentScore += points;


    updateScore();


    if(typeof showFloatingScore === "function"){

        const scoreBox =
        document.getElementById("score");


        if(scoreBox){

            const rect =
            scoreBox.getBoundingClientRect();


            showFloatingScore(
                points,
                rect.left,
                rect.top
            );

        }

    }

}



// ==========================================
// GET SCORE
// ==========================================

function getScore(){

    return currentScore;

}



// ==========================================
// RESET SCORE
// ==========================================

function resetScore(){

    currentScore = 0;

    updateScore();

}



// ==========================================
// UPDATE SCORE DISPLAY
// ==========================================

function updateScore(){


    const scoreElement =
    document.getElementById("score");



    if(scoreElement){

        scoreElement.textContent =
        currentScore;

    }


}



// ==========================================
// BONUS SCORE
// ==========================================

function addLineScore(lines){


    let points = 0;


    switch(lines){


        case 1:

            points = 100;

            break;


        case 2:

            points = 250;

            break;


        case 3:

            points = 500;

            break;


        default:

            points = 1000;


    }



    addScore(points);


}