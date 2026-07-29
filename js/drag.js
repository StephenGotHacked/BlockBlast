// ==========================================
// LOLA'S BLOCK PUZZLE
// DRAG.JS
// Mouse + Touch Support
// ==========================================


let draggedPiece = null;

let draggedIndex = null;

let dragClone = null;

let currentRow = 0;

let currentCol = 0;



// ==========================================
// INITIALIZE DRAG
// ==========================================

function initializeDrag(){

    document
    .querySelectorAll(".piece-slot")
    .forEach(slot=>{


        slot.addEventListener(
            "pointerdown",
            startDrag
        );


    });

}



// ==========================================
// START DRAG
// ==========================================

function startDrag(event){


    const index =
    Number(event.currentTarget.dataset.index);


    const shape =
    getPiece(index);


    if(!shape) return;


    draggedPiece = shape;

    draggedIndex = index;


    createDragClone(
        event,
        shape
    );


    event.currentTarget.setPointerCapture(
        event.pointerId
    );


}



// ==========================================
// CREATE FLOATING BLOCK
// ==========================================

function createDragClone(event,shape){


    dragClone = document.createElement("div");

    dragClone.className = "drag-clone";

    dragClone.style.display = "grid";

    // Get the actual board cell size
    const firstCell = document.querySelector(".cell");

    const cellSize = firstCell
        ? firstCell.offsetWidth
        : 30; // fallback if board isn't ready

    dragClone.style.gridTemplateColumns =
    `repeat(${shape[0].length}, ${cellSize}px)`;

    dragClone.style.gridTemplateRows =
    `repeat(${shape.length}, ${cellSize}px)`;

    dragClone.style.gap = "4px";

    dragClone.style.position = "fixed";

    dragClone.style.pointerEvents = "none";

    dragClone.style.zIndex = "9999";


    shape.forEach(row => {

    row.forEach(value => {

        const block = document.createElement("div");

        block.className = "block";
        block.style.width = `${cellSize}px`;
    block.style.height = `${cellSize}px`;

        if(!value){

            block.style.opacity = "0";

        }

        dragClone.appendChild(block);

    });

});



    document.body.appendChild(
        dragClone
    );


    moveClone(
        event.clientX,
        event.clientY
    );


    dragClone.style.display="grid";

}



// ==========================================
// MOVE DRAG
// ==========================================

document.addEventListener(
"pointermove",
(event)=>{


    if(!draggedPiece)
        return;



    moveClone(
        event.clientX,
        event.clientY
    );



    const position = getBoardPosition(
        event.clientX,
        event.clientY - 60
    );


    if(position){


        currentRow =
        position.row;


        currentCol =
        position.col;



        previewShape(
            draggedPiece,
            currentRow,
            currentCol
        );


    }


});



// ==========================================
// MOVE CLONE
// ==========================================

function moveClone(x,y){


    if(!dragClone)
        return;


    dragClone.style.left =
    `${x}px`;


    dragClone.style.top =
    `${y}px`;

}



// ==========================================
// DROP
// ==========================================

document.addEventListener(
"pointerup",
(event)=>{


    if(!draggedPiece)
        return;



    clearPreview();

    if(dragClone){

        dragClone.remove();

        dragClone=null;

    }



    const success =
    placeShape(
        draggedPiece,
        currentRow,
        currentCol
    );



    if(success){

        pieceUsed(
            draggedIndex
        );

        addScore(
            countBlocks(draggedPiece) * 10
        );

        checkLines();

        // Check if there are still valid moves
        if(!playerHasMoves()){

            showGameOver();

        }

    }



    draggedPiece=null;

    draggedIndex=null;


});



// ==========================================
// FIND BOARD POSITION
// ==========================================

function getBoardPosition(x,y){


    const cell =
    document
    .elementFromPoint(x,y);



    if(
        !cell ||
        !cell.classList.contains("cell")
    ){

        return null;

    }



    return {

        row:Number(cell.dataset.row),

        col:Number(cell.dataset.col)

    };


}



// ==========================================
// REMOVE CLONE
// ==========================================

function removeDragClone(){


    if(dragClone){

        dragClone.remove();

        dragClone=null;

    }


}



// ==========================================
// COUNT BLOCKS
// ==========================================

function countBlocks(shape){


    let total=0;


    shape.forEach(row=>{


        row.forEach(value=>{


            if(value)
                total++;


        });


    });


    return total;

}



// START
initializeDrag();
