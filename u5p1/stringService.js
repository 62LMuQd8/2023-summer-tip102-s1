export class StringService {
    static validPalindrome(s) {
        // begin validation by checking outer most character pair, and then move inward
        return isPalindrome(s, 0, s.length - 1, 1)

        function isPalindrome(str, start, end, chance) {
            // strings with one char are valid palindromes (odd num of characters)
            // empty strings are valid palindromes (even num of characters)
            if (start >= end ) return true;
            // check if current character pair is valid palindrome
            if (str.charAt(start) === str.charAt(end))
                // current outer character pair is valid palindrome,
                // so check whether next inner character pair is valid palindrome
                return isPalindrome(str, start + 1, end - 1, chance);
            // current outer character pair is NOT valid palindrome
            // so we check whether we have another chance to valid string is palindrome
            // by removing at most one character from outer character pair
            // (and replacing the character with an inner character)
            if (chance === 0) return false;
            return isPalindrome(str, start + 1, end, chance - 1) || isPalindrome(str, start, end - 1, chance - 1);
        }
    }
}