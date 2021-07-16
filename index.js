var randomNummber1 = Math.floor(Math.random() * 6 ) + 1;
var rand_str1 = "images/dice"+randomNummber1+".png";

document.querySelector(".img1").setAttribute("src",rand_str1);

var randomNummber2 = Math.floor(Math.random() * 6 ) + 1;
var rand_str2 = "images/dice"+randomNummber2+".png";
document.querySelector(".img2").setAttribute("src",rand_str2);

if(randomNummber1>randomNummber2)
{
  document.querySelector(".container h1").textContent = "Player 1 won the Match";
}

else if(randomNummber1<randomNummber2)
{
  document.querySelector(".container h1").textContent = "Player 2 won the Match";
}
else
{
  document.querySelector(".container h1").textContent = "Match is TIE";
}
