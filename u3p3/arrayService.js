export class ArrayService {
    // this is conceptually the merge part of merge sort (recursive algorithm)
    // nums1 and nums2 are input lists that are already sorted in the way we want (ascending)
    // in case m = m + n, then we are not merging any nums from nums2, and return nums1 as is
    // most cases are m < m + n
    // we use three pointers for this problem
    // and we start inserting at the end to avoid overwriting nums in nums1 array
    static merge(nums1, m, nums2, n) {
        // first pointer starts at the end of list of nums to merge in nums1 array
        let endOfList1 = m - 1;
        // second pointer starts at the end of list of nums to merge in nums2 array
        let endOfList2 = n - 1;
        // third pointer starts at the end of the combined lists of nums to merge in nums1
        // note: size of nums1 is at least m + n
        let endOfDestList = m + n - 1;
        // keep merging nums from nums2 into nums1 until no more nums to merge
        while (endOfList2 >= 0) {
            // if we are not at the end of list in nums1
            // and num in nums1 is greater than num in nums2
            if (endOfList1 >= 0 && nums1[endOfList1] > nums2[endOfList2]) {
                // then insert num from nums1 into the correct position in nums1
                // note: endOfDestList >= endOfList1
                // can think of this conceptual as hole bubbling up to start of nums1 array
                // since list1 and nums1 overlap
                nums1[endOfDestList] = nums1[endOfList1];
                endOfList1--;
            } else {
                // else insert num from nums2 into the correct position in nums1
                nums1[endOfDestList] = nums2[endOfList2];
                endOfList2--;
            }
            // either branch fills a position, so endOfDestList is moved up a spot
            endOfDestList--;
        }
        return nums1;
    }
}