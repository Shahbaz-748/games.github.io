
var buttonColours=["red", "blue", "green", "yellow"];
var compColor=[];
var userColor=[];
var flag = false;
var level=0;




$(document).on("keypress",function(){
  if(!flag) {
  nextSequence();
  flag=true;
}

});

function nextSequence(){
  userColor=[];
  level++;
 $("h1").text("Level "+level);
 var randomNumber= Math.floor(Math.random()*4);
 var randomChosenColour= buttonColours[randomNumber];
 compColor.push(randomChosenColour);
 playAnim(randomChosenColour);
 }


$(".btn").on("click",function(){
   var userChosenColor= $(this).attr("id");
    userColor.push(userChosenColor);
    playAnim(userChosenColor);
    test(userColor.length-1);
 });


 function test(currentLevel){

  if(userColor[currentLevel] == compColor[currentLevel]){
     if(userColor.length == compColor.length)  {

      setTimeout(function(){
       nextSequence()
     },1000);

   }

 }

 else {
   $("body").addClass("game-over");

   setTimeout(function(){
          $("body").removeClass("game-over");
         },400);

         var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        $("h1").text("Game-over / Enter any key to restart");

        level= 0;
        userColor= [];
        compColor= [];
        flag=false;

     }
 }



 function playAnim(keys)
 {
   if(keys=="red")
   {
     $("#red").addClass("ai");

     setTimeout(function(){
       $("#red").removeClass("ai");
     },400);

      var red=new Audio("sounds/red.mp3");
      red.play();
   }

   else if(keys=="blue")
   {
       $("#blue").addClass("ai");
       setTimeout(function(){
         $("#blue").removeClass("ai");
       },400);
      var blue=new Audio("sounds/blue.mp3");
      blue.play();
   }

   else if(keys=="green")
   {
     $("#green").addClass("ai")
     setTimeout(function(){
       $("#green").removeClass("ai");
     },400);

      var green=new Audio("sounds/green.mp3");
      green.play();
   }

 else if(keys=="yellow")
   {
     $("#yellow").addClass("ai")
     setTimeout(function(){
       $("#yellow").removeClass("ai");
     },400);

      var yellow=new Audio("sounds/yellow.mp3");
      yellow.play();
   }
 }
