// Merge Sort functions to sort numbers in array before BST
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] === right[0]) {
      arr.splice(left.shift());
    } else if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  let left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}


//BST contructor
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  
  buildTree(array, start, end) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let current = new Node(array[mid]);
    
    current.left = this.buildTree(array, start, mid - 1);
    current.right = this.buildTree(array, mid + 1, end);
    
    if (!this.root) {
      this.root = current;
    }
    // let pretty = this.prettyPrint(current);
    return current;
  }
  
  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    };
  };
  insert(data) {
    let newNode = new Node(data);
  
    if (!this.root) {
      this.root = newNode;
      return;
    }
  
    let current = this.root;
    let parent = null;
  
    while (current) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        // node with same value already exists in the tree
        return;
      }
    }
  
    if (data < parent.data) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let nums = mergeSort(array);

console.log(nums);
let number = new Tree();
let root = number.buildTree(nums, 0, nums.length - 1);

let pretty = number.prettyPrint(root);