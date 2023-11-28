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

    // read CodePath explanation: https://guides.codepath.org/compsci/Distribute-Coins-in-Binary-Tree
    // see video resource for explanation: https://www.youtube.com/watch?v=yYcKQdGEdDY
    distributeCoins() {
      let moves = 0;
      distribute(this.root);
      return moves;

      function distribute(root) {
        // base case: null nodes do not contribute to net balance (null nodes do not send or receive coins)
        // return with 0 to start calculation
        if (root === null) return 0;
        // divide & conquer strategy
        // to distribute coins in a tree is to distribute coins in the left subtree and right subtree
        let leftBalance = distribute(root.left);
        let rightBalance = distribute(root.right);
        // determine the number of coins child node can send or should receive from parent node
        let netBalance = leftBalance + rightBalance;
        // nodes without a coin, need to receive a coin
        // this receiving of one coin is represented by -1
        if (root.data === 0) netBalance -= 1;
        // nodes that have exactly one coin, do not contribute to the net balance,
        // so if a child node needs a coin, and the parent node only has one coin,
        // then the net balance remains -1, and the number of moves added to the total number of moves is 1
        // b/c one coin must pass through the parent node to reach the child node,
        // and if the parent node has two coins, then the net balance is 0
        // b/c the parent node was able to send the child node a coin (or child node received a coin)
        // based on this reasoning, the magnitude of the net balance
        // represents the min number of moves at a given node needed to balance coins across the tree
        if (root.data === 1) netBalance -= 0;
        // nodes with excess coins, can send excess coins
        // this sending of an excess coin is represented by +1
        if (root.data > 1) netBalance += root.data - 1;
        // add min number of moves at node to total number of moves
        moves += Math.abs(netBalance);
        // tell parent node the number of coins child node can send or needs
        // so that parent node can properly distribute the number of coins across the tree
        return netBalance;
      }
    }
}