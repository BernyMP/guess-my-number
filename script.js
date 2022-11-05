'use strict';
const correctMessage = '🎉 Correct Number!';
const tooHighMessage = '📈 Too High';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const correctBackgroundColor = '#60b347';
const correctStyleWidth = '30rem';
let score = parseInt(document.querySelector('.score').textContent);
let highscore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = correctMessage;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =
      correctBackgroundColor;
    document.querySelector('.number').style.width = correctStyleWidth;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    // when guess is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = tooHighMessage;
    score--;

    // when guess is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score--;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 21);
  console.log(secretNumber);
  score = parseInt(document.querySelector('.score').textContent);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
});
