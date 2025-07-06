import readlineSync from 'readline-sync'
import { greeting, getRandomInt, calculate } from '../index.js'
const runBrainCalc = () => {
  greeting()
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What is the result of the expression?')
  let i = 0

  while (i < 3) {
    let a = getRandomInt(100)
    let b = getRandomInt(100)
    let operator = ['+', '-', '*'][getRandomInt(3)]
    let randomExpr = `${a} ${operator} ${b}`
    let correctAnswer = calculate(a, b, operator)

    console.log(`Question: ${randomExpr}`)
    let answer = readlineSync.question('Your answer:')

    if (Number(answer) === correctAnswer) {
      console.log('Correct!')
      i++
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default runBrainCalc
