'use strict';

const firstPrize = 25;
const secondPrize = 50;
const thirdPrize = 100;
const startAttempts = 3;
const increaseRangeMax = 4;
const multiplier = 2;
const rangeMaxInit = 9;
let rangeMax = rangeMaxInit;
let prizes = [firstPrize, secondPrize, thirdPrize];
let playerNumber, guessNumber, nextGame;
let attempts = 3;
let prize = 0;
let playerGuess = false;
const playGame = confirm('Do you want to play a game?');

if(!playGame) {
  alert('You did not become a billionaire, but can');
} else {
  guessNumber = Math.floor(Math.random() * rangeMax);
  while (attempts > 0){
    playerNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${rangeMax - 1} 
Attempts left: ${attempts} \nTotal prize: ${prize}$\nPossible prize on current attempt: ${prizes[attempts - 1]}$`));
  console.log(guessNumber);
    if(playerNumber === guessNumber){
      prize += prizes[attempts - 1];
      nextGame = confirm(`Congratulation, you won! Your prize is: ${prizes[attempts - 1]}$. Do you want to continue?’.`)
      if(!nextGame) {
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        nextGame = confirm('Do you want to play again?');
        if(nextGame) {
          attempts = startAttempts;
          guessNumber = Math.floor(Math.random() * rangeMax);
          continue;
        } else {
          break;
        }
      } else {
        rangeMax += increaseRangeMax; 
        attempts = startAttempts;
        guessNumber = Math.floor(Math.random() * rangeMax);
        prizes = prizes.map(item => item * multiplier);
        continue;
      }
    } else {
      attempts--;
      if(attempts === 0){
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        nextGame = confirm('Do you want to play again?');
        if(nextGame) {
          prize = 0;
          attempts = startAttempts;
          prizes = [firstPrize, secondPrize, thirdPrize];
          rangeMax = rangeMaxInit;
          guessNumber = Math.floor(Math.random() * rangeMax);
        }
      } 
    }
  } 
}