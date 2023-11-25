export class StringService {
    static reverse(s) {
        let arr = [];
        // start word as empty string
        let temp = '';
        // look at each character in string
        for (const c of s) {
            // if we have not reached a word break
            if (c !== ' ') {
                // then build word
                temp += c;
            // else we are at a word break
            } else if (temp) {
                // add word to array
                arr.push(temp);
                temp = '';
            }
        }
        // check if there is word in temp buffer
        // (ie string ends with word instead of word break)
        // if so, add to arr
        if (temp) {
            arr.push(temp);
        }
        // two pointer method
        let l = 0;
        let r = arr.length - 1;
        // reverse words in array by swapping first and last words of effective area
        // keep swapping until pointers meet or go past one another
        while (l < r) {
            let swap = arr[l];
            arr[l] = arr[r];
            arr[r] = swap;
            l++;
            r--;
        }
        // return reversed string by using native join function of array class
        return arr.join(' ');
    }
}