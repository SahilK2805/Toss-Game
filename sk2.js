let userScore = 0;
let compScore = 0;

let msg1 = document.querySelector("#result-container");
let msg2 = document.querySelector("#user-score");
let msg3 = document.querySelector("#comp-score");

let flipCoin = () => {
    let options = ["Heads", "Tails"];
    let randIdx = Math.floor(Math.random() * 2);
    return options[randIdx];
};

let playGame = (userChoice) => {
    let coinElement = document.querySelector("#coin");
    let coinText = document.querySelector("#coin-text");

    // Reset animation
    coinElement.style.animation = "none";
    setTimeout(() => {
        coinElement.style.animation = "flip 2s forwards";
    }, 0);

    setTimeout(() => {
        let coinResult = flipCoin();
        coinElement.style.transform = coinResult === "Heads" ? "rotateX(0)" : "rotateX(180deg)";
        
        // Display Heads or Tails text
        coinText.innerText = coinResult;

        console.log(`User choice: ${userChoice}, Coin result: ${coinResult}`);

        if (userChoice === coinResult) {
            userScore++;
            msg2.innerText = userScore;
            msg1.innerText = `You win! Coin landed on ${coinResult}.`;
            msg1.style.backgroundColor = "green";
        } else {
            compScore++;
            msg3.innerText = compScore;
            msg1.innerText = `You lose! Coin landed on ${coinResult}.`;
            msg1.style.backgroundColor = "red";
        }
    }, 2000); // Match the animation duration
};

document.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id").charAt(0).toUpperCase() + choice.getAttribute("id").slice(1);
        playGame(userChoice);
    });
});
