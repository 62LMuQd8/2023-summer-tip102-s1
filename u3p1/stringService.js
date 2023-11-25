export class StringService {
    static isPalindrome(s) {
        // front and back pointers
        let front = 0;
        let back = s.length - 1;
        // convert string to lowercase
        let lc = s.toLowerCase();
        // regex to validate alphanumeric characters
        const r = /[a-z0-9]/;
        // keep moving front and back pointers until they meet
        // in case string is even numbered, front meets back first
        while (front < back) {
            // keep moving front pointer until alphanumeric character reached
            while (!r.test(lc.charAt(front)) && front < back) front++;
            // keep moving back pointer until alphanumeric character reached
            while (!r.test(lc.charAt(back)) && front < back) back--;
            // string is not a palindrome if characters pointed to by front and back pointers
            // are not the same; non-alphanumeric characters are ignored, so empty strings
            // or strings without non-alphanumeric characters are valid palindromes
            if (lc.charAt(front) !== lc.charAt(back)) return false;
            front++;
            back--;
        }
        return true;
    }
}