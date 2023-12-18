export class ArrayService {
    // read CodePath's explanation: https://guides.codepath.org/compsci/House-Robber
    static maxMoneyRecursive(nums) {
        // create cache
        let cache = new Map();
        // calculate max money with dynamic programming
        return max(nums.length - 1);
        
        // we start calculation from the last house
        function max(i) {
            // if index is less than 0,
            // we have checked all the houses,
            // so return with 0 b/c no houses = no money
            if (i < 0) return 0;
            // if we have previously calculated the max money at house with index i,
            // return max money at house with index i
            if (cache.has(i)) return cache.get(i);
            // the max money to be made at house with index i
            // is the maximum between the max money made at house with index i - 1
            // (or house adjacent to the current house), and,
            // the max money made at house with index i - 2
            // (or house adjacent to the house adjacent to the current house)
            // plus the money made at the current house
            // the solution is then calculated recursively
            let maxMoney = Math.max(max(i - 1), max(i - 2) + nums[i]);
            // cache the max money made at the current house
            cache.set(i, maxMoney);
            // return max money made at the current house
            return maxMoney;
        }
    }

    static maxMoneyIterative(nums) {
        // table for caching
        let table = [];
        // starting at the first house,
        // we figure out the max money to be made ending at the ith index house
        for (let i = 0; i < nums.length; i++) {
            // max money made at previous house
            let pH = table[i - 1];
            // max money made at the house before the previous house
            let ppH = table[i - 2];
            // max money made at the current house is the maximum between
            // maximum money made at the previous house and
            // and maximum money made at the house before the previous house plus the money made at current house
            // note: houses with negative indexes are out of bounds and make no money
            table[i] = Math.max(pH ? pH : 0, (ppH ? ppH : 0) + nums[i]);
        }
        // the max money made for all houses is the max money made at the last house
        return table[nums.length - 1];
    }
}