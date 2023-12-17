export class MatrixService {
    // read CodePath's explanation: https://guides.codepath.org/compsci/Pacific-Atlantic-Water-Flow
    static pacificAtlantic(heights) {
        let result = [];
        // https://stackoverflow.com/a/50002641
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#description
        // create visited map for atlantic paths and pacific paths,
        // we have 2 maps instead of 4 maps (one for each border)
        // is b/c we only need to distinguish between atlantic and pacific paths
        // (and not paths for each border)
        let atlanticMap = Array.from({ length: heights.length}, () => {
            return Array.from({ length: heights[0].length }, () => false);
        });
        let pacificMap = Array.from({ length: heights.length}, () => {
            return Array.from({ length: heights[0].length }, () => false);
        });

        // explore atlantic paths starting at right border
        for (let row = 0; row < heights.length; row++) {
            dfs(row, heights[0].length - 1, atlanticMap, 0);
        }

        // explore atlantic paths starting at bottom border
        for (let col = 0; col < heights[0].length; col++) {
            dfs(heights.length - 1, col, atlanticMap, 0);
        }

        // explore pacific paths starting at left border
        for (let row = 0; row < heights.length; row++) {
            dfs(row, 0, pacificMap, 0);
        }

        // explore pacific paths starting at top border
        for (let col = 0; col < heights[0].length; col++) {
            dfs(0, col, pacificMap, 0);
        }

        // for each location
        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                // if the location is visited both in the atlantic map and pacificMap
                // then the location is able to reach both the atlantic ocean and pacific ocean
                if (atlanticMap[r][c] && pacificMap[r][c]) result.push([r, c]);
            }
        }

        return result;

        // note: all locations visited starting from a border are able to reach back to the border (ocean)
        function dfs(r, c, map, pH) {
            // if we have walked outside of the borders, then we know we can return back,
            // or if we have already visited a location, then we also know we can return back,
            // if the location is less than the previous location, we know that water cannot
            // flow from current location to previous location, so we return back without visiting
            // the current location
            if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length
                || map[r][c] || pH > heights[r][c])
                return;

            // mark current location as visited
            map[r][c] = true;

            // from current location
            // visit each direction
            dfs(r - 1, c, map, heights[r][c]);
            dfs(r + 1, c, map, heights[r][c]);
            dfs(r, c - 1, map, heights[r][c]);
            dfs(r, c + 1, map, heights[r][c]);
        }
    }
}