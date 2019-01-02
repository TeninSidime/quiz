/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        rainbow(q1Result, q2Result, q3Result);
    });

});

function rainbow  (answer1, answer2, answer3){
    var red= 0;
    var blue = 0;
    var yellow =0;
    var error = false;
    if ( answer1 === "yes" ) {
        red += 1;
    } else if ( answer2 === "maybe"){
        blue += 1;
        
    }else if (answer3 ==="no"){
        yellow += 1;
    } else {
        error = true;
    }
     
} 
