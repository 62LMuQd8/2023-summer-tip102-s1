export class MatrixService {
    // the transpose of the following matrix,
    //
    //      1     2     3
    //   -------------------
    // a |  4  |  7  |  2  |
    //   -------------------
    // b |  6  |  1  |  3  |
    //   -------------------
    //
    // is this transposed matrix,
    //
    //      a     b
    //   -------------
    // 1 |  4  |  6  |
    //   |-----------|
    // 2 |  7  |  1  |
    //   |-----------|
    // 3 |  2  |  3  |
    //   -------------
    //
    // element a1 in the first matrix
    // becomes element 1a in the second matrix
    //
    // in other words, elements in the first row of the first matrix
    // becomes the elements in the first column of the second matrix
    //
    static transpose(m) {
        let newMatrix = [];
        let rowLength = m.length;
        let colLength = m[0].length;
        // for each element in m
        // row by row, element by element
        for (let i = 0; i < rowLength; i++) {
            for (let j = 0; j < colLength; j++) {
                // if the new row exists
                if (newMatrix[j]) {
                    // insert element into end of new row
                    newMatrix[j].push(m[i][j]);
                } else {
                    // else create the new row with element inserted
                    newMatrix.push([m[i][j]]);
                }
            }
        }
        return newMatrix;
    }
}