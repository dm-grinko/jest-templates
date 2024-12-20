import { describe, expect, test } from '@jest/globals';
import { add, subtract, multiply, divide, isEven, isOdd, isPrime } from '../src/basic';

describe('Basic Math Operations', () => {
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and negative number correctly', () => {
      expect(add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts with negative result', () => {
      expect(subtract(2, 5)).toBe(-3);
    });

    test('subtracts negative numbers correctly', () => {
      expect(subtract(-2, -3)).toBe(1);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies positive and negative numbers correctly', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    test('multiplies two negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    test('divides with decimal result', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('isEven', () => {
    test('returns true for even numbers', () => {
      expect(isEven(4)).toBe(true);
    });
  });

  describe('isOdd', () => {
    test('returns true for odd numbers', () => {
      expect(isOdd(3)).toBe(true);
    });
  });

  describe('isPrime', () => {
    test('returns true for prime numbers', () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
      primes.forEach(num => {
        expect(isPrime(num)).toBe(true);
      });
    });

    test('returns false for non-prime numbers', () => {
      const nonPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16];
      nonPrimes.forEach(num => {
        expect(isPrime(num)).toBe(false);
      });
    });

    test('returns false for numbers less than 2', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });

    test('returns true for large prime numbers', () => {
      expect(isPrime(97)).toBe(true);
      expect(isPrime(101)).toBe(true);
    });

    test('returns false for large composite numbers', () => {
      expect(isPrime(99)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });
  });

  
});
