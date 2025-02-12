let maxPoint = 3;

let computerPoints = 0;
let playerPoints = 0;

$(document).ready(function(){
    $(".htp").click(function(){
        $("#gameInfo").slideToggle(150);
    });
    $("#chooseOne").click(function(){
        $("#chooseSign").slideToggle(150);
    });
});//რო დააჭერდა გახსნას დახუროს how to play და ჯეირანის ის





// $(document).ready(function() {
//     $('.points-number').on('click', function() {
//         maxPoint = $(this).data('name');
//         console.log("Selected maxPoint:", maxPoint);
//     });
//     game();
// });

function chooseSign(){
    $(document).ready(function(){
        $(".myChoise").on("click", function(){
            $("#Choose").attr("src", $(this).attr("src"));
        });
    });

    $("#randomImg").attr('src', `/images/${Math.floor(Math.random()*3) + 1}.jpg`);
}//ანუ როცა აირჩევს მომხმარებელი რაიმეესს აი ზუსტად მაშინ აირჩიოს კომპიუტერმაც რანდომად

function game(){
    
    while (computerPoints < maxPoint || playerPoints < maxPoint) {

        chooseSign();

        switch(randomImg){
            case 1:
                
                switch($("#Choose").attr("src")){
                    case "1.jpg":
                        $("#winorloss").text("Draw");
                        break;
                    case "2.jpg":
                        $("#winorloss").text("You win");
                        playerPoints++;
                        break;
                    case "3.jpg":
                        $("#winorloss").text("You loss");
                        computerPoints++;
                        break;
                    default:
                        console.log("Error");
                        break;
                }
                break;
                
            case 2:
                switch($("#Choose").attr("src")){
                    case "1.jpg":
                        $("#winorloss").text("You loss");
                        computerPoints++;
                        break;
                    case "2.jpg":
                        $("#winorloss").text("Draw");
                        break;
                    case "3.jpg":
                        $("#winorloss").text("You win");
                        playerPoints++;
                        break;
                    default:
                        console.log("Error");
                        break;
                }
                break;
            case 3:
                switch($("#Choose").attr("src")){
                    case "1.jpg":
                        $("#winorloss").text("You win");
                        playerPoints++;
                        break;
                    case "2.jpg":
                        $("#winorloss").text("You loss");
                        computerPoints++;
                        break;
                    case "3.jpg":
                        $("#winorloss").text("Draw");
                        break;
                    default:
                        console.log("Error");
                        break;
                }
                break;
            default:
                console.log("Error");
                break;
        }

        if(computerPoints === maxPoint){
            $("#winorloss").text("LOOOOSe bro");
        } else if(playerPoints === maxPoint){
            $("#winorloss").text("WIIIN bro");
        }
    }
} 

function playSound(name){
    let audio = new Audio("/sounds/" + name + ".mp3");
    audio.play();
}