export class MatrixService {
    // see CodePath explanation: https://guides.codepath.org/compsci/Rotate-Image
    // contains helpful diagrams to help visualize index and rotations
    //
    static rotateImage(m) {
        // start rotation from the outer ring
        // by looking at column index
        rotate(m.length, 0);
        return m;

        function rotate(numOfColumns, startColIndex) {
            // if we are at or past the center of the matrix then we are done rotating
            // Math.ceil() is used to account for odd and even column length,
            // odd column length will have a middle element,
            // even column length will evenly divide col length
            if (startColIndex >= Math.ceil(numOfColumns / 2)) return;
            // loops until numOfColumns - startColIndex - 1
            // b/c first rotation of current ring counts double
            // (rows & columns intersect at the corners of the matrix)
            for (let i = startColIndex; i < numOfColumns - startColIndex - 1; i++) {
                // element starts at top left corner, and moves right
                let a = m[startColIndex][i];
                // element starts at top right corner, and moves down
                let b = m[i][numOfColumns - startColIndex - 1];
                // element starts at bottom right corner, and moves left
                let c = m[numOfColumns - startColIndex - 1][numOfColumns - i - 1];
                // element starts at bottom left corner, and moves up
                let d = m[numOfColumns - i - 1][startColIndex];

                // a goes to position of b
                m[i][numOfColumns - startColIndex - 1] = a;
                // b goes to position of c
                m[numOfColumns - startColIndex - 1][numOfColumns - i - 1] = b;
                // c goes to position of d
                m[numOfColumns - i - 1][startColIndex] = c;
                // d goes to position of a
                m[startColIndex][i] = d;

            }
            // rotate inner ring
            rotate(numOfColumns, startColIndex + 1);
        }
    }
}