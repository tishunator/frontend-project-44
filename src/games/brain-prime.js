import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js'
const runBrainPrime = () => {
  greeting()
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  let i = 0

  while (i < 3) {
    let correctAnswer = 'yes'
    let randomNumber = getRandomInt(10)
    const limit = Math.floor(Math.sqrt(randomNumber));
    if (randomNumber < 2) {
      correctAnswer = 'no'
    }

    for (let n = 2; n <= limit; n++) {
      if (randomNumber % n === 0) {
        correctAnswer = 'no'
        break
      }

    }
    console.log(`Question: ${randomNumber}`);
    let answer = readlineSync.question('Your answer:')
    if (answer === correctAnswer) {
      console.log('Correct!');
      i++
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
export default runBrainPrime