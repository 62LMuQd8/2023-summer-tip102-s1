// read CodePath's explanation: https://guides.codepath.org/compsci/Power-of-Four
//
export class MathService {
    // give integer n, determine if n is power of 4
    // an integer is power of 4, if there exists an integer x such n = 4^x
    static isPowerOfFour(n) {
        // 4^x does not have a solution for n = 0
        if (n === 0) return false;
        // even though n = 1 is less than 4
        // there is a solution, 4^0, so n = 1 is a power of four
        if (n === 1) return true;
        // power of four statisfies this condition
        return n % 4 === 0;
    }
}