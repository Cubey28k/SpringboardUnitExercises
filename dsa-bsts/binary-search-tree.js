class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      //if tree is empty, set the new node as the root
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) {
        //if value already exists
        return undefined;
      }

      if (val < current.val) {
        //if value is less than current.val, branch left
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        //if val is greater than current.val, branch right
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    //base: if the tree is empty, set new node as root
    if (!node) {
      this.root = new Node(val);
      return this;
    }

    //compare value to the current node's value
    if (val < node.val) {
      //if the value is less than, branch left
      if (!node.left) {
        //if left child is null, insert here
        node.left = new Node(val);
      } else {
        //if not null, recursively insert to left subtree
        this.insertRecursively(val, node.left);
      }
    } else {
      //if the value is greater than or equal to current node's value, branch right
      if(!node.right) {
        //if the right child is null, insert new node here
        node.right = new Node(val);
      } else {
        //if not null, recursively insert to the right subtree
        this.insertRecursively(val, node.right);
      }
    }

    return this; // return modified tree
      }
  



  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while(current) {
      if (val === current.val) {
        //if value found, return value
        return current;
        
      } else if  (val < current.val) {
        //if value is less than current node's value, go left
        current = current.left;
      } else {
        //if value is greater than current node's value, go right
        current = current.right;
      }
    }
    // if loop ends and value not found, return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    // if current node is null, value not found
    if (!node) {
      return undefined;
    }

    //compare the value to the current node's value
    if (val === node.val) {
      //if value is found return the current node value
      return node;
    } else if (val < node.val){
      //if value is less than current nodes' value, search left
      return this.findRecursively(val, node.left);
    } else {
      //if value is greater, go right
      return this.findRecursively(val, node.right);
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, result = []){ 
  //if current node is null, return the result
  if (!node) {
    return result;
  }

  //visit current node
  result.push(node.val);

  //recursively traverse the left subtree
  this.dfsPreOrder(node.left, result);

  //recursively traverse the right subtree
  this.dfsPreOrder(node.right, result);

  //return the final array of visited nodes
  return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, result = []) {
    //if the current node is null, return the result
    if(!node) {
      return result;
    }

    //recursively traverse the left subtree
    this.dfsInOrder(node.left, result);

    //visit the current node
    result.push(node.val);

    //recuvrsively traverse the right subtree
    this.dfsInOrder(node.right, result);

    //return the final array of visited nodes
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, result = []) {
    //if current node is null, return the result
    if(!node) {
      return result;
    }

    //recursively traverse the left subtree
    this.dfsPostOrder(node.left, result);

    //recuvrsively traverse the right subtree
    this.dfsPostOrder(node.right, result);

    //visit the current node
    result.push(node.val);


    //return the final array of visited nodes
    return result;
  }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];

    if (this.root) {
      queue.push(this.root);

      while (queue.length > 0) {
        const current = queue.shift(); //dequeue front node

        //visit the current node
        result.push(current.val);

        //enqueue left and right children if they exist
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    return result;
    }
  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, node = this.root) {
    if (!node) {
      //if node is not found return null
      return null;
    }

    if (val < node.val) {
      //if value is less than the current node's value, go left
      node.left = this.remove(val, node.left);
    } else if (val > node.val) {
      //if the value is greater than the current node's value, go right
      node.right = this.remove(val, node.right);
    } else {
      //if the value is equal to the current node's value, found the node to be removed
      if (!node.left) {
        //case 1: node has no left child
        return node.right;
      } else if (!node.right) {
        //case 2: node has no right child
        return node.left;
      }

      //case 3: node has two children
      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.val = minRightNode.val;
      node.right = this.remove(minRightNode.val, node.right);
    }

    return node;

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(node = this.root) {
    //helper function to calculate the height of a node
    const height = (node) => {
      if (!node) {
        return 0;
      }
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };

    //Helper function to check if a tree is balanced
    const checkBalanced = (node) => {
      if (!node) {
        return true; //empty tree is balanced
      }

      //calculate the height of the left and right subtrees
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      //check if the subtree is balanced and the hight difference is at most 1
      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        checkBalanced(node.left) &&
        checkBalanced(node.right)
      );
    };

    return checkBalanced(node);

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(node = this.root, result = {secondHighest: undefined}) {
    if (node) {
      //traverse the right subtree first (reverse in-order)
      this.findSecondHighest(node.right, result);

      //Update the result if the second highest is found
      if (result.secondHighest === undefined) {
        result.secondHighest = node.val;
      } else {
        //if the second highest is already found, stop the traversal
        return;
      }

      //traverse the left subtree
      this.findSecondHighest(node.left, result);
    }

    return result.secondHighest
  }
}

module.exports = BinarySearchTree;
