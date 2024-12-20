export const add = (a: number, b: number) => a + b;

export const subtract = (a: number, b: number) => a - b;

export const multiply = (a: number, b: number) => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

export const isEven = (a: number) => a % 2 === 0;

export const isOdd = (a: number) => a % 2 !== 0;

export const isPrime = (a: number) => {
  if (a <= 1) return false;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) return false;
  }
  return true;
};
