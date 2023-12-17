// read CodePath's explanation: https://guides.codepath.org/compsci/Pow(x,n)
//
export class MathService {
    // this makes use of exponential rules, ie,
    //
    // b^(m + n) = b^m * b^n     and     b^(-n) = 1/(b^n)
    //
    // we use divide & conquer approach to solve
    // to make recursion easier, if we make m = n
    // then we only need to solve for one exponential
    //
    // to find 4^7, we only look at one side of tree, ie,
    //
    //  4^7 = 4^3 * 4^3 * 4              (4^7)
    //                                  /     \
    //  4^3 = 4^1 * 4^1 * 4        (4^3)       (4^3)
    //                            /     \     /     \
    //      base case         (4^1)    (4^1) (4^1)   (4^1)
    //
    static pow(x, n) {
        // return base when power is 1
        if (Math.abs(n) === 1) return x;
        // continue to eval smaller and smaller exponential
        let num = this.pow(x, Math.trunc(n / 2));
        // if power is positive
        if (n >= 0) {
            // if power is even
            if (n % 2 === 0) return num * num;
            // if power is odd
            if (n % 2 === 1) return num * num * x;
        // then power is negative
        } else {
            // if power is even
            if (Math.abs(n) % 2 === 0) return 1 / (num * num);
            // if power is odd
            if (Math.abs(n) % 2 === 1) return 1 / (num * num * x);
        }
    }
}