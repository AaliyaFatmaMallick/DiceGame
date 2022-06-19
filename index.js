var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomImage="images/"+randomDiceImage;
var Image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="dice"+randomNumber2+".png"
var randomImage2="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerText="Player 1 Wins!🚩";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerText="Player 2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerText="Draw!";
}