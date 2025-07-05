import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js'
const runBrainProgression = () => {
  greeting()
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?')
  let i = 0
  while (i < 3) {
    let result = []
    let randomProgressiveNumber = getRandomInt(10)
    for (let n = randomProgressiveNumber; result.length < 10; n += randomProgressiveNumber) {
      result.push(randomProgressiveNumber + n)
    }
    let correctAnswer = result[randomProgressiveNumber]
    result[randomProgressiveNumber] = '..'

    console.log(`Question: ${result.join(' ')}`);
    let answer = readlineSync.question('Your answer:')

    if (Number(answer) === correctAnswer) {
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
}



export default runBrainProgression

