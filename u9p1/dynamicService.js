// read CodePath's explanation: https://guides.codepath.org/compsci/Fibonacci-Number
//
export class DynamicService {
    // top down approach
    static fibonacciNumberRecursion(num) {
        // keep track of fibonacci numbers that were previously calculated (memoization)
        let map = new Map();
        // calculate fibonacci number
        return fibonacci(num);

        function fibonacci(n) {
            // base case: fibonacci sequence starts at 0 where
            // F(0) = 0 and F(1) = 1
            if (n === 0 || n === 1) return n;
            // if we have not previously calculated the fibonacci number
            if (!map.has(n)) {
                // then calculate the fibonacci number
                // for example, the answer to F(50) is this tree structure
                //                    F(50)
                //                   /     \
                //               F(49)      F(48)
                //              /     \     /    \
                //         F(48)    F(47)  F(47)  F(46)
                //         /   \    /   \  /   \  /   \
                //        ..   ..  ..   ....   ....   ..
                // if we calculate and store the fibonacci numbers on the leftmost edge of the tree,
                // then we would have the fibonacci numbers needed to compute the remaining nodes
                // in order to return to the root node which is the fibonacci number that we want
                // this makes the problem a dynamic programming problem instead of a divide & conquer problem
                // b/c there are overlapping subproblems where the answers can be stored and reused,
                // and b/c in-memory storage is used, this transforms the approach from
                // exponential time complexity O(2^n) to linear time complexity O(n)
                let fib = fibonacci(n - 1) + fibonacci(n - 2);
                // and store the answer into the map
                map.set(n, fib);
            }
            // return the calculated fibonacci number from memory
            return map.get(n);
        }
    }

    // bottom up approach
    static fibonacciNumberIterative(num) {
        // keep track of previously calculated fibonacci numbers (tabulation)
        let table = [];
        // fibonacci sequence starts at 0
        // add F(0) = 0 to table
        table.push(0);
        // add F(1) = 1 to table
        table.push(1);
        // starting at n = 2, we traverse up or build up to F(n = num)
        // b/c previous fibonacci numbers F(n - 1) and F(n - 2) were previously calculated, i.e.,
        // F(n = num) = F(n - 1) and F(n - 2)
        // ...
        // ...
        // ...
        // F(5) = F(4) + F(3)
        // F(4) = F(3) + F(2)
        // F(3) = F(2) + F(1)
        // F(2) = F(1) + F(0) <--- we start here
        // F(1) = 1 <--- (given at the start of problem)
        // F(0) = 1 <--- (given at the start of problem)
        for (let n = 2; n <= num; n++) {
            table.push(table[n - 1] + table[n -2]);
        }
        // return F(num) from table
        return table[num];
    }
}