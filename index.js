// alert("Game On!")
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userclickedPattern = [];

var started = false;
var level = 0;

$(document).on("keydown", function(){
    if(!started){
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true
    }
})

$(".btn").click(function(){
    var useChosenColor = $(this).attr("id")
    // console.log(useChosenColor)
    userclickedPattern.push(useChosenColor)
    var boxSound = new Audio("sounds/" + this.id + ".mp3");
    boxSound.play();
    animatePress(useChosenColor)

    checkAnswer(userclickedPattern.length-1)

})


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userclickedPattern[currentLevel]){
        if(userclickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
            }
        } else{
            var wrongSound = new Audio("sounds/wrong.mp3")
            wrongSound.play()
            $("body").addClass("game-over")
            $("#level-title").text("Game Over, Press Any Key to Restart")

            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            startOver()
    }
}

function nextSequence() {
    userclickedPattern = [];
    level++;
    $("#level-title").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4);
    // return randomNumber
    var randomChosenColor = buttonColors[randomNumber];
// console.log(randomChosenColor)
    gamePattern.push(randomChosenColor);
// console.log(gamePattern)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var boxSound = new Audio("sounds/" + randomChosenColor + ".mp3");
    boxSound.play();

}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}



function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}



// $("h1").addClass("big-title").text("Goodbye");

// $("button").css("background-color", "blue").css("color", "white").html("<em>This Button</em>");

// console.log($("img").attr("src"))
// $("a").attr("href", "https://www.yahoo.com")

// $("h1").click(function(){
//     $("h1").css("color", "purple")
// })

// $("button").click(function(){
//     $("h1").slideUp().slideDown()
// })

// $(document).keypress(function(event){
//     console.log(event.key)
//     $("h1").text(event.key)
// })

// $("h1").on("mouseenter", function(){
//     $("h1").css("color", "red")
// })
// $("h1").on("mouseout", function(){
//     $("h1").css("color", "yellow")
// })

// $("h1").before("<button>New</button>")