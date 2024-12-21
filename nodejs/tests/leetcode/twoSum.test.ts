import { twoSum } from '../../src/leetcode/twoSum';

/**
 * LeetCode 1: Two Sum
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution.
 * You can return the answer in any order.
 */

describe('twoSum', () => {
    test.each([
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1],
            description: 'basic case with positive numbers'
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2],
            description: 'numbers not in sequential order'
        },
        {
            nums: [3, 3],
            target: 6,
            expected: [0, 1],
            description: 'same numbers can be used'
        },
        {
            nums: [-1, -2, -3, -4, -5],
            target: -8,
            expected: [2, 4],
            description: 'works with negative numbers'
        },
        {
            nums: [0, 4, 3, 0],
            target: 0,
            expected: [0, 3],
            description: 'works with zeros'
        },
        {
            nums: [1, 2, 3, 4, 5],
            target: 9,
            expected: [3, 4],
            description: 'numbers at the end of array'
        },
        {
            nums: [5, 0, -5],
            target: 0,
            expected: [0, 2],
            description: 'mix of positive and negative numbers'
        }
    ])('$description', ({ nums, target, expected }) => {
        expect(twoSum(nums, target)).toEqual(expected);
    });

    // Error cases
    it('should handle invalid inputs', () => {
        expect(() => twoSum([], 1)).toThrow('Invalid input: array must contain at least 2 numbers');
        expect(() => twoSum([1], 1)).toThrow('Invalid input: array must contain at least 2 numbers');
        expect(() => twoSum(null as any, 1)).toThrow('Invalid input: array is required');
        expect(() => twoSum(undefined as any, 1)).toThrow('Invalid input: array is required');
        expect(() => twoSum([1, 2, 3], 10)).toThrow('No solution found');
    });
});

