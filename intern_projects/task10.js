const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error: Invalid choice! Please choose rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer wins!" : "You win!";
  }
  if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer wins!" : "You win!";
  }
  if (userChoice === "scissors") {
    return computerChoice === "rock" ? "Computer wins!" : "You win!";
  }
  if (userChoice === "bomb") {
    return "You win!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock"); // Replace 'rock' with the user's choice
  const computerChoice = getComputerChoice();
  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
