export class Roman {
    static convertInt(s) {
        // create map so that int val of roman numerals are O(1) lookups
        const map = new Map();
        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);
        let ans = 0;
        for (const i of Array.from({length: s.length - 1}, (v, i) => i)) {
            // if current roman numeral is less than next roman numeral
            // (ie one of the special cases where substraction is needed)
            if (map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {
                // subtract current val of roman numeral from running total
                ans -= map.get(s.charAt(i));
            } else {
                // else add value of roman nermal from running total
                ans += map.get(s.charAt(i));
            }
        }
        // there is no roman numeral after last character in string
        // so add val of last roman numeral before returning answer
        ans += map.get(s.charAt(s.length - 1));
        return ans;
    }
}