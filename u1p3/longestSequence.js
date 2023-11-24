export class LongestSequence {
    static sortMethod(nums) {
        if (nums.length === 0) return 0;
        // default sort is by string comparison
        // so we need custom compare function
        nums.sort((a, b) => { return a > b ? 1 : b > a ? -1 : 0 });
        // we are comparing current num with previous num
        // so longestSequence and currentSequence start at 1
        // b/c the first element in the array does not have a previous num
        let longestSequence = 1;
        let currentSequence = 1;
        for (const [i, num] of nums.entries()) {
            // removes duplicates
            if (num === nums[i - 1]) continue;
            // if previous number is one more than current number
            if (num === nums[i - 1] + 1) {
                // increase current count
                currentSequence++;
            } else {
                // else longest sequence is max of current sequence and
                // variable that tracks longest sequence
                longestSequence = Math.max(longestSequence, currentSequence);
                // reset current sequence
                currentSequence = 1;
            }
        }
        // return max of current sequence and variable that tracks longest sequence
        // b/c current sequence could be longest sequence instead of last update of
        // variable that tracks longest sequence
        return Math.max(longestSequence, currentSequence);
    }

    static mapMethod(nums) {
        // longSequence starts at 0 b/c array always have smallest number
        let longestSequence = 0;
        // sets remove duplicates
        const setNums = new Set(nums);
        for (const num of setNums) {
            // sequences start with the smallest number
            // is there a number smaller than current number?
            if (!setNums.has(num - 1)) {
                let currentSequence = 1;
                let currentNum = num;
                // keep incrementing current num in temp variable
                // and check if the increment numbers are in the set
                while (setNums.has(currentNum + 1)) {
                    currentNum++;
                    currentSequence++;
                }
                // longest sequence is max between current sequence and
                // variable tracking longest sequence
                longestSequence = Math.max(longestSequence, currentSequence);
            }
        }
        return longestSequence;
    }
}