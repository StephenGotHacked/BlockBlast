// ==========================================
// LOLA'S BLOCK PUZZLE
// PLACEMENT.JS
// ==========================================

/* ==========================================
   CHECK IF SHAPE CAN BE PLACED
========================================== */

function canPlaceShape(shape, startRow, startCol){

    for(let r = 0; r < shape.length; r++){

        for(let c = 0; c < shape[r].length; c++){

            if(shape[r][c] === 0) continue;

            const boardRow = startRow + r;
            const boardCol = startCol + c;

            // Outside board
            if(
                boardRow < 0 ||
                boardRow >= BOARD_SIZE ||
                boardCol < 0 ||
                boardCol >= BOARD_SIZE
            ){
                return false;
            }

            // Cell already occupied
            if(board[boardRow][boardCol] === 1){
                return false;
            }

        }

    }

    return true;

}

/* ==========================================
   PLACE SHAPE
========================================== */

function placeShape(shape,startRow,startCol){

    if(!canPlaceShape(shape,startRow,startCol)){
        return false;
    }

    for(let r=0;r<shape.length;r++){

        for(let c=0;c<shape[r].length;c++){

            if(shape[r][c]){

                board[startRow+r][startCol+c]=1;

            }

        }

    }

    drawBoard();

    return true;

}

/* ==========================================
   REMOVE PREVIEW COLORS
========================================== */

function clearPreview(){

    document
    .querySelectorAll(".cell")
    .forEach(cell=>{

        cell.classList.remove("valid");
        cell.classList.remove("invalid");

    });

}

/* ==========================================
   SHOW PREVIEW
========================================== */

function previewShape(shape,startRow,startCol){

    clearPreview();

    const valid =
        canPlaceShape(shape,startRow,startCol);

    for(let r=0;r<shape.length;r++){

        for(let c=0;c<shape[r].length;c++){

            if(shape[r][c]===0) continue;

            const row=startRow+r;
            const col=startCol+c;

            const cell=document.querySelector(
                `.cell[data-row="${row}"][data-col="${col}"]`
            );

            if(!cell) continue;

            if(valid){

                cell.classList.add("valid");

            }else{

                cell.classList.add("invalid");

            }

        }

    }

}

/* ==========================================
   CHECK ANY POSSIBLE POSITION
========================================== */

function hasPossibleMove(shape){

    for(let row=0;row<BOARD_SIZE;row++){

        for(let col=0;col<BOARD_SIZE;col++){

            if(canPlaceShape(shape,row,col)){

                return true;

            }

        }

    }

    return false;

}

/* ==========================================
   CHECK IF PLAYER STILL HAS MOVES
========================================== */

function playerHasMoves(){

    for(let i=0;i<currentPieces.length;i++){

        const piece=currentPieces[i];

        if(piece===null) continue;

        if(hasPossibleMove(piece)){

            return true;

        }

    }

    return false;

}