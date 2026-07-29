// ==========================================
// LOLA'S BLOCK PUZZLE
// CLEAR.JS
// Line Clearing System
// ==========================================


let combo = 0;


// ==========================================
// CHECK ALL LINES
// ==========================================

function checkLines(){


    let clearedLines = 0;


    const rows = checkRows();

    const cols = checkColumns();



    rows.forEach(row=>{

        clearRow(row);

        clearedLines++;

    });



    cols.forEach(col=>{

        clearColumn(col);

        clearedLines++;

    });



    if(clearedLines > 0){

        handleClearScore(clearedLines);

        combo++;

        animateClear();

        lineClearEffect();

        playSound("clear");

        showCombo(combo);


        if(combo > 1){

            playSound("combo");

        }

    }else{


        combo = 0;


    }



    drawBoard();


}



// ==========================================
// CHECK COMPLETE ROWS
// ==========================================

function checkRows(){


    let completed=[];


    for(let row=0; row<BOARD_SIZE; row++){


        let full=true;


        for(let col=0; col<BOARD_SIZE; col++){


            if(board[row][col]===0){

                full=false;

                break;

            }


        }



        if(full){

            completed.push(row);

        }


    }



    return completed;

}



// ==========================================
// CHECK COMPLETE COLUMNS
// ==========================================

function checkColumns(){


    let completed=[];



    for(let col=0; col<BOARD_SIZE; col++){


        let full=true;



        for(let row=0; row<BOARD_SIZE; row++){


            if(board[row][col]===0){

                full=false;

                break;

            }


        }



        if(full){

            completed.push(col);

        }


    }



    return completed;

}



// ==========================================
// REMOVE ROW
// ==========================================

function clearRow(row){


    for(let col=0; col<BOARD_SIZE; col++){


        board[row][col]=0;


    }


}



// ==========================================
// REMOVE COLUMN
// ==========================================

function clearColumn(col){


    for(let row=0; row<BOARD_SIZE; row++){


        board[row][col]=0;


    }


}



// ==========================================
// SCORE SYSTEM
// ==========================================

function handleClearScore(lines){


    let points=0;



    switch(lines){


        case 1:

            points=100;

            break;


        case 2:

            points=250;

            break;


        case 3:

            points=500;

            break;


        default:

            points=1000;

    }



    // Combo Bonus

    if(combo>1){

        points += combo * 100;

    }



    addScore(points);


}



// ==========================================
// CLEAR ANIMATION
// ==========================================

function animateClear(){


    const cells =
    document.querySelectorAll(".cell");



    cells.forEach(cell=>{


        if(cell.classList.contains("filled")){


            cell.classList.add("clear-animation");



            setTimeout(()=>{


                cell.classList.remove(
                    "clear-animation"
                );


            },300);



        }


    });



}