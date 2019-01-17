/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var color = rainbow (q1Result,q2Result,q3Result);
        
        $(".result").text("You're the color  " + color);
    
    });

});

function rainbow  (answer1, answer2, answer3){
    var red= 0;
    var blue = 0;
    var yellow =0;
    var error = false;
    
   if (answer1 === "Yes" ){
       red += 20;
   } else if (answer1 === "Maybe"){
       yellow += 10;
   } else if (answer1 === "No"){
       blue += 5 
   } 
   
    if (answer2 === "Yes" ){
       red += 20;
   } else if (answer2 ===  "Maybe"){
       yellow += 10;
   } else if (answer2 === "No"){
       blue += 5 
   } 
   
    if (answer3 === "Yes" ){
       red += 20;
   } else if (answer3 ===  "Maybe"){
       yellow += 10;
   } else if (answer3 === "No"){
       blue =+ 5 
   } 
   
   // if red is largest, return red
   // if blue is largest, return blue
   // or if yellow is biggest, return "yellow";
   if (red > yellow && red > blue) {
       return "red";
   } else if (yellow > blue) {
       return "yellow";
   } else {
       return "blue";
   }
}