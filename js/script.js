/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore ;
    });

});

function rainbow  (answer1, answer2, answer3){
    //var red= 0;
    //var blue = 0;
    //var yellow =0;
    //var error = false;
      var score= 0;
    
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
}

function questions(score){
     if ( score ===60 ){
        return "Red" ;
    } else if (score  === 30 && score < 29 ){
        return "Yellow";
    } else if ( score === 15 && score < 14)
        return "Blue";
    } else { return "You'r not part of the rainbow.... SORRY";}
    
}

totalScore = question1 += question2 += question3