// Junior Project - Chess
// Cayden Dysome

// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    // Get references to key UI elements
    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const home = document.getElementById("Home");
    const resetBtn = document.getElementById("resetBtn");
    const backBtn = document.getElementById("backBtn");

    // Initialize game intro screen
    if (startBtn && intro && home) {
        intro.classList.add("visible"); // Show intro screen on load

        // Open game when "start game" is clicked
        startBtn.addEventListener("click", () => {
            intro.classList.add("hidden"); // Hide intro
            home.style.display = "block"; // Show game board
            createBoard(); // Initialize chess board
            setCurrentPlayer("White"); // Set first player
        });
    }  
});

document.addEventListener("DOMContentLoaded", () => {
    // Get references to key UI elements
    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const home = document.getElementById("Home");
    const resetBtn = document.getElementById("resetBtn");
    const backBtn = document.getElementById("backBtn");

    // Initialize game intro screen
    if (startBtn && intro && home) {
        intro.classList.add("visible"); // Show intro screen on load

        // Open game when "start game" is clicked
        startBtn.addEventListener("click", () => {
            intro.classList.add("hidden"); // Hide intro
            home.style.display = "block"; // Show game board
            createBoard(); // Initialize chess board
            setCurrentPlayer("White"); // Set first player
        });
    }  
});

// Initial chess board layout (standard starting position)
const STARTING_BOARD = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'], // Black back row
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'], // Black pawns
    ['', '', '', '', '', '', '', ''], // Empty rows
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'], // White pawns
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'], // White back row
];

// Map piece codes to image file paths
const PIECE_IMAGES = {
    'wK': 'images/wK.png', // White King
    'wQ': 'images/wQ.png', // White Queen
    'wR': 'images/wR.png', // White Rook
    'wB': 'images/wB.png', // White Bishop
    'wN': 'images/wN.png', // White Knight
    'wP': 'images/wP.png', // White Pawn
    'bK': 'images/bK.png', // Black King
    'bQ': 'images/bQ.png', // Black Queen
    'bR': 'images/bR.png', // Black Rook
    'bB': 'images/bB.png', // Black Bishop
    'bN': 'images/bN.png', // Black Knight
    'bP': 'images/bP.png', // Black Pawn
};

// Board square colors
const SQUARE_COLORS = {
    light: '#cfcfce', // Light square color
    dark: '#757473',  // Dark square color
};

// Create the chess board
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Clear existing board

    // Loop through each row and column to create squares
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            // Alternate colors based on row and col parity
            square.style.backgroundColor = (row + col) % 2 === 0
                ? SQUARE_COLORS.light
                : SQUARE_COLORS.dark;

            // Get piece code for this square
            const pieceCode = STARTING_BOARD[row] [col];
            // Add piece images
            if (pieceCode && PIECE_IMAGES[pieceCode]) {
                const img = document.createElement('img');
                img.src = PIECE_IMAGES[pieceCode]; // Set image source
                img.style.width = '90%';           // Size image to fit square
                img.style.height = '90%';
                img.style.pointerEvents = 'none';  // Prevent interaction
                img.draggable = false;            // Disable dragging
                square.appendChild(img);
            }

            board.appendChild(square); // Add square to the board container
        }
    }
}
