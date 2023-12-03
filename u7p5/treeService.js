import { DataElement } from './dataElement.js';
export class TreeService {
    constructor(arr) {
        // edge case - initialize tree as null node
        // in case arr is not provided
        this.root = null;
        // convert array into tree
        if (arr) this.root = this.generateTree(arr, 0);
    }
    
      // https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/
      // order of nodes in array is same as heap data structure, see u4p1
      generateTree(arr, i) {
        // create null node
        let root = null;
        // if value at index in array is null, or index is outside of array,
        // return null node
        if (arr[i] === null || i >= arr.length) return root;
        // else create a parent node with value at index in array
        // note: the initial node of the tree is the root node,
        // all other nodes are either parent nodes (with or without children)
        root = new DataElement(arr[i]);
        // create left child node
        root.left = this.generateTree(arr, 2 * i + 1);
        // create right child node
        root.right = this.generateTree(arr, 2 * i + 2);
        // return parent node
        return root;
    }
    
      // https://www.geeksforgeeks.org/level-order-tree-traversal/
      // 1. lower bound --- height balanced
      // 2. upper bound --- resembles a complete tree when traversed by code
      //                    (null nodes act as placeholders for instantiated nodes),
      //                    complete trees are always height balanced
      static print(tree) {
        // get root of tree
        let root = tree.root;
        // get height of tree which is longest path from root to leaf
        let h = TreeService.height(root);
        // output array
        let o = [];
        // root is level 1
        // step through each level
        for (let i = 1; i <= h; i++) {
          // and add each node at the level to output array
          TreeService.buildLevel(root, i, o);
        }
        // remove trailing nulls at end of output array
        while (o[o.length - 1] === null) o.pop();
        // print output array
        console.log(JSON.stringify(o));
    }
    
      //        7
      //       / \
      //      4   8
      //     / \   \
      //    3   5   9
      //       /     \
      //      2       10
      // each node is at a level (1,2...,h)
      // so the height function returns the taller height
      // of either the left or right sub-tree plus the current level,
      // see nodes at 2 and 4, or nodes at 10 and 8 in graph
      static height(root) {
        // return 0 if null node reached
        if (root === null) return 0;
        // get height of left sub-tree
        let left = TreeService.height(root.left);
        // get height of right sub-tree
        let right = TreeService.height(root.right);
        // returns taller height of either left or right sub-tree
        // plus the current level
        return left > right ? left + 1 : right + 1;
    }
    
      // we are starting at the root node
      // and must traverse down level amount of times
      // before we can record the nodes at each level
      static buildLevel(root, level, output) {
        // we reached a null node
        // record null node and return
        if (root === null) { output.push(null); return; }
        //      ---------------------||---------------------
        //                index      || actual level in root
        //      ---------------------||---------------------
        // level when --->  5        ||          1
        // entering         4        ||          2
        // buildLevel(...)  3        ||          3
        //                  2        ||          4
        //                  1        ||          5
        // we traverse down to the correct level
        // and record node data
        if (level === 1) output.push(root.data);
        // if level index is greater than 1
        // this means we are not at the corrrect level
        // and must continue level descent
        if (level > 1) {
          // look at left child that is next level down
          TreeService.buildLevel(root.left, level - 1, output);
          // look at right child that is next level down
          TreeService.buildLevel(root.right, level - 1, output);
        }
    }

    getLevelOrder() {
      let result = [];
      // edge case when tree is empty
      if (this.root === null) return result;
      let queue = [];
      // push root node to queue
      queue.push(this.root);
      // while there are still nodes to visit
      while (queue.length !== 0) {
        // get number of nodes at current level
        let numNodesAtCurrLevel = queue.length;
        let levelNodes = [];
        // visit each node at current level
        for (let i = 0; i < numNodesAtCurrLevel; i++) {
          // and check children (next level) of each node at current level
          // if child nodes present, add to end of queue
          if (queue[0].left !== null) queue.push(queue[0].left);
          if (queue[0].right !== null) queue.push(queue[0].right);
          // record node at current level is visited
          levelNodes.push(queue.shift());
        }
        // all nodes at current level have been visited
        // add record log to result array, go to next level and repeat
        result.push(levelNodes.map(node => node.data));
      }
      return result;
    }


    // read explanation: https://guides.codepath.org/compsci/Path-Sum-III
    //
    pathSumBF(targetSum) {
      // counter for number of paths that add to target sum
      let numberOfPaths = 0;
      // traverse the tree in O(n^2) time
      // to find all paths that add to target sum
      bf(this.root, targetSum, true);
      return numberOfPaths;

      function bf(root, ts, isRoot) {
        // reached null node, return back
        if (root === null) return;
        // if running total is equal to target sum then increase counter
        // node1.data + node2.data + node3.data + ... = targetSum
        // => targetSum - (node1.data + node2.data + node3.data + ...) = 0
        if (ts - root.data === 0) numberOfPaths++;
        // check next partial sums for left and right child
        // (root, which does not change, is first element in each partial sum)
        // until entire tree is traversed
        bf(root.left, ts - root.data, false);
        bf(root.right, ts - root.data, false);
        // each remaining node in the tree becomes a root node,
        // and starting at each root node, we traverse the tree again ( O(n) for each root node )
        // this means that the first element in the partial sums changes to a new root.data value
        if (isRoot) {
          bf(root.left, ts, true);
          bf(root.right, ts, true);
        }
      }
    }

    // the method makes use of this idea (partial sums):
    //
    // consider a sum of numbers (parentheses denote subscript),
    // S = S(0) + S(1) + S(2) + ... + S(n-2) + S(n-1) +S(n)
    // if a the target sum is a subsequence of the lower half of S,
    // then we know for sure that the partial sum S contains a path to the target sum
    //
    // so every time we calc a new partial sum,
    // we can subtract the target sum from the new partial sum,
    // if we have seen difference before as a previous partial sum,
    // then we know that the new partial sum contains a path to the target sum
    //
    // note: partial sums can be seen more than once along a (root to leaf) path
    // for example, in the path sequence { S(0) = 0, S(1) = 10, S(2) = 5, S(3) = -5 }
    // we see the partial sum 10 twice { S(1) = 10} and { S(1) = 10, S(2) = 5, S(3) = -5 }
    //
    //             10
    //            /
    //           5
    //          /
    //        -5
    //
    pathSumHM(targetSum) {
      let map = new Map();
      // partial sums always begin with 0 = S(0)
      map.set(0, 1);
      return hm(this.root, 0);

      function hm(root, partialSum) {
        // null nodes do not add to partial sums
        if (root === null) return 0;
        // get new partial sum
        partialSum += root.data;
        // get number of paths for partial sum that adds up to partialSum - targetSum
        let ans = map.get(partialSum - targetSum) || 0;
        // increment the paths count for the new partial sum
        map.set(partialSum, (map.get(partialSum) || 0) + 1);
        // total number of paths equals to number of paths up to current parent node
        // plus the number of paths from left and right child nodes
        ans += hm(root.left, partialSum) + hm(root.right, partialSum);
        // decrement the paths count for the new partial sum
        // b/c we are about to backtrack up one node,
        // current partial sum will not count again towards partial sums on the way down from root
        // (in other words, paths from current node down have been explored,
        // so we remove the most recent partial sum from the sequence of partial sums)
        map.set(partialSum, map.get(partialSum) - 1);
        return ans;
      }
    }
}