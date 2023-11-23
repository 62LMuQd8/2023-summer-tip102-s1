// implement requirements
// assume there is always one solution for each set of arguments
function twoSum(nums, target) {
    const map = new Map();
    // for each num in nums
    for (const [i, num] of nums.entries()) {
        // check to see if we have seen the corresponding num derived from target
        if (map.has(target - num)) {
            // if we have, we found the answer
            // return the two indexes
            return [map.get(target - num), i];
        }
        // if we have not, add the current num to map for nums have already seen
        // map changes n^2 complexity to n b/c lookups in maps are O(1)
        map.set(num, i)
    }
}

// testing
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));