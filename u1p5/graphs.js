// read CodePath's explanation: https://guides.codepath.org/compsci/Destination-City
//
export class Graphs {
    // assuming graphs are linear, there are no cycles
    static destCity(paths) {
        const set = new Set();
        // add start cities to a map to O(1) lookups
        for (const path of paths) {
            set.add(path[0]);
        }
        for (const path of paths) {
            let dest = path[1];
            // if end city does not appear as a start city
            // then we have found the dest city
            if (!set.has(dest)) return dest;
        }
        return "";
    }
}