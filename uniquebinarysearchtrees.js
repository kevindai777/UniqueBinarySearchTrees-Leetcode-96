//Objective is to find the number of unique binary search trees with
//values 1 to n.

n = 5


//O(n^2) solution that uses dynamic programming.

//If the tree is empty or only 1 node, only one tree can be made
let dp = new Array(n + 1).fill(0)
dp[0] = 1
dp[1] = 1
    
//'j - 1' represents the number of elements in the left subtree
//'i - j' represents the number of elements in the right subtree
//to find the number of subtrees possible, multiply the two 
//For example, let's say we had [1,2,3,4,5,6,7]
//If 3 was the root, [1,2] is the left subtree, which is of length 3 - 1
//Then, [4,5,6,7] is the right subtree, which is of length 7 - 3
for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        dp[i] += dp[j - 1] * dp[i - j]
    }
}
    
return dp[n]