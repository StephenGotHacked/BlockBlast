// =======================================
// LOLA'S BLOCK PUZZLE
// BOARD.JS
// =======================================

const BOARD_SIZE = 8;

// 2D Array
let board = [];

// HTML Board
const boardElement = document.getElementById("board");

/* =======================================
   CREATE BOARD ARRAY
======================================= */

function createBoardArray() {

    board = [];

    for (let row = 0; row < BOARD_SIZE; row++) {

        board[row] = [];

        for (let col = 0; col < BOARD_SIZE; col++) {

            board[row][col] = 0;

        }

    }

}

/* =======================================
   DRAW BOARD
======================================= */

function drawBoard() {

    boardElement.innerHTML = "";

    for (let row = 0; row < BOARD_SIZE; row++) {

        for (let col = 0; col < BOARD_SIZE; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.dataset.row = row;
            cell.dataset.col = col;

            if (board[row][col] === 1) {

                cell.classList.add("filled");

            }

            boardElement.appendChild(cell);

        }

    }

}

/* =======================================
   UPDATE ONE CELL
======================================= */

function updateCell(row, col) {

    const cell = document.querySelector(
        `.cell[data-row="${row}"][data-col="${col}"]`
    );

    if (!cell) return;

    cell.classList.toggle("filled", board[row][col] === 1);

}

/* =======================================
   RESET BOARD
======================================= */

function resetBoard() {

    createBoardArray();

    drawBoard();

}

/* =======================================
   CHECK IF CELL IS EMPTY
======================================= */

function isCellEmpty(row, col) {

    if (
        row < 0 ||
        row >= BOARD_SIZE ||
        col < 0 ||
        col >= BOARD_SIZE
    ) {

        return false;

    }

    return board[row][col] === 0;

}

/* =======================================
   PLACE SINGLE BLOCK
======================================= */

function placeBlock(row, col) {

    if (!isCellEmpty(row, col)) return false;

    board[row][col] = 1;

    updateCell(row, col);

    return true;

}

/* =======================================
   REMOVE SINGLE BLOCK
======================================= */

function removeBlock(row, col) {

    if (
        row < 0 ||
        row >= BOARD_SIZE ||
        col < 0 ||
        col >= BOARD_SIZE
    ) {

        return;

    }

    board[row][col] = 0;

    updateCell(row, col);

}

/* =======================================
   DEBUG
======================================= */

function printBoard() {

    console.table(board);

}

/* =======================================
   INITIALIZE
======================================= */

createBoardArray();

drawBoard();