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

    printLevelOrder() {
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
      console.log(result);
    }

    // conditions:
    // 1. p and q are guaranteed to exist
    // 2. a node is allowed to be a descendant of itself
    lowestCommonAncestor(p, q) {
      let ans = lca(this.root);
      // in case only p or q (but not both) is present in tree
      // the present node is returned as the LCA node instead of null due to condition 2
      return ans !== null ? ans.data : null;

      function lca(root) {
        // null node cannot be a LCA node
        if (root === null) return null;
        // p and q are LCA nodes (edge case, and by definition, see condition 2.)
        // visiting either nodes means a LCA node is found
        if(root.data === p || root.data === q) return root;
        // get LCA node for left subtree
        let leftLCA = lca(root.left);
        // get LCA node for right subtree
        let rightLCA = lca(root.right);
        // another possible way (think composite version of LCA edge case) to find a LCA node is if
        // p and q are found, one in each subtree
        if (leftLCA !== null && rightLCA !== null) return root;
        // since p and q are guaranteed to exist (see condition 1.)
        // and we already checked whether p and q are found (see previous if statement)
        // then either a LCA node is found, or none is found (logical combination of leftLCA & rightLCA)
        // (therefore we just check whether p or q is found in either subtree)
        return leftLCA !== null ? leftLCA : rightLCA;
      }
    }
}