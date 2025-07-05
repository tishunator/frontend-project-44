
export const greeting =()=>{
  console.log('Welcome to the Brain Games!');
 
}

export const getRandomInt = (max) => Math.floor(Math.random() * max);
export const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;   
  }
};

export const nod = (a, b) => {
  while (a % b !== 0) {
    const res = a % b;
    a = b;
    b = res;
  }
  return b;
};