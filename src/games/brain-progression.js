import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../index.js'
const runBrainProgression = () => {
  greeting()
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?')
  let i = 0
  const length = 10;
  while (i < 3) {
    let result = []
    const start = getRandomInt(20);
    let step = getRandomInt(length) + 1;
    for (let n = 0; n < length; n++) {
      result.push(start + step * n)
    }
    const hiddenIndex = getRandomInt(length);
    let correctAnswer = result[hiddenIndex]
    result[hiddenIndex] = '..'

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

