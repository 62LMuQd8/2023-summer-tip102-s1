export class DynamicService {
    // read CodePath explanation: https://guides.codepath.org/compsci/Pascal%27s-Triangle
    //
    static generateTriangleIterative(numRows) {
        let pascalsTriangle = [];
        let currentRow = [];
        // construct coefficients for each row
        // note: numRows is number of rows, so first number starts at 1
        for (let n = 1; n <= numRows; n++) {
            // start row with 1 at the beginning of array
            // with coefficients from previous row
            currentRow.unshift(1);
            // starting at the next coefficient
            for (let i = 1; i < currentRow.length - 1; i++) {
                // the current coefficient is sum of the two coefficients above it
                // (currentRow holds the coefficients of the previous row,
                // we are overwriting the coefficients of the previous row
                // with the coefficients of the current row b/c the coefficients of the current row
                // are derived from the coefficients of the previous row,
                // we do not need to reuse the previous coefficients that we overwrite)
                // for example, in the following Pascal's triangle (up to 7th row)
                //
                // 1
                // 1  1
                // 1  2  1
                // 1  3  3  1
                // 1  4  6  4  1
                // 1  5 10 10  5  1
                // 1  6 15 20 15  6  1
                //
                // every row (except for the first 2 rows) can be calculated in the following way:
                // 1. add 1 in front of the previous row
                // 2. start at the next coefficient (number after inserting 1) in the previous row
                // 3. the new coefficient is the current coefficient in the previous row plus
                //    the next coefficient in the previous row
                // 4. continue moving across the previous row, adding and overwriting the coefficients
                //    until the last coefficient which should always be a 1
                //
                currentRow[i] = currentRow[i] + currentRow[i + 1];
            }
            // append current row to the resulting triangle
            pascalsTriangle.push(JSON.parse(JSON.stringify(currentRow)));
        }
        return pascalsTriangle;
    }

    // note: tail recursion can also be used here for more elegant code,
    // https://stackoverflow.com/a/10628914 (not implemented in the code below),
    // which transforms the approach to be more like top down than bottom up
    // (distinctions that may be rule of thumb or convention rather than rules)
    //
    static printTriangleRecursion(numRows) {
        pascal(numRows);
        
        function pascal(n) {
            // base case
            if (n === 1) {
                // first row has only one coefficient which is 1
                let baseRow = [1];
                // print base row
                console.log(baseRow);
                // go to next row
                return baseRow;
            }
            // get previous row
            let previousRow = pascal(n - 1);
            // add 1 to beginning of previous row
            previousRow.unshift(1);
            // starting at next coefficient (after inserting 1) from previous row
            for (let i = 1; i < previousRow.length - 1; i++) {
                // the new coefficients are the sums of the above coefficients
                previousRow[i] = previousRow[i] + previousRow[i + 1];
            }
            // print current row
            console.log(previousRow);
            // return current row (becomes previous row in calling function)
            return previousRow;
        }
    }
}