// read CodePath's explanation: https://guides.codepath.org/compsci/Unique-Number-of-Occurrences
//
export class NumberService {
    static uniqueOccurrences(arr) {
        let map = new Map();
        // count number of occurrences for each num in arr
        for (const num of arr) {
            let occ = map.get(num);
            map.set(num, occ ? occ + 1 : 1);
        }
        // count number of unique occurrences of count
        let set = new Set(map.values());
        // compare unique occurrences with number of unique nums in arr
        return map.size === set.size;
    }
}