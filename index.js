$("h1").addClass("big-title").text("Goodbye");

$("button").css("background-color", "blue").css("color", "white").html("<em>This Button</em>");

console.log($("img").attr("src"))
$("a").attr("href", "https://www.yahoo.com")

$("h1").click(function(){
    $("h1").css("color", "purple")
})

$("button").click(function(){
    $("h1").slideUp().slideDown()
})

$(document).keypress(function(event){
    console.log(event.key)
    $("h1").text(event.key)
})

$("h1").on("mouseenter", function(){
    $("h1").css("color", "red")
})
$("h1").on("mouseout", function(){
    $("h1").css("color", "yellow")
})

$("h1").before("<button>New</button>")