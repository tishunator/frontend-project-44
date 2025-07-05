import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js'
const runEvenGame = () => {
  greeting()
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let i = 0;
  while (i < 3) {
    let randomNumber = getRandomInt(100);
    let correctAnswer = randomNumber % 2 == 0 ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`);
    let answer = readlineSync.question('Your answer:')
    if (answer === correctAnswer) {
      console.log('Correct!');
      i++
    }

    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`)
      break
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runEvenGame