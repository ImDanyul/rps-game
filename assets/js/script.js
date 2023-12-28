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
    updateScore(result);
}

// Determine Winner

function determineWinner(player, computer) {
    if (player === computer) {
        draws++;
        return 'It\'s a draw';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        wins++;
        return 'You Win!';
    } else {
        losses++;
        return 'Compute Wins!';
    }
}

// Update Images

function updateImages(playerChoice, computerChoice) {
    document.getElementById('playerImg').src = 'assets/images/${playerChoice}.jpg';
    document.getElementById('computerImg').src = 'assets/images/${computerChoice}.jpg';
}