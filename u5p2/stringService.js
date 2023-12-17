// read CodePath's explanation: https://guides.codepath.org/compsci/Shortest-Distance-To-a-Character
//
export class StringService {
    static shortestToChar(s, c) {
        let len = s.length;
        // create a distance tracker prepopulated with maxDistance + 1 = length of string
        let tracker = new Array(len).fill(len);
        for (let i = 0; i < len; i++) {
            // for each target character in string,
            // 1. figure out the distance between index of target character and each surrounding indexes
            // 2. minimize the distance associated with each index
            //    distance is minimizd by being closer to a target character
            if (s.charAt(i) === c) minimizeSurroundings(s, tracker, i, 0);
        }
        return tracker.toString();

        function minimizeSurroundings(str, tracker, index, currentDistance) {
            // we have reached the boundaries of the array
            // and current distance is not smaller than recorded distance
            // (ie there is another target character close by --- so just return
            if (index < 0 || index >= str.length || tracker[index] <= currentDistance) return;
            // record distance for given index
            tracker[index] = currentDistance;
            // minimize the distasnce associated with the index to left
            minimizeSurroundings(str, tracker, index - 1, currentDistance + 1);
            // minimize the distasnce associated with the index to right
            minimizeSurroundings(str, tracker, index + 1, currentDistance + 1);
        }
    }
}