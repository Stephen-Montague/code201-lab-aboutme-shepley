'use strict';

// Holds name input between button presses.
let user = '';

let startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {

  if (!user) {
    user = prompt('What is your name?');
  }
  if (user.toLowerCase() === 'robert') {
    alert('Hello, name brother!');
  }
  else (alert(`Hello, ${user}!`));

  alert('The following questions should be answered with a simple \'yes\' or \'no\'');

  let isAnswered = false;
  let points = 0;

  while (!isAnswered) {
    let questionOne = prompt('Am I in the Air Force?');
    switch (questionOne.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Incorrect');
      alert('No, that\'s not correct. If only...');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Correct');
      alert('That\'s correct! I\'m in the Army.');
      points++;
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionTwo = prompt('Have I watched every Star Wars film/show in chronological order?');
    switch (questionTwo.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('Yeah... That took a while.');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('I appreciate your faith in me, but I have...');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionThree = prompt('I used to play the euphonium. Do you know what that is?');
    switch (questionThree.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('Good answer! You must know a lot about useless things.');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Wrong answer... Google it and come back, please.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionFour = prompt('Do I have a Lord of the Rings tattoo?');
    switch (questionFour.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Correct');
      alert('I do! It\'s the broken sword Narsil, on my right forearm.');
      points++;
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Incorrect');
      alert('Sorry, that is not correct.');
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  isAnswered = false;
  while (!isAnswered) {
    let questionFive = prompt('Do I have any dogs?');
    switch (questionFive.toLowerCase()) {
    case 'y':
    case 'yes':
    case 'true':
      // console.log('Incorrect');
      alert('Nope, I just have two cats. One of them hangs out on my desk sometimes.');
      isAnswered = true;
      break;
    case 'n':
    case 'no':
    case 'false':
      // console.log('Correct');
      alert('Correct! Maybe soon, though. My cats would like a new friend.');
      points++;
      isAnswered = true;
      break;
    default:
      alert('Please enter either y/yes/true or n/no/false');
      break;
    }
  }

  alert(`Thank you for getting to know me, ${user}!`);

  // Update score card below button.
  let pointLabel = document.querySelector('.point-label');
  let pointAmount = document.querySelector('.point-amount');
  pointLabel.innerText = `${user}'s Score`;
  pointAmount.innerText = `${points}`;
});
