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
    return current;
  }

  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert(data, root) {
    if (root === null) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this.insert(data, root.left);
      // console.log(root.data)
    }
    if (data > root.data) {
      root.right = this.insert(data, root.right);
    }
    return root;
  }

  // delete(data, root) {
  //   if (root === null) {
  //     return;
  //   }
  //   if (data === root.data) {
  //     return (root = root.right);
  //   }
  //   if (data < root.data) {
  //     root.left = delete (data, root.left);
  //   }
  //   if (data > root.data) {
  //     root.right = delete (data, root.right);
  //   } else {
  //     if (root.left === null) {
  //       return root.right;
  //     } else if (root.right === null) {
  //       return root.left;
  //     }
  //   }
  //   return root;
  // }
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let nums = mergeSort(array);
console.log(nums);
let number = new Tree();
let root = number.buildTree(nums, 0, nums.length - 1);

// Insert function
number.insert(6, root);
// Delete function
// number.delete(4, root);
let pretty = number.prettyPrint(root);
