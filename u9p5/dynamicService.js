export class DynamicService {
    // read CodePath explanation: https://guides.codepath.org/compsci/Pascal%27s-Triangle-II
    //
    static generateTriangleIterative(rowIndex) {
        let currentIndexRow = [];
        // construct coefficients for each index row
        for (let i = 0; i <= rowIndex; i++) {
            // start index row with 1 at the beginning of array
            // with coefficients from previous index row
            currentIndexRow.unshift(1);
            // starting at the next coefficient
            for (let j = 1; j < currentIndexRow.length - 1; j++) {
                // the current coefficient is sum of the two coefficients above it
                // (currentIndexRow holds the coefficients of the previous index row,
                // we are overwriting the coefficients of the previous index row
                // with the coefficients of the current index row b/c the coefficients of the current index row
                // are derived from the coefficients of the previous index row,
                // we do not need to reuse the previous coefficients that we overwrite)
                // for example, in the following Pascal's triangle (up to 6th index row)
                //
                // 1
                // 1  1
                // 1  2  1
                // 1  3  3  1
                // 1  4  6  4  1
                // 1  5 10 10  5  1
                // 1  6 15 20 15  6  1
                //
                // every index row (except for the first 2 index rows) can be calculated in the following way:
                // 1. add 1 in front of the previous index row
                // 2. start at the next coefficient (number after inserting 1) in the previous index row
                // 3. the new coefficient is the current coefficient in the previous index row plus
                //    the next coefficient in the previous index row
                // 4. continue moving across the previous index row, adding and overwriting the coefficients
                //    until the last coefficient which should always be a 1
                //
                currentIndexRow[j] = currentIndexRow[j] + currentIndexRow[j + 1];
            }
        }
        return currentIndexRow;
    }

    // note: tail recursion can also be used here for more elegant code,
    // https://stackoverflow.com/a/10628914 (not implemented in the code below),
    // which transforms the approach to be more like top down than bottom up
    // (distinctions that may be rule of thumb or convention rather than rules)
    //
    static generateTriangleRecursion(rowIndex) {
        return pascal(rowIndex);
        
        function pascal(i) {
            // base case: first index row has only one coefficient which is 1
            if (i === 0) return [1];
            // get previous row
            let previousRow = pascal(i - 1);
            // add 1 to beginning of previous row
            previousRow.unshift(1);
            // starting at next coefficient (after inserting 1) from previous index row
            for (let j = 1; j < previousRow.length - 1; j++) {
                // the new coefficients are the sums of the above coefficients
                previousRow[j] = previousRow[j] + previousRow[j + 1];
            }
            // return current index row (becomes previous index row in calling function)
            return previousRow;
        }
    }
}