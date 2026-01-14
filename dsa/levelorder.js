console.log("Level Order Traversal of a Binary Tree");
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let root = new TreeNode(2);
root.left = new TreeNode(3);
root.right = new TreeNode(4);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(6);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(8);


var levelOrder = function(root){
    let q =[root];
    let ans = [];
    let level =0;
    while(q.length){
        let levelarr =[];
        let levelSize = q.length;
        for(let i=0;i<levelSize;i++){
            let curr = q.shift();
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            levelarr.push(curr.val)

        }
        ans.push(levelarr)

    }
    return ans;
}
console.log(levelOrder(root));