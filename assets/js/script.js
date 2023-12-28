let wins = 0;
let losses = 0;
let draws = 0;

// Play Game Area

function playGame(playerChoice) {

    // Player Choice
    const choices = ['rock', 'paper', 'scissors'];
    // Computer Choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Determine Winner + Score
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result)
}

// Determine Winner