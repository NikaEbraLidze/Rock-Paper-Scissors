let maxPoint = 3;
let computerPoints = 0;
let playerPoints = 0;

$(document).ready(function() {
    $('.bla').on('click', function() {
        e.preventDefault();  // გადატვირთვა არ მოხდება
        maxPoint = $(this).attr('id');
        console.log("Updated maxPoint: " + maxPoint);
    });
});

let winWords = [
    "Good luck", 
    "Woow", 
    "Excellent", 
    "Brilliant", 
    "Perfect", 
    "Amazing", 
    "Fantastic", 
    "Incredible", 
    "Outstanding", 
    "Superb"
];

let lossWords = [
    "Keep going!", 
    "Try again!", 
    "You got this!", 
    "Next time!", 
    "Stay strong!", 
    "Almost there!", 
    "Don't give up!", 
    "Believe in yourself!", 
    "Keep pushing!", 
    "You'll win soon!"
];

$(document).ready(function () {
    // "How to play" ღილაკის toggle
    $(".htp").click(function () {
        $("#gameInfo").slideToggle(150);
    });

    // "Choose your sign" toggle
    $("#chooseOne").click(function () {
        $("#chooseSign").slideToggle(150);
    });

    // points selection logic (optional)
    $('.points-number').on('click', function () {
        maxPoint = $(this).data('name');
        console.log("Selected maxPoint:", maxPoint);
    });

    // მოთამაშის არჩევანი
    $(".myChoise").on("click", function () {
        let playerChoice = $(this).attr("src"); // მოთამაშის არჩევანის სურათი
        $("#Choose").attr("src", playerChoice); // აჩვენებს მოთამაშის არჩევანს
        
        // კომპიუტერის არჩევანი - ანიმაციისთვის
        compiuterChoiseAnimation(playerChoice);
    });
});

// კომპიუტერის არჩევის ანიმაცია
function compiuterChoiseAnimation(playerChoice){
    let counter = 0;

    let interval = setInterval(function(){
        let randomIndex = Math.floor(Math.random() * 3) + 1;
        $("#randomImg").attr("src", `../public/images/${randomIndex}.jpg`);
        counter++;

        if(counter === 10){
            clearInterval(interval);

            let finalImage = Math.floor(Math.random() * 3) + 1; // რანდომულად აირჩეს საბოლოო სურათი
            $("#randomImg").attr("src", `../public/images/${finalImage}.jpg`);

            // თამაშის დაწყება საბოლოო სურათის მიხედვით
            game(playerChoice, finalImage);
        }
    }, 50); // სურათები იცვლება ყოველ 50ms-ში
}

// თამაში
function game(playerChoice, randomImg) {
    let resultText = "";
    let playerWin = winWords[Math.floor(Math.random() * winWords.length)];
    let computerWin = lossWords[Math.floor(Math.random() * lossWords.length)];

    switch (randomImg) {
        case 1: // ქვა
            if (playerChoice.includes("1.jpg")) {
                resultText = "Draw";
            } else if (playerChoice.includes("2.jpg")) {
                resultText = playerWin;
                playerPoints++;
            } else {
                resultText = computerWin;
                computerPoints++;
            }
            break;
        case 2: // ქაღალდი
            if (playerChoice.includes("1.jpg")) {
                resultText = computerWin;
                computerPoints++;
            } else if (playerChoice.includes("2.jpg")) {
                resultText = "Draw";
            } else {
                resultText = playerWin;
                playerPoints++;
            }
            break;
        case 3: // მაკრატელი
            if (playerChoice.includes("1.jpg")) {
                resultText = playerWin;
                playerPoints++;
            } else if (playerChoice.includes("2.jpg")) {
                resultText = computerWin;
                computerPoints++;
            } else {
                resultText = "Draw";
            }
            break;
        default:
            console.log("Error");
            return;
    }

    // აჩვენებს შედეგს
    $("#winorloss").text(resultText);
    $("#playerPoints").text(playerPoints);
    $("#computerPoints").text(computerPoints);

    // ამოწმებს თამაშის დასრულებას
    if (computerPoints === maxPoint) {
        $("#winorloss").text("YOU LOSS!");
        playSound("loss");
        resetGame();
    } else if (playerPoints === maxPoint) {
        $("#winorloss").text("YOU WIN!!!");
        playSound("win");
        resetGame();
    }
}

// თამაშის თავიდან დაწყება
function resetGame() {
    computerPoints = 0;
    playerPoints = 0;
    setTimeout(function(){
        window.location.replace("gameinfo.html");
    }, 3000);
}

function playSound(name){
    let audio = new Audio(`../public/sounds/${name}.mp3`);
    audio.play();
}