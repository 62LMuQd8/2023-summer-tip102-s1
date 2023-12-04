export class MatrixService {
    // see CodePath explanation: https://guides.codepath.org/compsci/Spiral-Matrix
    //
    // a good idea is to consider the following when adding unit tests:
    //
    // 1. when m and n both equal 1, in other words, matrix contains only 1 element
    // 2. when either m or n equals 1, in other words, the matrix is either horizontal or vertial
    // 3. when m and n both are greater than 1
    //
    static getSpiralOrder(m) {
        let result = [];
        // set outer perimeter boundaries
        let top = 0
        let left = 0;
        let right = m[0].length - 1;
        let bottom = m.length - 1;
        // keep walking around perimeter at each level until all elements visited
        while (result.length < m.length * m[0].length) {
            // start at top left and visit each element from left to right,
            // (in other words, first try walking in the horizontal axis)
            for (let i = left; i <= right; i++) result.push(m[top][i]);
            
            // then from the top right, visit each element from top to bottom
            // (in other words, then try walking in the vertical axis)
            for (let i = top + 1; i <= bottom; i++) result.push(m[i][right]);

            // (we have tried to walk in the horizontal axis, from left to right
            // and we have tried to walk in the vertical axis, from top to bottom)
            
            // and from the bottom right, visit each element from right to left
            // (in other words, if we are at a different row than when we traversed from left to right,
            // then visit each element from left to right)
            if (top < bottom) {
                for (let i = right - 1; i >= left; i--) result.push(m[bottom][i]);
            }

            // finally from bottom left, vistion each element from bottom to top
            // (in other words, if we are at a different column than when we traversed from top to bottom,
            // then visit each element from bottom to top)
            if (left < right) {
                for (let i = bottom - 1; i > top; i--) result.push(m[i][left]);
            }

            // go to next inner perimeter
            left++;
            right--;
            top++;
            bottom--;
        }
        return result;
    }
}