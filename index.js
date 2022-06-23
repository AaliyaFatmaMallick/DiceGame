// Player 1

const firstRandomnum = Math.floor(Math.random()* 6) + 1
const firstDiceImage = 'images/dice' + firstRandomnum + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

// Player 2
const secondRandomnum = Math.floor(Math.random()* 6) + 1
const secondDiceImage = 'images/dice' + secondRandomnum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

// Logic for deciding the match
if(firstRandomnum > secondRandomnum){
    document.querySelector('h1').innerHTML = 'Player 1 is the Winner';
}
else if(firstRandomnum < secondRandomnum){
    document.querySelector('h1').innerHTML = 'Player 2 is the Winner';
}
else{
    document.querySelector('h1').innerHTML = 'Match is Draw';
}