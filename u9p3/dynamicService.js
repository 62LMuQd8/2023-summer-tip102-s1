export class DynamicService {
    // read explanation at CodePath: https://guides.codepath.org/compsci/Best-Time-to-Buy-and-Sell-Stock
    // more explanation at GFG: https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/
    //
    // BF approach w/ caching based on rules from problem statement
    //
    static maxProfitRecursion(prices) {
        // map for caching lowest sell price
        let map = new Map();
        // get max profit, starting with entire array
        // (index at start of array)
        return maxProfit(0);

        function maxProfit(startIndex) {
            // we have processed the entire prices array
            if (startIndex === prices.length) return 0;
            // the maximum profit from the prices array is the maximum between
            // the maximum profit at the current buy price and
            // the maximum profit from the remaining buy prices
            // note: negative denotes money flowing out,
            //       positive denotes money flowing in
            return Math.max(-prices[startIndex] + maxPrice(startIndex + 1), maxProfit(startIndex + 1))
        }

        function maxPrice(startIndex) {
            // we have processed the entire prices array
            if (startIndex === prices.length) return 0;
            // if maximum sell price at current index is not previously calculated
            if (!map.has(startIndex)) {
                // then find the maximum sell price at current index, which is
                // the maximum between the current sell price and the remaining sell prices
                let max = Math.max(prices[startIndex], maxPrice(startIndex + 1))
                // record the maximum sell price at current index
                map.set(startIndex, max);
            }
            // return maximum sell price at current index
            return map.get(startIndex);
        }
    }

    // the idea is to keep track of the most recent minimum buy price
    // and use this minimum buy price to calculate the max profit for each subsequent day
    // until we see a price less than the current minimum buy price
    // (we only update max profit if we calculate a profit that is higher than the current recorded max profit)
    // for example, in [7,2,10,4,1,6]:
    // the recorded max profit on day 2 (price is 10) is 8 b/c on day 1 there is local minimum,
    // however, on day 4 (price is 1) we see the lowest price in the ordered list (absolute minimum),
    // but the profit is 5 when buying on day 4 and selling on the last day (price is 6),
    // so the max profit remains 8
    //
    static maxProfitIterativeOptimized(prices) {
        // cache rolling lowest buy prices
        // note: instead of a table, we can also just track the most recent minPrice to decrease space,
        // when we buy and sell on the same day, the profit is 0
        // (one of the conditions in the problem statement is that buying and selling
        // occur on different days; however, to simplify the coding, we allow buying and selling
        // to occur on the same day since this does not impact the final answer max profit)
        let minPrices = [];
        // at 0th day, the lowest buy price is prices[0]
        minPrices[0] = prices[0];
        // keep track of maximum profit
        let maxProfit = 0;
        // for each day
        for (let i = 0; i < prices.length; i++) {
            // compare recorded lowest buy price (up to current day) with current day buy price,
            // and record lowest price as lowest buy price for next day
            minPrices.push(Math.min(minPrices[i], prices[i]));
            // the maximum profit is the sell price minus the recorded lowest buy price
            // (i.e., a buy price that occured on a previous day)
            // note: if we buy and sell on the same day, the profit is 0 (this occurs on the 0th day),
            // and the recorded lowest price on the last day is ignored
            maxProfit = Math.max(maxProfit, -minPrices[i] + prices[i]);
        }
        return maxProfit;
    }
}