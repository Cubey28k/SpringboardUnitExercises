/** BinaryTreeNode: node for a general tree. */
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** 
   * minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. 
   */
  minDepth() {
    return this._minDepth(this.root);
  }

  _minDepth(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    if (!node.left) return this._minDepth(node.right) + 1;
    if (!node.right) return this._minDepth(node.left) + 1;
    return Math.min(this._minDepth(node.left), this._minDepth(node.right)) + 1;
  }

  /** 
   * maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. 
   */
  maxDepth() {
    return this._maxDepth(this.root);
  }

  _maxDepth(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    if (!node.left) return this._maxDepth(node.right) + 1;
    if (!node.right) return this._maxDepth(node.left) + 1;
    return Math.max(this._maxDepth(node.left), this._maxDepth(node.right)) + 1;
  }

  /** 
   * maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. 
   */
  maxSum() {
    if (!this.root) return 0;

    let maxSum = Number.MIN_SAFE_INTEGER;
    
    function dfs(node) {
      if (!node) return 0;
      
      let left = Math.max(0, dfs(node.left));
      let right = Math.max(0, dfs(node.right));
      
      maxSum = Math.max(maxSum, left + right + node.val);
      
      return Math.max(left, right) + node.val;
    }
    
    dfs(this.root);
    
    return maxSum;
  }

  /** 
   * nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. 
   */
  nextLarger(lowerBound) {
    return this._nextLarger(this.root, lowerBound);
  }

  _nextLarger(node, lowerBound) {
    if (!node) return null;
    
    if (node.val > lowerBound) {
      let left = this._nextLarger(node.left, lowerBound);
      let right = this._nextLarger(node.right, lowerBound);
      
      if (left !== null && right !== null) {
        return Math.min(left, right);
      } else if (left !== null) {
        return left;
      } else if (right !== null) {
        return right;
      } else {
        return node.val;
      }
    } else {
      return this._nextLarger(node.right, lowerBound);
    }
  }

  /** 
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents.) 
   */
  areCousins(node1, node2) {
    function findDepthAndParent(root, target, depth = 0, parent = null) {
      if (!root) return null;
      if (root === target) return { depth, parent };
      
      let leftResult = findDepthAndParent(root.left, target, depth + 1, root);
      if (leftResult) return leftResult;
      
      let rightResult = findDepthAndParent(root.right, target, depth + 1, root);
      if (rightResult) return rightResult;
      
      return null;
    }
    
    let info1 = findDepthAndParent(this.root, node1);
    let info2 = findDepthAndParent(this.root, node2);
    
    return info1 && info2 && info1.depth === info2.depth && info1.parent !== info2.parent;
  }

  /** 
   * serialize(tree): serialize the BinaryTree object tree into a string. 
   */
  static serialize(tree) {
    if (!tree.root) return '';
    
    let result = [];
    let queue = [tree.root];
    
    while (queue.length > 0) {
      let node = queue.shift();
      
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
    
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
      result.pop();
    }
    
    return result.join(',');
  }

  /** 
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. 
   */
  static deserialize(stringTree) {
    if (!stringTree) return null;
    
    let values = stringTree.split(',');
    let nodes = values.map(val => (val !== 'null') ? new BinaryTreeNode(parseInt(val)) : null);
    
    let root = nodes.shift();
    let queue = [root];
    
    for (let node of nodes) {
      let parent = queue.shift();
      
      if (node !== null) {
        parent.left = node;
        queue.push(node);
      }
      
      node = nodes.shift();
      
      if (node !== null) {
        parent.right = node;
        queue.push(node);
      }
    }
    
    return new BinaryTree(root);
  }

  /** 
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. 
   */
  lowestCommonAncestor(node1, node2) {
    function findLCA(root, nodeA, nodeB) {
      if (!root || root === nodeA || root === nodeB) return root;
      
      let left = findLCA(root.left, nodeA, nodeB);
      let right = findLCA(root.right, nodeA, nodeB);
      
      if (left && right) return root;
      
      return left ? left : right;
    }
    
    return findLCA(this.root, node1, node2);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
