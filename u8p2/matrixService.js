export class MatrixService {
    // read CodePath's explanation: https://guides.codepath.org/compsci/Flipping-an-Image
    //
    static flipImage(m) {
        // for each row
        for (let i = 0; i < m.length; i++) {
            // reverse row, and invert each element in reversed row
            m[i] = m[i].reverse().map(x => { return x ? 0 : 1 });
        }
        return m;
    }
}