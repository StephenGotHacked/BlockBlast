// ======================================
// LOLA'S BLOCK PUZZLE
// BLOCKS.JS
// ======================================

// Available Shapes
const SHAPES = [

    // Single
    [[1]],

    // Line
    [[1,1]],
    [[1],[1]],

    [[1,1,1]],
    [[1],[1],[1]],

    [[1,1,1,1]],
    [[1],[1],[1],[1]],

    // Square
    [
        [1,1],
        [1,1]
    ],

    // L
    [
        [1,0],
        [1,0],
        [1,1]
    ],

    [
        [0,1],
        [0,1],
        [1,1]
    ],

    [
        [1,1],
        [1,0],
        [1,0]
    ],

    [
        [1,1],
        [0,1],
        [0,1]
    ],

    // T
    [
        [1,1,1],
        [0,1,0]
    ],

    [
        [0,1,0],
        [1,1,1]
    ],

    // Zigzag
    [
        [1,1,0],
        [0,1,1]
    ],

    [
        [0,1,1],
        [1,1,0]
    ]

];

// Current Pieces
let currentPieces = [];

// ======================================
// RANDOM SHAPE
// ======================================

function randomShape(){

    const index = Math.floor(Math.random()*SHAPES.length);

    return JSON.parse(JSON.stringify(SHAPES[index]));

}

// ======================================
// GENERATE 3 PIECES
// ======================================

function generatePieces(){

    currentPieces=[];

    for(let i=0;i<3;i++){

        currentPieces.push(randomShape());

    }

    renderPieces();

}

// ======================================
// RENDER PIECES
// ======================================

function renderPieces(){

    currentPieces.forEach((shape,index)=>{

        const slot=document.getElementById(`piece${index+1}`);

        slot.innerHTML="";

        slot.dataset.index=index;

        slot.classList.add("piece");

        const wrapper=document.createElement("div");

        wrapper.className="piece-grid";

        wrapper.style.display="grid";

        wrapper.style.gridTemplateColumns=
        `repeat(${shape[0].length},30px)`;

        wrapper.style.gap="4px";

        shape.forEach(row=>{

            row.forEach(value=>{

                const block=document.createElement("div");

                if(value){

                    block.className="block";

                }else{

                    block.style.width="28px";
                    block.style.height="28px";
                    block.style.visibility="hidden";

                }

                wrapper.appendChild(block);

            });

        });

        slot.appendChild(wrapper);

    });

}

// ======================================
// REMOVE USED PIECE
// ======================================

function removePiece(index){

    currentPieces[index]=null;

    const slot=document.getElementById(`piece${index+1}`);

    slot.innerHTML="";

    // Check if all pieces are used
    if(currentPieces.every(piece=>piece===null)){

        generatePieces();

    }

}

// ======================================
// GET SHAPE
// ======================================

function getPiece(index){

    return currentPieces[index];

}

// ======================================
// START
// ======================================

