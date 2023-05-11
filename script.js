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

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

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

  buildTree(array) {
    let mid = Math.floor(array.length / 2);
    let middle = array.splice(mid, 1);
    let left = array.splice(0, mid);
    let right = array;
    let current = this.root;
    while (this.root === null) {
      this.root = current;
      current = new Node(Number(middle));
      if (array.length > 1 && middle < current) {
        current.left = this.buildTree(left);
      }
      if (array.length > 1 && middle > current) {
        current.right = this.buildTree(right);
      }
      console.log(current);
    }

    return current;
    // if (current.left === null) {
    //   current.left = this.buildTree(left);
    // }

    // if (current.left === null && left.length !== 0) {

    //   return current.left = this.buildTree(left);

    // }
    // console.log(current);
  }

  insert(data) {
    const node = this.root;
    const prettyPrint = (node, prefix = "", isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };

    if (!node) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node, data) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left, data);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right, data);
          }
        } else {
          return null;
        }
      };
      return searchTree(this.root, data), prettyPrint(this.root);
    }
  }
}

let nums = mergeSort(array);
console.log(nums);
let bst = new Tree();

nums.forEach((element) => {
  bst.insert(element);
});

// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(2);
// bst.insert(0);
// console.log(bst);

// bst.buildTree(nums);
// prettyPrint();
let number = new Tree();
number.buildTree(nums);
