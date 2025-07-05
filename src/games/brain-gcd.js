import readlineSync from 'readline-sync';
import { greeting, getRandomInt, nod } from '../index.js'

const runBrainGcd =()=>{
  greeting()
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellooo, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.')
  let i = 0;

  while (i < 3) {
  let a = getRandomInt(100)
  let b = getRandomInt(100)
  let randomExpr = `${a} ${b}`
  let correctAnswer = nod(a,b)
  console.log(`Question: ${randomExpr}`);
    let answer = readlineSync.question('Your answer:')

    if (Number(answer) === correctAnswer) {
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
export default runBrainGcd