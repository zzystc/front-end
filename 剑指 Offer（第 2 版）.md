# [剑指 Offer（第 2 版）](https://leetcode.cn/problem-list/xb9nqhhg/)

#### [剑指 Offer 03. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

**限制：**

```
2 <= n <= 100000
```

哈希表

python

```
class Solution:
    def findRepeatNumber(self, nums: [int]) -> int:
        dic = set()
        for num in nums:
            if num in dic: return num
            dic.add(num)
        return -1
```

js

```
var findRepeatNumber = function(nums) {
    const map = new Map()
    for (const num of nums) {
        const val = map.get(num)
        if (map.has(num)) {
            map.set(num, val + 1)
        } else {
            map.set(num, 1)
        }
    }
    for (const [key, val] of map) {
        if (val > 1) {
            return key
        }
    }
};

一次循环

var findRepeatNumber = function(nums) {
    const map = new Map()
    for (const num of nums) {
        const val = map.get(num)
        if (map.has(num)) {
            return num
        }
        map.set(num, 1)
    }
};
```

#### [剑指 Offer 04. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`。

**限制：**

```
0 <= n <= 1000
0 <= m <= 1000
```

**注意：**本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

python

```
class Solution:
    def findNumberIn2DArray(self, matrix: List[List[int]], target: int) -> bool:
        i, j = len(matrix) - 1, 0
        while i >= 0 and j < len(matrix[0]):
            if matrix[i][j] > target: i -= 1
            elif matrix[i][j] < target: j += 1
            else: return True
        return False
```

js

```
var findNumberIn2DArray = function(matrix, target) {
    const rowLen = matrix.length;
    if(!rowLen){
        return false
    }
    const colLen = matrix[0].length;
    let row = 0,
        col = colLen-1;
    while(row<=rowLen-1 && col>=0){
        if(matrix[row][col]<target){
            row++
        }else if(matrix[row][col]>target){
            col--
        }else{
            return true
        }
    }
    return false
};
```

#### [剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy." 
```

**限制：**

```
0 <= s 的长度 <= 10000
```

python

```
class Solution:
    def replaceSpace(self, s: str) -> str:
        res = []
        for c in s:
            if c == ' ': res.append("%20")
            else: res.append(c)
        return "".join(res)
```

js

解法1 replace+正则

```
var replaceSpace = function(s) {
      return s.replace(/ /g, "%20");
};
```

解法2 split+join

```
var replaceSpace = function(s) {
      return s.split(" ").join("%20");
};
```

#### [剑指 Offer 06. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

**限制：**

```
0 <= 链表长度 <= 10000
```

py

##### 方法一：递归法

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        return self.reversePrint(head.next) + [head.val] if head else []
```

##### 方法二：辅助栈法

```
class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        stack = []
        while head:
            stack.append(head.val)
            head = head.next
        return stack[::-1]
```

js

栈方法

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    if (! head) return []
    let arr = []
    while (head){
        arr.push(head.val);
        head = head.next
    } 
    return arr.reverse()
};
```

递归方法

```
var reversePrint = function (head) {
    if(!head) return []
    let result = reversePrint(head.next)
    result.push(head.val);
    return result
};
```

#### [剑指 Offer 07. 重建二叉树](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/)

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

**示例 1:**

![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**示例 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

**限制：**

```
0 <= 节点个数 <= 5000
```

**注意**：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

py

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def myBuildTree(preorder_left: int, preorder_right: int, inorder_left: int, inorder_right: int):
            if preorder_left > preorder_right:
                return None
            
            # 前序遍历中的第一个节点就是根节点
            preorder_root = preorder_left
            # 在中序遍历中定位根节点
            inorder_root = index[preorder[preorder_root]]
            
            # 先把根节点建立出来
            root = TreeNode(preorder[preorder_root])
            # 得到左子树中的节点数目
            size_left_subtree = inorder_root - inorder_left
            # 递归地构造左子树，并连接到根节点
            # 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
            root.left = myBuildTree(preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
            # 递归地构造右子树，并连接到根节点
            # 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
            root.right = myBuildTree(preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
            return root
        
        n = len(preorder)
        # 构造哈希映射，帮助我们快速定位根节点
        index = {element: i for i, element in enumerate(inorder)}
        return myBuildTree(0, n - 1, 0, n - 1)
```

js

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }
    const index = inorder.findIndex(item => item === preorder[0])
    const left = inorder.slice(0, index)
    const right = inorder.slice(index + 1)
    return {
        val : preorder[0],
        left : buildTree(preorder.slice(1, index + 1), left),
        right : buildTree(preorder.slice(index + 1), right)
    }
};
```

#### [剑指 Offer 09. 用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 `appendTail` 和 `deleteHead` ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，`deleteHead` 操作返回 -1 )

**示例 1：**

```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

**示例 2：**

```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

**提示：**

-   `1 <= values <= 10000`
-   `最多会对 appendTail、deleteHead 进行 10000 次调用`

py

```
class CQueue:
    def __init__(self):
        self.A, self.B = [], []

    def appendTail(self, value: int) -> None:
        self.A.append(value)

    def deleteHead(self) -> int:
        if self.B: return self.B.pop()
        if not self.A: return -1
        while self.A:
            self.B.append(self.A.pop())
        return self.B.pop()
```

js

```
var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);
};

CQueue.prototype.deleteHead = function() {
    if (!this.outStack.length) {
        if (!this.inStack.length) {
            return -1;
        }
        this.in2out();
    }
    return this.outStack.pop();
};

CQueue.prototype.in2out = function() {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
};
```

#### [剑指 Offer 10- I. 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/)

写一个函数，输入 `n` ，求斐波那契（Fibonacci）数列的第 `n` 项（即 `F(N)`）。斐波那契数列的定义如下：

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入：n = 2
输出：1
```

**示例 2：**

```
输入：n = 5
输出：5
```

**提示：**

-   `0 <= n <= 100`

py

```
class Solution:
    def fib(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        if n < 2:
            return n
        p, q, r = 0, 0, 1
        for i in range(2, n + 1):
            p = q
            q = r
            r = (p + q) % MOD
        return r

log n:
class Solution:
    def fib(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        if n < 2:
            return n

        def multiply(a: List[List[int]], b: List[List[int]]) -> List[List[int]]:
            c = [[0, 0], [0, 0]]
            for i in range(2):
                for j in range(2):
                    c[i][j] = (a[i][0] * b[0][j] + a[i][1] * b[1][j]) % MOD
            return c

        def matrix_pow(a: List[List[int]], n: int) -> List[List[int]]:
            ret = [[1, 0], [0, 1]]
            while n > 0:
                if n & 1:
                    ret = multiply(ret, a)
                n >>= 1
                a = multiply(a, a)
            return ret

        res = matrix_pow([[1, 1], [1, 0]], n - 1)
        return res[0][0]
```

js

```
var fib = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 2; i <= n; ++i) {
        p = q; 
        q = r; 
        r = (p + q) % MOD;
    }
    return r;
};

log n:
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    const q = [[1, 1], [1, 0]];
    const res = pow(q, n - 1);
    return res[0][0];
};

const pow = (a, n) => {
    let ret = [[1, 0], [0, 1]];
    while (n > 0) {
        if ((n & 1) === 1) {
            ret = multiply(ret, a);
        }
        n >>= 1;
        a = multiply(a, a);
    }
    return ret;
}

const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            c[i][j] = (BigInt(a[i][0]) * BigInt(b[0][j]) + BigInt(a[i][1]) * BigInt(b[1][j])) % BigInt(1000000007);
        }
    }
    return c;
}
```

