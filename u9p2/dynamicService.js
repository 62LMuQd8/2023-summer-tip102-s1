export class DynamicService {
    // read explanation at CodePath: https://guides.codepath.org/compsci/Min-Cost-Climbing-Stairs
    // more explanation at GFG: https://www.geeksforgeeks.org/minimum-cost-to-reach-the-top-of-the-floor-by-climbing-stairs/
    //
    static minCostRecursion(cost) {
        // memory to cache answers
        let map = new Map();
        // the minimum cost includes the cost at top of stairs
        // b/c top of stairs is also a step
        return minCost(cost.length - 1);

        function minCost(index) {
            // base case: first two steps are given in problem statement
            // can also think of steps as cost optimized
            if (index === 0 || index === 1) return cost[index];
            // if optimized cost is not previously calculated
            if (!map.has(index)) {
                // then calculate optimized cost,
                // the current step is optimized when choosing the minimum between
                // the minimum total cost required to reach the (current step - 1) and (current step - 2)
                // b/c the current step can only be reached by (current step - 1) and (current step - 2),
                // and we can find the minimum total costs recursively
                // note: negative costs do not affect the correctness of this approach
                // b/c we are concerned with only the minimum between two costs,
                // e.g., if we add a constant cost C to each step so that
                // the relative change in cost between steps does not change,
                // the the new cost array would return the same steps or path needed to optimize cost
                // as the cost array with negative costs,
                // this shows that signs do not impact the result (or path traveled),
                // the relative change in cost between steps impact the result (or path traveled)
                let minCostAtCurrIndex = Math.min(minCost(index - 1), minCost(index - 2)) + cost[index];
                // record optimized cost at current step
                map.set(index, minCostAtCurrIndex);
            }
            // return optimized cost at current step
            return map.get(index);
        }
    }

    static minCostIterative(cost) {
        // if cost array contains at most 2 steps
        // then return cost of respective step
        if (cost.length <= 2) return cost[cost.length - 1];
        // table for tabulation
        let table = [];
        // first step is cost optimized (given)
        table.push(cost[0]);
        // second step is cost optimized (given)
        table.push(cost[1]);
        // starting at third step
        for (let i = 2; i < cost.length; i++) {
            // get the optimized cost at current step and each subsequent steps,
            // where the optimized cost to reach the current step is the
            // minimum between the minimum total cost of previous step and the step before the previous step,
            // b/c at each step, (after paying the cost) we can take either one step or two steps up the stairs
            // (other in other words, the only way to get the current step is from the previous step
            // or the step before the previous step)
            table.push(Math.min(table[i - 1], table[i - 2]) + cost[i]);
        }
        // return the minimum total cost to reach the top of stairs
        // (this includes the cost of the step at the top of stairs)
        return table[table.length - 1];
    }
}