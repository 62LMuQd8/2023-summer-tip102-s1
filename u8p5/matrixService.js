export class MatrixService {
    // read CodePath explanation: https://guides.codepath.org/compsci/Search-a-2D-Matrix
    //
    // conditions:
    // 1. each row is sorted in ascending order
    // 2. the first integer of each row is greater than the last integer in the previous row
    // 3. we must use binary search to implement function
    //
    static searchMatrix(m, target) {
        // indices of start row and end row of matrix
        let r1 = 0
        let r2 = m.length - 1;
        // indices of start column and end column of each row in matrix
        // (each row has same start column and end column)
        let c1 = 0;
        let c2 = m[0].length - 1;
        // index of row that may contain target value
        let row = null;

        // keep searching until row indices go past one another
        while (r1 <= r2) {
            // get row midpoint
            let mid = Math.trunc((r1 + r2) / 2);
            // if target is less than first integer in row
            if (target < m[mid][c1]) {
                // then target is in top half
                r2 = mid - 1;
                continue;
            }
            // if target is greater than last integer in row
            if (target > m[mid][c2]) {
                // then target is in bottom half
                r1 = mid + 1;
                continue;
            }
            // if target is between and inclusive of first and last integers in row
            if (target >= m[mid][c1] && target <= m[mid][c2]) {
                // then target is in the current row
                row = mid;
                break;
            }
        }

        // target is not in matrix if row binary search did not result in a hit
        if (row === null) return false;

        // keep searching until column indices go past one another
        while (c1 <= c2) {
            // get column midpoint
            let mid = Math.trunc((c1 + c2) / 2);
            // if target is equal to integer at midpoint, we have a hit
            if (m[row][mid] === target) return true;
            // if target is less than integer at midpoint
            if (target < m[row][mid]) {
                // then target is in top half
                c2 = mid - 1;
                continue;
            }
            // if target is greater than or equal to integer at midpoint
            if (target >= m[row][mid]) {
                // then target is in bottom half
                c1 = mid + 1;
                continue;
            }
        }

        // column binary search did not result in a hit
        // target does not exist in matrix
        return false;
    }
}