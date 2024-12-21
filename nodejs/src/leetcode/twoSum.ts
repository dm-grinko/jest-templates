/**
 * LeetCode 1: Two Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
    if (!nums) {
        throw new Error('Invalid input: array is required');
    }
    
    if (nums.length < 2) {
        throw new Error('Invalid input: array must contain at least 2 numbers');
    }

    const map = new Map<number, number>();

    // [3, 2, 4], 6
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 6 - 3 = 3; 6 - 2 = 4; 6 - 4 = 2
        
        if (map.has(complement)) { // map.has(3) -> false; map.has(4) -> false; map.has(2) -> true
            return [map.get(complement)!, i]; // ----> [1, 2]
        }
        
        map.set(nums[i], i); // map.set(3, 0); map.set(2, 1); 
    }

    // According to problem constraints, this should never happen
    // as we're guaranteed to have exactly one solution
    throw new Error('No solution found');
}