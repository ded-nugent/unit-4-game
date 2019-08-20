$(document).ready(function() {
    
let wins = 0;
let losses = 0;

let numberToGuess = Math.floor(Math.random()*101) + 19;
let button1 = Math.ceil(Math.random()*12);
let button2 = Math.ceil(Math.random()*12);
let button3 = Math.ceil(Math.random()*12);
let button4 = Math.ceil(Math.random()*12);
let total = 0


function resetGame() {
numberToGuess = Math.floor(Math.random()*101) + 19;
button1 = Math.ceil(Math.random()*12);
button2 = Math.ceil(Math.random()*12);
button3 = Math.ceil(Math.random()*12);
button4 = Math.ceil(Math.random()*12);
total = 0

};

$("#one").val(button1);
$("#two").val(button2);
$("#three").val(button3);
$("#four").val(button4); 

$(".button").click(function() {


total += parseInt($(this).val()); 
 $("#total").html("Your total: " + total);

if (total > numberToGuess) {
    losses++;
    resetGame()   
}

if (total === numberToGuess) {
    wins++;
    resetGame()
}

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses); 
$("#number").html("Match this number: " + numberToGuess);


   
});





    
   









});





