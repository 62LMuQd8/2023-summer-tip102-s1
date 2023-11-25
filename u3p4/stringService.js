export class StringService {
    static isSubsequence(s, t) {
        // two pointer method
        // subsequence pointer
        let sPointer = 0;
        // template pointer
        let tPointer = 0;
        // while either strings still have characters to compare
        while (sPointer < s.length && tPointer < t.length) {
            // if character in subsequence is equal to character in template
            // then go to next character in subsequence
            if (s.charAt(sPointer) === t.charAt(tPointer)) sPointer++;
            // go to next character in template
            // characters not in the subsequence are effectively ignored
            tPointer++;
        }
        // template contains subsequence if we were able to make it through
        // to the end of the subsequence charaters
        return sPointer === s.length;
    }
}