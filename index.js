// alert("Game On!")
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userclickedPattern = [];

function nextSequence() {
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
// nextSequence()

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

$(".btn").on("click", function(event){
    event.preventDefault();
    var useChosenColor = $(this).attr("id")
    console.log(useChosenColor)
    userclickedPattern.push(useChosenColor)
    var boxSound = new Audio("sounds/" + this.id + ".mp3");
    boxSound.play();
    animatePress(useChosenColor)

})




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