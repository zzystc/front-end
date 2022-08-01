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

#### [剑指 Offer 10- II. 青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 `n` 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入：n = 2
输出：2
```

**示例 2：**

```
输入：n = 7
输出：21
```

**示例 3：**

```
输入：n = 0
输出：1
```

**提示：**

-   `0 <= n <= 100`

注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/

py

```
class Solution:
    def numWays(self, n: int) -> int:
        a, b = 1, 1
        for _ in range(n):
            a, b = b, a + b
        return a % 1000000007
```

js

```
var numWays = function(n) {
    if(n == 0) {return 1}
    if(n <= 2) {return n}
    let t1 = 1, t2 = 2
    for(let i = 3; i <= n; i++){
        let t = t1 + t2
        t1 = t2
        t2 = t%1000000007
    }
    return t2
};
```

#### [剑指 Offer 11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 **重复** 元素值的数组 `numbers` ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的**最小元素**。例如，数组 `[3,4,5,1,2]` 为 `[1,2,3,4,5]` 的一次旋转，该数组的最小值为 1。 

注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` 旋转一次 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。

**示例 1：**

```
输入：numbers = [3,4,5,1,2]
输出：1
```

**示例 2：**

```
输入：numbers = [2,2,2,0,1]
输出：0
```

**提示：**

-   `n == numbers.length`
-   `1 <= n <= 5000`
-   `-5000 <= numbers[i] <= 5000`
-   `numbers` 原来是一个升序排序的数组，并进行了 `1` 至 `n` 次旋转

注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

py

```
class Solution:
    def minArray(self, numbers: List[int]) -> int:
        low, high = 0, len(numbers) - 1
        while low < high:
            pivot = low + (high - low) // 2
            if numbers[pivot] < numbers[high]:
                high = pivot 
            elif numbers[pivot] > numbers[high]:
                low = pivot + 1
            else:
                high -= 1
        return numbers[low]
```

js

```
var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (numbers[pivot] < numbers[high]) {
            high = pivot;
        } else if (numbers[pivot] > numbers[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return numbers[low];
};
```

#### [剑指 Offer 12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

![img](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

**示例 1：**

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

**示例 2：**

```
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
```

**提示：**

-   `1 <= board.length <= 200`
-   `1 <= board[i].length <= 200`
-   `board` 和 `word` 仅由大小写英文字母组成

**注意：**本题与主站 79 题相同：https://leetcode-cn.com/problems/word-search/

py

```
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def check(i: int, j: int, k: int) -> bool:
            if board[i][j] != word[k]:
                return False
            if k == len(word) - 1:
                return True
            
            visited.add((i, j))
            result = False
            for di, dj in directions:
                newi, newj = i + di, j + dj
                if 0 <= newi < len(board) and 0 <= newj < len(board[0]):
                    if (newi, newj) not in visited:
                        if check(newi, newj, k + 1):
                            result = True
                            break
            
            visited.remove((i, j))
            return result

        h, w = len(board), len(board[0])
        visited = set()
        for i in range(h):
            for j in range(w):
                if check(i, j, 0):
                    return True
        
        return False
```

js

```
var exist = function(board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if (board[i][j] != s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newi = i + dx, newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
```

#### [剑指 Offer 13. 机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)

地上有一个m行n列的方格，从坐标 `[0,0]` 到坐标 `[m-1,n-1]` 。一个机器人从坐标 `[0, 0] `的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

**示例 1：**

```
输入：m = 2, n = 3, k = 1
输出：3
```

**示例 2：**

```
输入：m = 3, n = 1, k = 0
输出：1
```

**提示：**

-   `1 <= n,m <= 100`
-   `0 <= k <= 20`

##### 方法一：广度优先搜索

py

```
def digitsum(n):
    ans = 0
    while n:
        ans += n % 10
        n //= 10
    return ans

class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        from queue import Queue
        q = Queue()
        q.put((0, 0))
        s = set()
        while not q.empty():
            x, y = q.get()
            if (x, y) not in s and 0 <= x < m and 0 <= y < n and digitsum(x) + digitsum(y) <= k:
                s.add((x, y))
                for nx, ny in [(x + 1, y), (x, y + 1)]:
                    q.put((nx, ny))
        return len(s)
```

js

```
var movingCount = function(m, n, k) {
    const queue = [[0, 0]];
    let res = 0, i = 1;
    const isVisited = {};
    while(i) {
        while(i--) {
            const [i, j] = queue.shift();
            const key = i + '-' + j;
            if (i >= m || j >= n || isVisited[key] || ('' + i + j).split('').reduce((t, i) => t + +i, 0) > k) continue;
            res++;
            isVisited[key] = true;
            queue.push([i + 1, j], [i, j + 1])
        }
        i = queue.length;
    }
    return res;
};
```

##### 方法二：递推

```
def digitsum(n):
    ans = 0
    while n:
        ans += n % 10
        n //= 10
    return ans

class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        vis = set([(0, 0)])
        for i in range(m):
            for j in range(n):
                if ((i - 1, j) in vis or (i, j - 1) in vis) and digitsum(i) + digitsum(j) <= k:
                    vis.add((i, j))
        return len(vis)
```

#### [剑指 Offer 14- I. 剪绳子](https://leetcode.cn/problems/jian-sheng-zi-lcof/)

给你一根长度为 `n` 的绳子，请把绳子剪成整数长度的 `m` 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 `k[0],k[1]...k[m-1]` 。请问 `k[0]*k[1]*...*k[m-1]` 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

**示例 1：**

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

**示例 2:**

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

**提示：**

-   `2 <= n <= 58`

注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/

py

```
class Solution:
    def cuttingRope(self, n: int) -> int:
        if n <= 3: return n - 1
        a, b = n // 3, n % 3
        if b == 0: return int(math.pow(3, a))
        if b == 1: return int(math.pow(3, a - 1) * 4)
        return int(math.pow(3, a) * 2)
```

js

```
var cuttingRope = function (n) {
    // 记忆化：哈希表存储计算结果，避免重复计算，预先放入 n = 2 和 3 的结果
    let hashMap = new Map([[2, 1], [3, 2]])
    const recordN = (n) => {
        // 已有结果直接返回结果
        if (hashMap.has(n)) {
            return hashMap.get(n);
        } else {
            let res = -1;
            // 长度为 n 剪一刀，接下来可以选择继续剪或不剪
            // 剪一刀长度为 i 时，此时最大值为 Max(i * (n - i), i * recordN(n - i))
            // recordN(n) 记录的是长度为 n 时的所有情况，所以需要使用 res 累计比较
            for (let i = 1; i < n; i++) {
                res = Math.max(res, i * (n - i), i * recordN(n - i));
            }
            hashMap.set(n, res);
            return res
        }
    }
    return recordN(n)
};
```

#### [剑指 Offer 14- II. 剪绳子 II](https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/)

给你一根长度为 `n` 的绳子，请把绳子剪成整数长度的 `m` 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 `k[0],k[1]...k[m - 1]` 。请问 `k[0]*k[1]*...*k[m - 1]` 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

**示例 2:**

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

**提示：**

-   `2 <= n <= 1000`

注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/

py

```
class Solution:
    def cuttingRope(self, n: int) -> int:
        if n <= 3: return n - 1
        a, b, p, x, rem = n // 3 - 1, n % 3, 1000000007, 3 , 1
        while a > 0:
            if a % 2: rem = (rem * x) % p
            x = x ** 2 % p
            a //= 2
        if b == 0: return (rem * 3) % p # = 3^(a+1) % p
        if b == 1: return (rem * 4) % p # = 3^a * 4 % p
        return (rem * 6) % p # = 3^(a+1) * 2  % p
```

js

```
var cuttingRope = function (n) {
    if (n <= 3) return n - 1
    let cnt = Math.floor(n / 3)
    let left = n % 3
    // 重写pow函数
    const pow = (basic, exp) => {
        let tmp = 1
        while (exp > 0) {
            if (tmp * basic > 1000000007) {
                tmp = tmp * basic % 1000000007
            } else {
                tmp = tmp * basic
            }
            exp -= 1
        }
        return tmp
    }
    if (left == 0) return pow(3, cnt)
    else if (left == 1) return pow(3, cnt - 1) * 4 % 1000000007
    else if (left == 2) return pow(3, cnt) * left % 1000000007
};
```

#### [剑指 Offer 15. 二进制中1的个数](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 [汉明重量](http://en.wikipedia.org/wiki/Hamming_weight)).）。

**提示：**

-   请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
-   在 Java 中，编译器使用 [二进制补码](https://baike.baidu.com/item/二进制补码/5295284) 记法来表示有符号整数。因此，在上面的 **示例 3** 中，输入表示有符号整数 `-3`。

**示例 1：**

```
输入：n = 11 (控制台输入 00000000000000000000000000001011)
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
```

**示例 2：**

```
输入：n = 128 (控制台输入 00000000000000000000000010000000)
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
```

**示例 3：**

```
输入：n = 4294967293 (控制台输入 11111111111111111111111111111101，部分语言中 n = -3）
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
```

**提示：**

-   输入必须是长度为 `32` 的 **二进制串** 。

注意：本题与主站 191 题相同：https://leetcode-cn.com/problems/number-of-1-bits/

py

```
class Solution:
    def hammingWeight(self, n: int) -> int:
        ret = sum(1 for i in range(32) if n & (1 << i)) 
        return ret
```

js

```
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};
```

#### [剑指 Offer 16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

**示例 1：**

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

**示例 2：**

```
输入：x = 2.10000, n = 3
输出：9.26100
```

**示例 3：**

```
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

**提示：**

-   `-100.0 < x < 100.0`
-   `-231 <= n <= 231-1`
-   `-104 <= xn <= 104`

注意：本题与主站 50 题相同：https://leetcode-cn.com/problems/powx-n/

py

```
class Solution:
    def myPow(self, x: float, n: int) -> float:
        def quickMul(N):
            if N == 0:
                return 1.0
            y = quickMul(N // 2)
            return y * y if N % 2 == 0 else y * y * x
        
        return quickMul(n) if n >= 0 else 1.0 / quickMul(-n)
```

js

```
var myPow = function(x, n) {
    //如果指数是0
    if(n === 0){
        return 1;
    }
    //如果指数是1 返回x
    if(n === 1){
        return x;
    }

    //n绝对值，不能为负
    let absn =Math.abs(n);
    //结果不能为0
    let result = 1;
    //不能为0
    while(absn){
        //判断奇偶数
        //absn 也就是 n值，根据最右位是否为1来判断
        //3的二进： 11
        //1的二进： 01
        //是成立的
        if(absn & 1){
            //将当前x累乘到result
            result = result * x;
        }
        
        x = x*x;
        //缩小范围
        absn = Math.floor(absn/2); 

    }

        //是否是负指数
    const isNegative = n < 0;

    return isNegative ? 1 / result : result
};
```

#### [剑指 Offer 17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

**示例 1:**

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

说明：

-   用返回一个整数列表来代替打印

-   n 为正整数

    py

```
class Solution:
    def printNumbers(self, n: int) -> List[int]:
        res = []
        for i in range(1, 10 ** n):
            res.append(i)
        return res
```

js

```
var printNumbers = function(n) {
    var a = Math.pow(10,n);
    var arr = [];
    for(var i = 1;i<a;i++){
        arr.push(i);
        }
    return arr;
};
```

#### [剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

**注意：**此题对比原题有改动

**示例 1:**

```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2:**

```
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

**说明：**

-   题目保证链表中节点的值互不相同
-   若使用 C 或 C++ 语言，你不需要 `free` 或 `delete` 被删除的节点

```
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if head.val == val: return head.next
        pre, cur = head, head.next
        while cur and cur.val != val:
            pre, cur = cur, cur.next
        if cur: pre.next = cur.next
        return head
```

js

```
var deleteNode = function(head, val) {
    let c=new ListNode(null);
    c.next=head;
    let r=c;
    while(head){
        if(head.val==val){
            break;
        }
        head=head.next
        c=c.next
    }
    //如果有的话
    if(c.next){
        c.next=c.next.next
    }
    return r.next;
};
```

#### [剑指 Offer 19. 正则表达式匹配](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)

请实现一个函数用来匹配包含`'. '`和`'*'`的正则表达式。模式中的字符`'.'`表示任意一个字符，而`'*'`表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串`"aaa"`与模式`"a.a"`和`"ab*ac*a"`匹配，但与`"aa.a"`和`"ab*a"`均不匹配。

**示例 1:**

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

**示例 2:**

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例 3:**

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

**示例 4:**

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

**示例 5:**

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```

-   `s` 可能为空，且只包含从 `a-z` 的小写字母。
-   `p` 可能为空，且只包含从 `a-z` 的小写字母以及字符 `.` 和 `*`，无连续的 `'*'`。

注意：本题与主站 10 题相同：https://leetcode-cn.com/problems/regular-expression-matching/

```
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)

        def matches(i: int, j: int) -> bool:
            if i == 0:
                return False
            if p[j - 1] == '.':
                return True
            return s[i - 1] == p[j - 1]

        f = [[False] * (n + 1) for _ in range(m + 1)]
        f[0][0] = True
        for i in range(m + 1):
            for j in range(1, n + 1):
                if p[j - 1] == '*':
                    f[i][j] |= f[i][j - 2]
                    if matches(i, j - 1):
                        f[i][j] |= f[i - 1][j]
                else:
                    if matches(i, j):
                        f[i][j] |= f[i - 1][j - 1]
        return f[m][n]
```

js

```
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //dp[i][j]表示S串前i个字符和P串前j个字符是否匹配
    //如果P最后一个字符是正常字符：
    //     - dp[i][j]=dp[i-1][j-1]
    //如果P最后一个字符是"."：
    //     - dp[i][j]=dp[i-1][j-1]
    //如果P最后一个字符是"*"：
    //     - dp[i][j]=dp[i][j-2], 看"x*"，*前符号不相等
    //     - dp[i][j]=dp[i-1][j], 看"x*"，*前符号相等或为"."
    if (s.length == 0 && p.length == 0) return true;
    if (p.length == 0) return false;//P为空就不可能匹配
    if (s.length == 0) {
        if (p.charAt(p.length - 1) == '*') return isMatch(s, p.substring(0, p.length - 2));
        return false;
    }
    if (p.charAt(p.length - 1) != '.' && p.charAt(p.length - 1) != '*') {
        return p.charAt(p.length - 1) == s.charAt(s.length - 1) && isMatch(s.substring(0, s.length - 1), p.substring(0,p.length - 1));
    }
    else if (p.charAt(p.length - 1) == '.') return isMatch(s.substring(0, s.length - 1), p.substring(0, p.length - 1));
    else if (p.charAt(p.length - 1) == '*') {
        //p最后一个字符是*
        //相等：
        //  如果p的*前字符与s最后字符相等 或 p的*前是"."
        if (p.charAt(p.length - 2) == s.charAt(s.length - 1) || p.charAt(p.length - 2) == '.')
            //这里要注意“||”之后这句，就是不看的可能性，如果不加的话会有几十个用例过不去
            //原因是比如s=aaa, p=ab*a*c*a，中间的a*会直接把s前面两个a全部递归完，这样递归返回的时候就是false，
            //然而实际上a*不确定有多少个a，需要有“不看”的可能性，也就是直接丢弃x*的情况
            return isMatch(s.substring(0, s.length - 1), p)||isMatch(s, p.substring(0, p.length - 2));
        //不等
        //  直接废弃P串最后2位
        return isMatch(s, p.substring(0, p.length - 2));
    }
};
```

#### [剑指 Offer 20. 表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/)

请实现一个函数用来判断字符串是否表示**数值**（包括整数和小数）。

**数值**（按顺序）可以分成以下几个部分：

1.  若干空格
2.  一个 **小数** 或者 **整数**
3.  （可选）一个 `'e'` 或 `'E'` ，后面跟着一个 **整数**
4.  若干空格

**小数**（按顺序）可以分成以下几个部分：

1.  （可选）一个符号字符（`'+'` 或 `'-'`）
2.  下述格式之一：
    1.  至少一位数字，后面跟着一个点 `'.'`
    2.  至少一位数字，后面跟着一个点 `'.'` ，后面再跟着至少一位数字
    3.  一个点 `'.'` ，后面跟着至少一位数字

**整数**（按顺序）可以分成以下几个部分：

1.  （可选）一个符号字符（`'+'` 或 `'-'`）
2.  至少一位数字

部分**数值**列举如下：

-   `["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]`

部分**非数值**列举如下：

-   `["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]`

**示例 1：**

```
输入：s = "0"
输出：true
```

**示例 2：**

```
输入：s = "e"
输出：false
```

**示例 3：**

```
输入：s = "."
输出：false
```

**示例 4：**

```
输入：s = "    .1  "
输出：true
```

**提示：**

-   `1 <= s.length <= 20`
-   `s` 仅含英文字母（大写和小写），数字（`0-9`），加号 `'+'` ，减号 `'-'` ，空格 `' '` 或者点 `'.'` 。

py

```
class Solution:
    def isNumber(self, s: str) -> bool:
        states = [
            { ' ': 0, 's': 1, 'd': 2, '.': 4 }, # 0. start with 'blank'
            { 'd': 2, '.': 4 } ,                # 1. 'sign' before 'e'
            { 'd': 2, '.': 3, 'e': 5, ' ': 8 }, # 2. 'digit' before 'dot'
            { 'd': 3, 'e': 5, ' ': 8 },         # 3. 'digit' after 'dot'
            { 'd': 3 },                         # 4. 'digit' after 'dot' (‘blank’ before 'dot')
            { 's': 6, 'd': 7 },                 # 5. 'e'
            { 'd': 7 },                         # 6. 'sign' after 'e'
            { 'd': 7, ' ': 8 },                 # 7. 'digit' after 'e'
            { ' ': 8 }                          # 8. end with 'blank'
        ]
        p = 0                           # start with state 0
        for c in s:
            if '0' <= c <= '9': t = 'd' # digit
            elif c in "+-": t = 's'     # sign
            elif c in "eE": t = 'e'     # e or E
            elif c in ". ": t = c       # dot, blank
            else: t = '?'               # unknown
            if t not in states[p]: return False
            p = states[p][t]
        return p in (2, 3, 7, 8)
```

js

```
var isNumber = function(s) {
    //横坐标表示动作（输入的字符）,纵坐标表示状态
    //动作：0 空格， 1 +-， 2 0-9，3 . ， 4 eE
    //状态：0 首部空格， 1 符号， 2 整数部分， 3 前面有数的小数点 ，4 前面没有数的小数点， 5 小数
    //6 Ee , 7 指数符号， 8 指数， 9 尾部空格
    //接收状态(遍历完最后一个字符所处的状态)为 2 3 5 8 9
    let trans = [
        [0,null,9,9,null,9,null,null,9,9],
        [1,null,null,null,null,null,7,null,null,null],
        [2,2,2,5,5,5,8,8,8,null],
        [4,4,3,null,null,null,null,null,null,null],
        [null,null,6,6,null,6,null,null,null,null]
    ]
    const charTra = char =>{
        switch(char){
            case ' ':return 0;
            case '+': case '-':return 1;
            case '0': case '1': case '2':case '3': case '4': case '5':case '6':
            case '7': case '8': case '9': return 2;
            case '.':return 3;
            case 'e': case 'E':return 4;
            default: return null;
        }
    }
     
    let j = 0;
    for(let i = 0; i < s.length; i++){
        let ch = charTra(s[i]);
        if(ch == null){//针对 f.e 出现了其他字符
            return false;
        }
        let next = trans[ch][j];
        if(next!=null){
            j = next;
        }else{
            return false;
        }
            
    }
    if(j==2||j==3||j==5||j==8||j==9)
        return true;
    else
        return false;
}
```

#### [剑指 Offer 21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

**示例：**

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

**提示：**

1.  `0 <= nums.length <= 50000`
2.  `0 <= nums[i] <= 10000`

py

```
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        i, j = 0, len(nums) - 1
        while i < j:
            while i < j and nums[i] & 1 == 1: i += 1
            while i < j and nums[j] & 1 == 0: j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        return nums
```

js

```
var exchange = function(nums) {
    var l = 0, r = nums.length - 1;
    while(l < r){
        if(nums[l]%2 == 0 && nums[r]%2 == 1){
            var tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;
        }
        if(nums[l]%2 == 1) l++;
        if(nums[r]%2 == 0) r--;
    }
    return nums;
};
```

#### [剑指 Offer 22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 `6` 个节点，从头节点开始，它们的值依次是 `1、2、3、4、5、6`。这个链表的倒数第 `3` 个节点是值为 `4` 的节点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

方法一：顺序查找
思路与算法

最简单直接的方法即为顺序查找，假设当前链表的长度为 n，则我们知道链表的倒数第 k 个节点即为正数第 n−k 个节点，此时我们只需要顺序遍历到链表的第 n−k 个节点即为倒数第 kk 个节点。

我们首先求出链表的长度 n，然后顺序遍历到链表的第 n−k 个节点返回即可。

Python3

```
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        node, n = head, 0  
        while node:
            node = node.next
            n += 1

        node = head
        for _ in range(n-k):
            node = node.next
        
        return node  
```

js

```
var getKthFromEnd = function(head, k) {
    let node = head, n = 0;
    while (node) {
        node = node.next;
        n++;
    }
    node = head;
    for (let i = 0; i < n - k; i++) {
        node = node.next;
    }
    return node; 
};
```

**复杂度分析**

-   时间复杂度：O*(*n)，其中 *n* 为链表的长度。需要两次遍历。
-   空间复杂度：*O*(1)。

方法二：双指针
思路与算法

快慢指针的思想。我们将第一个指针 fast 指向链表的第 k+1 个节点，第二个指针 slow 指向链表的第一个节点，此时指针 fast 与slow 二者之间刚好间隔 k 个节点。此时两个指针同步向后走，当第一个指针 fast 走到链表的尾部空节点时，则此时 slow 指针刚好指向链表的倒数第k个节点。

我们首先将 fast 指向链表的头节点，然后向后走 k 步，则此时fast 指针刚好指向链表的第k+1 个节点。

我们首先将 slow 指向链表的头节点，同时slow 与fast 同步向后走，当fast 指针指向链表的尾部空节点时，则此时返回 slow 所指向的节点即可。

py

```
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        fast, slow = head, head

        while fast and k > 0:
            fast, k = fast.next, k - 1
        while fast:
            fast,slow = fast.next,slow.next
        
        return slow
```

js

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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head,
        slow = head;
    
    while (fast && k > 0){
        [fast, k] = [fast.next, k - 1];
    }
    while (fast){
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};
```

复杂度分析

时间复杂度：O(n)，其中 n 为链表的长度。我们使用快慢指针，只需要一次遍历即可，复杂度为 O(n)。

空间复杂度：O(1)。

#### [剑指 Offer 24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**限制：**

```
0 <= 节点个数 <= 5000
```

**注意**：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/

方法一：迭代
假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。

在遍历链表时，将当前节点的 next 指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。

js

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr){
        const next = curr.next;
        curr.next = prev;
        prev = next;
        curr = next;
    }
    return prev;
};
```

**复杂度分析**

-   时间复杂度：*O*(*n*)，其中 *n* 是链表的长度。需要遍历链表一次。
-   空间复杂度：*O*(1)。

方法二：递归
递归版本稍微复杂一些，其关键在于反向工作。假设链表的其余部分已经被反转，现在应该如何反转它前面的部分？

假设链表为：

$*n*1→…→*n**k*−1→*n**k*→*n**k*+1→…→*n**m*→∅$

若从节点 n_{k+1} 到 n_mn已经被反转，而我们正处于 n_k。

$*n*1→…→*n**k*−1→*n**k*→*n**k*+1←…←*n**m*$ 

我们希望 n_{k+1}的下一个节点指向 n_k 。

所以， n_k .next.next=n_k 。

需要注意的是 n_1的下一个节点必须指向 ∅。如果忽略了这一点，链表中可能会产生环。

```
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
```

复杂度分析

时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。

空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。

#### [剑指 Offer 25. 合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

**示例1：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

**限制：**

```
0 <= 链表长度 <= 1000
```

注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

方法一：递归
思路

我们可以如下递归地定义两个链表里的 merge 操作（忽略边界情况，比如空链表等）：

list1[0]+merge(list1[1:],list2) list1[0]<list2[0]
list2[0]+merge(list1,list2[1:]) otherwise

也就是说，两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。

算法

我们直接将以上递归过程建模，同时需要考虑边界情况。

如果 l1 或者 l2 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。否则，我们要判断 l1 和 l2 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。如果两个链表有一个为空，递归结束。

py

```
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
```

js

```
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

复杂度分析

时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(n+m)。

空间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 n+m 次，因此空间复杂度为 O(n+m)。

方法二：迭代
思路

我们可以用迭代的方法来实现上述算法。当 l1 和 l2 都不是空链表时，判断 l1 和 l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。

算法

首先，我们设定一个哨兵节点 prehead ，这可以在最后让我们比较容易地返回合并后的链表。我们维护一个 prev 指针，我们需要做的是调整它的 next 指针。然后，我们重复以下过程，直到 l1 或者 l2 指向了 null ：如果 l1 当前节点的值小于等于 l2 ，我们就把 l1 当前的节点接在 prev 节点的后面同时将 l1 指针往后移一位。否则，我们对 l2 做同样的操作。不管我们将哪一个元素接在了后面，我们都需要把 prev 向后移一位。

在循环终止的时候， l1 和 l2 至多有一个是非空的。由于输入的两个链表都是有序的，所以不管哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的所有元素都要大。这意味着我们只需要简单地将非空链表接在合并链表的后面，并返回合并链表即可。

py

```
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        prehead = ListNode(-1)

        prev = prehead
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next            
            prev = prev.next

        # 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
        prev.next = l1 if l1 is not None else l2

        return prehead.next
```

js

```
var mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};
```

复杂度分析

时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 O(n+m)。

空间复杂度：O(1)。我们只需要常数的空间存放若干变量。

#### [剑指 Offer 26. 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

`   3  / \  4  5 / \ 1  2`
给定的树 B：

`  4  / 1`
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

**示例 1：**

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

**示例 2：**

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

**限制：**

```
0 <= 节点个数 <= 10000
```

利用递归实现，做这题之前可以先试试做一下 100 题：相同的数。

解题思路
1.约定空树不是任意一个树的子结构

2.递归判断传入函数的节点进行比较

 2.1 判断 B 子树是否为空，A处在传入时候先判断 B 是否为空，这里相当于判断的是 B 的子树

 2.2 当前节点为空，则不相等

 2.3 值不相等则结构不同

 2.4 递归判断下一个子树

3.先递归跟节点，在依次比较左节点和右边节点（只要A树的任意一个节点开始和B树相同，则B树为A树的子结构）

代码实现

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  // 1. 约定空树不是任意一个树的子结构
    if(!A || !B) return false;// *A*
  // 3. 先递归跟节点，在依次比较左节点和右边节点（只要A树的任意一个节点开始和B树相同，则B树为A树的子结构）
    return travesal(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};
// 2. 递归判断传入函数的节点进行比较
function travesal(rootA,rootB){
  // 2.1 判断 B 子树是否为空，*A*处在传入时候先判断 B 是否为空，这里相当于判断的是 B 的子树
    if(!rootB) return true;
  // 2.2 当前节点为空，则不相等
    if(!rootA) return false;
  // 2.3 值不相等则结构不同
    if(rootA.val !== rootB.val) return false;
  // 2.4 递归判断下一个子树
    return travesal(rootA.left,rootB.left) && travesal(rootA.right,rootB.right);
}
```

#### [剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

`   4  /  \ 2   7 / \  / \1  3 6  9`
镜像输出：

```
   4  /  \ 7   2 / \  / \9  6 3  1
```

**示例 1：**

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

**限制：**

```
0 <= 节点个数 <= 1000
```

注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/

方法一：递归
思路与算法

这是一道很经典的二叉树问题。显然，我们从根节点开始，递归地对树进行遍历，并从叶子节点先开始翻转得到镜像。如果当前遍历到的节点 \textit{root}root 的左右两棵子树都已经翻转得到镜像，那么我们只需要交换两棵子树的位置，即可得到以 \textit{root}root 为根节点的整棵子树的镜像。

代码

py

```
class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return root
        
        left = self.mirrorTree(root.left)
        right = self.mirrorTree(root.right)
        root.left, root.right = right, left
        return root
```

js

```
var mirrorTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = mirrorTree(root.left);
    const right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
```

复杂度分析

时间复杂度：O(N)，其中 N 为二叉树节点的数目。我们会遍历二叉树中的每一个节点，对每个节点而言，我们在常数时间内交换其两棵子树。

空间复杂度：O(N)。使用的空间由递归栈的深度决定，它等于当前节点在二叉树中的高度。在平均情况下，二叉树的高度与节点个数为对数关系，即 O(logN)。而在最坏情况下，树形成链状，空间复杂度为 O(N)。

#### [剑指 Offer 28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

`  1  / \ 2  2 / \ / \3  4 4  3`
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
  1  / \ 2  2  \  \  3   3
```

**示例 1：**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2：**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

**限制：**

```
0 <= 节点个数 <= 1000
```

注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/

方法一：递归
思路和算法

如果一个树的左子树与右子树镜像对称，那么这个树是对称的。

![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_28/jianzhi_28_fig1.PNG)

因此，该问题可以转化为：两个树在什么情况下互为镜像？

如果同时满足下面的条件，两个树互为镜像：

它们的两个根结点具有相同的值
每个树的右子树都与另一个树的左子树镜像对称

![fig2](https://assets.leetcode-cn.com/solution-static/jianzhi_28/jianzhi_28_fig2.PNG)


我们可以实现这样一个递归函数，通过「同步移动」两个指针的方法来遍历这棵树，p 指针和 q 指针一开始都指向这棵树的根，随后 p 右移时，q 左移，p 左移时，q 右移。每次检查当前 p 和 q 节点的值是否相等，如果相等再判断左右子树是否对称。

代码如下。

ts

```
const check = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function(root: TreeNode | null): boolean {
    return check(root, root);
};
```

复杂度分析

假设树上一共 n 个节点。

时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。

方法二：迭代
思路和算法

「方法一」中我们用递归的方法实现了对称性的判断，那么如何用迭代的方法实现呢？首先我们引入一个队列，这是把递归程序改写成迭代程序的常用方法。初始化时我们把根节点入队两次。每次提取两个结点并比较它们的值（队列中每两个连续的结点应该是相等的，而且它们的子树互为镜像），然后将两个结点的左右子结点按相反的顺序插入队列中。当队列为空时，或者我们检测到树不对称（即从队列中取出两个不相等的连续结点）时，该算法结束。

ts

```
const check = (u: TreeNode | null, v: TreeNode | null): boolean => {
    const q: (TreeNode | null)[] = [];
    q.push(u),q.push(v);

    while (q.length) {
        u = q.shift()!;
        v = q.shift()!;

        if (!u && !v) continue;
        if ((!u || !v) || (u.val !== v.val)) return false;

        q.push(u.left); 
        q.push(v.right);

        q.push(u.right); 
        q.push(v.left);
    }
    return true;
}
var isSymmetric = function(root: TreeNode | null): boolean {
    return check(root, root);
};
```

复杂度分析

时间复杂度：O(n)，同「方法一」。
空间复杂度：这里需要用一个队列来维护节点，每个节点最多进队一次，出队一次，队列中最多不会超过 nn 个点，故渐进空间复杂度为 O(n)。

#### [剑指 Offer 29. 顺时针打印矩阵](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

**示例 1：**

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

**示例 2：**

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

**限制：**

-   `0 <= matrix.length <= 100`
-   `0 <= matrix[i].length <= 100`

注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/

方法一：模拟
可以模拟打印矩阵的路径。初始位置是矩阵的左上角，初始方向是向右，当路径超出界限或者进入之前访问过的位置时，顺时针旋转，进入下一个方向。

判断路径是否进入之前访问过的位置需要使用一个与输入矩阵大小相同的辅助矩阵 visited，其中的每个元素表示该位置是否被访问过。当一个元素被访问时，将 visited 中的对应位置的元素设为已访问。

如何判断路径是否结束？由于矩阵中的每个元素都被访问一次，因此路径的长度即为矩阵中的元素数量，当路径的长度达到矩阵中的元素数量时即为完整路径，将该路径返回。

py3

```
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return list()
        
        rows, columns = len(matrix), len(matrix[0])
        visited = [[False] * columns for _ in range(rows)]
        total = rows * columns
        order = [0] * total

        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        row, column = 0, 0
        directionIndex = 0
        for i in range(total):
            order[i] = matrix[row][column]
            visited[row][column] = True
            nextRow, nextColumn = row + directions[directionIndex][0], column + directions[directionIndex][1]
            if not (0 <= nextRow < rows and 0 <= nextColumn < columns and not visited[nextRow][nextColumn]):
                directionIndex = (directionIndex + 1) % 4
            row += directions[directionIndex][0]
            column += directions[directionIndex][1]
        return order
```

js

```
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < total; i++) { 
        order[i] = matrix[row][column];
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};
```

复杂度分析

时间复杂度：O(mn)，其中 m 和 n 分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。

空间复杂度：O(mn)。需要创建一个大小为 m×n 的矩阵 visited 记录每个位置是否被访问过。

方法二：按层模拟
可以将矩阵看成若干层，首先打印最外层的元素，其次打印次外层的元素，直到打印最内层的元素。

定义矩阵的第 k 层是到最近边界距离为 k 的所有顶点。例如，下图矩阵最外层元素都是第 11 层，次外层元素都是第 22 层，剩下的元素都是第 33 层。

$[[1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 2, 1],
 [1, 2, 2, 2, 2, 2, 1],
 [1, 1, 1, 1, 1, 1, 1]]$

对于每层，从左上方开始以顺时针的顺序遍历所有元素。假设当前层的左上角位于 (top,left)，右下角位于(bottom,right)，按照如下顺序遍历当前层的元素。

从左到右遍历上侧元素，依次为 (top,left) 到 (top,right)。

从上到下遍历右侧元素，依次为(top+1,right) 到 (bottom,right)。

如果 left<right 且 \textit{top} < top<bottom，则从右到左遍历下侧元素，依次为(bottom,right−1) 到(bottom,left+1)，以及从下到上遍历左侧元素，依次为 (bottom,left) 到 (top+1,left)。

遍历完当前层的元素之后，将 left 和top 分别增加 11，将 right 和 bottom 分别减少 1，进入下一层继续遍历，直到遍历完所有元素为止。

![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_29/jianzhi_29_fig1.png)

py3

```
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return list()
        
        rows, columns = len(matrix), len(matrix[0])
        order = list()
        left, right, top, bottom = 0, columns - 1, 0, rows - 1
        while left <= right and top <= bottom:
            for column in range(left, right + 1):
                order.append(matrix[top][column])
            for row in range(top + 1, bottom + 1):
                order.append(matrix[row][right])
            if left < right and top < bottom:
                for column in range(right - 1, left, -1):
                    order.append(matrix[bottom][column])
                for row in range(bottom, top, -1):
                    order.append(matrix[row][left])
            left, right, top, bottom = left + 1, right - 1, top + 1, bottom - 1
        return order
```

js

```
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const rows = matrix.length, columns = matrix[0].length;
    const order = [];
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            order.push(matrix[top][column]);
        }
        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                order.push(matrix[bottom][column]);
            }
            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
};
```

复杂度分析

时间复杂度：O(mn)，其中 m 和 n 分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。

空间复杂度：O(1)。除了输出数组以外，空间复杂度是常数。

#### [剑指 Offer 30. 包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/)

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

**示例:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

**提示：**

1.  各函数的调用总次数不超过 20000 次

注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/

方法一：辅助栈
思路

要做出这道题目，首先要理解栈结构先进后出的性质。

对于栈来说，如果一个元素 a 在入栈时，栈里有其它的元素 b, c, d，那么无论这个栈在之后经历了什么操作，只要 a 在栈中，b, c, d 就一定在栈中，因为在 a 被弹出之前，b, c, d 不会被弹出。

因此，在操作过程中的任意一个时刻，只要栈顶的元素是 a，那么我们就可以确定栈里面现在的元素一定是 a, b, c, d。

那么，我们可以在每个元素 a 入栈时把当前栈的最小值 m 存储起来。在这之后无论何时，如果栈顶元素是 a，我们就可以直接返回存储的最小值 m。

![fig1](https://assets.leetcode-cn.com/solution-static/jianzhi_30/jianzhi_30.gif)

算法

按照上面的思路，我们只需要设计一个数据结构，使得每个元素 a 与其相应的最小值 m 时刻保持一一对应。因此我们可以使用一个辅助栈，与元素栈同步插入与删除，用于存储与每个元素对应的最小值。

当一个元素要入栈时，我们取当前辅助栈的栈顶存储的最小值，与当前元素比较得出最小值，将这个最小值插入辅助栈中；

当一个元素要出栈时，我们把辅助栈的栈顶元素也一并弹出；

在任意一个时刻，栈内元素的最小值就存储在辅助栈的栈顶元素中。

py3

```
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = [math.inf]

    def push(self, x: int) -> None:
        self.stack.append(x)
        self.min_stack.append(min(x, self.min_stack[-1]))

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def min(self) -> int:
        return self.min_stack[-1]
```

js

```
var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.min_stack.pop();
};

MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.min = function() {
    return this.min_stack[this.min_stack.length - 1];
};
```

复杂度分析

时间复杂度：对于题目中的所有操作，时间复杂度均为 O(1)。因为栈的插入、删除与读取操作都是 O(1)，我们定义的每个操作最多调用栈操作两次。

空间复杂度：O(n)，其中 n 为总操作数。最坏情况下，我们会连续插入 n 个元素，此时两个栈占用的空间为 O(n)。

#### [剑指 Offer 31. 栈的压入、弹出序列](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

**示例 1：**

```
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

**示例 2：**

```
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

**提示：**

1.  `0 <= pushed.length == popped.length <= 1000`
2.  `0 <= pushed[i], popped[i] < 1000`
3.  `pushed` 是 `popped` 的排列。

注意：本题与主站 946 题相同：https://leetcode-cn.com/problems/validate-stack-sequences/

JavaScript版解题思路

算法思路，就是使用一个新的栈，按照pushed 顺序向 stack 里面压数据，如果 栈顶 = pop当前位置的值，
stack pop， 最后，如果按照 poped 的规则，stack 能清空，就是true

当 pushed 没有遍历完 pushed.length，向 stack 中 push
一直到 pop[j] == stack.top
如果 pop[j] == stack.top, stack.pop
pop 中 j + 1
此时，push 遍历完成，返回 stack是否为空

```
var validateStackSequences = function(pushed, popped) {
    let l = pushed.length;
    let stack = [];
    let j = 0;
    for(let i= 0; i < l; i++) {
        stack.push(pushed[i])
        while(stack.length && stack[stack.length - 1] == popped[j]) {
            stack.pop();
            j++;
        }
    }
    return !stack.length
};
```

#### [剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回：

```
[3,9,20,15,7] 
```

**提示：**

1.  `节点总数 <= 1000`

BFS
BFS层层遍历
要用一个队列来记录，先进先出

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    //存储结果
    const res = [];
    //判断是否为空
    if(root == null){
        return res
    }
    //声明一个队列
    const queue = [];
    queue.push(root);

    while(queue.length>0){
        //队列：先进先出，拿到第一个值，也就是root。
        //此时queue.为空
        let vertex = queue.shift();
        //把vertex.val值添加到res
        res.push(vertex.val);
        //判断左右边是否有值
        if(vertex.left){
            queue.push(vertex.left)
        }
        if(vertex.right){
            queue.push(vertex.right)
        }
    }
    return res
};

```

#### [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

**提示：**

1.  `节点总数 <= 1000`

注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

方法一：广度优先搜索
思路和算法

我们可以用广度优先搜索解决这个问题。

我们可以想到最朴素的方法是用一个二元组 (node, level) 来表示状态，它表示某个节点和它所在的层数，每个新进队列的节点的 level 值都是父亲节点的 level 值加一。最后根据每个点的 level 对点进行分类，分类的时候我们可以利用哈希表，维护一个以 level 为键，对应节点值组成的数组为值，广度优先搜索结束以后按键 level 从小到大取出所有值，组成答案返回即可。

考虑如何优化空间开销：如何不用哈希映射，并且只用一个变量 node 表示状态，实现这个功能呢？

我们可以用一种巧妙的方法修改广度优先搜索：

首先根元素入队
当队列不为空的时候
求当前队列的长度 s_i依次从队列中取 s_i 个元素进行拓展，然后进入下一次迭代

它和普通广度优先搜索的区别在于，普通广度优先搜索每次只取一个元素拓展，而这里每次取 s_i个元素。在上述过程中的第 ii 次迭代就得到了二叉树的第 i 层的 s_is个元素。

为什么这么做是对的呢？我们观察这个算法，可以归纳出这样的循环不变式：第 i 次迭代前，队列中的所有元素就是第 i 层的所有元素，并且按照从左向右的顺序排列。证明它的三条性质（你也可以把它理解成数学归纳法）：

初始化：i=1 的时候，队列里面只有 root，是唯一的层数为 1 的元素，因为只有一个元素，所以也显然满足「从左向右排列」；
保持：如果 i = k 时性质成立，即第 k 轮中出队 s_k的元素是第 k 层的所有元素，并且顺序从左到右。因为对树进行广度优先搜索的时候由低 kk 层的点拓展出的点一定也只能是 k + 1 层的点，并且 k + 1 层的点只能由第 kk 层的点拓展到，所以由这 s_k个点能拓展到下一层所有的 s_{k+1}个点。又因为队列的先进先出（FIFO）特性，既然第 k 层的点的出队顺序是从左向右，那么第 k + 1 层也一定是从左向右。至此，我们已经可以通过数学归纳法证明循环不变式的正确性。
终止：因为该循环不变式是正确的，所以按照这个方法迭代之后每次迭代得到的也就是当前层的层次遍历结果。至此，我们证明了算法是正确的。
代码

js

```
var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
        
    return ret;
};
```

复杂度分析

记树上所有节点的个数为 n。

时间复杂度：每个点进队出队各一次，故渐进时间复杂度为 O(n)。
空间复杂度：队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)。

#### [剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [20,9],
  [15,7]
] 
```

**提示：**

1.  `节点总数 <= 1000`

方法一：广度优先遍历
此题是「剑指 Offer 32 - II. 从上到下打印二叉树 II」的变种，最后输出的要求有所变化，要求我们按层数的奇偶来决定每一层的输出顺序。规定二叉树的根节点为第 0 层，如果当前层数是偶数，从左至右输出当前层的节点值，否则，从右至左输出当前层的节点值。

我们依然可以沿用「剑指 Offer 32 - II」的思想，修改广度优先搜索，对树进行逐层遍历，用队列维护当前层的所有元素，当队列不为空的时候，求得当前队列的长度 size，每次从队列中取出 size 个元素进行拓展，然后进行下一次迭代。

为了满足题目要求的返回值为「先从左往右，再从右往左」交替输出的锯齿形，我们可以利用「双端队列」的数据结构来维护当前层节点值输出的顺序。

双端队列是一个可以在队列任意一端插入元素的队列。在广度优先搜索遍历当前层节点拓展下一层节点的时候我们仍然从左往右按顺序拓展，但是对当前层节点的存储我们维护一个变量 isOrderLeft 记录是从左至右还是从右至左的：

如果从左至右，我们每次将被遍历到的元素插入至双端队列的末尾。

如果从右至左，我们每次将被遍历到的元素插入至双端队列的头部。

当遍历结束的时候我们就得到了答案数组。

![img](https://assets.leetcode-cn.com/solution-static/jianzhi_32_III/1.png)

js

```
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const nodeQueue = [root];

    let isOrderLeft = true;

    while (nodeQueue.length) {
        let levelList = [];
        const size = nodeQueue.length;
        for (let i = 0; i < size; ++i) {
            const node = nodeQueue.shift();
            if (isOrderLeft) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            if (node.left !== null) {
                nodeQueue.push(node.left);
            }
            if (node.right !== null) {
                nodeQueue.push(node.right);
            }
        }            
        ans.push(levelList);
        isOrderLeft = !isOrderLeft;
    }

    return ans;
};

```

复杂度分析

时间复杂度：O(N)，其中 N 为二叉树的节点数。每个节点会且仅会被遍历一次。

空间复杂度：O(N)。我们需要维护存储节点的队列和存储节点值的双端队列，空间复杂度为 O(N)。

#### [剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 `true`，否则返回 `false`。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

```
     5
    / \
   2   6
  / \
 1   3
```

**示例 1：**

```
输入: [1,6,3,2,5]
输出: false
```

**示例 2：**

```
输入: [1,3,2,6,5]
输出: true 
```

**提示：**

1.  `数组长度 <= 1000`

```
var verifyPostorder = function(postorder) {
    /*
        1. 分治法，BST性质
            空数组需要返回真
        2. 每次以最后一个元素为根，将当前数组切割成left、right两部分
        3. 除了最后元素root外，
            leftArr = 剩下元素按照 小于root前，一直小于root
            rightArr = 当遇到大于root的,后边一直都要比root大
        4. 如果按上面规则，能到arr.length-1,则说明本轮符合条件
    */
    if(!postorder || !postorder.length){
        return true;
    }
    
    return verifyPostorderHelper(postorder,0,postorder.length-1)
};

//两端闭[]
function verifyPostorderHelper(postorder,i,j){
    //中止条件,只有1个元素不用分了
    //等 于j表示只有一个元素了，
    //大于j，表示当前节点不存在，比如有左孩子，没有右孩子
    if (i >= j) {
        return true;
    }
    //[1,3,2,6,5]
    let start = i;
    //从左边开始
    while(postorder[start]<postorder[j]){
        start++;
    }
    //此时postorder[start]>postorder[j]
    let splitor = start;//中间分割点
    //之后每个元素都要大于postorder[j]
    while(postorder[start]>postorder[j]){
        start++;
    }
    //如果此时start=== j，说明走到最右边了，是符合要求的
    //如果小于j，则说明按以上两条规则没走完，不符合
    if(start < j){
        return false;
    }
    
    let isLeftOk = verifyPostorderHelper(postorder,i,splitor-1);
    let isRightOk = verifyPostorderHelper(postorder,splitor,j-1);//排除掉j，j是根目录
    return isLeftOk && isRightOk;
}

```

#### [剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。

**叶子节点** 是指没有子节点的节点。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：[]
```

**示例 3：**

```
输入：root = [1,2], targetSum = 0
输出：[]
```

 

**提示：**

-   树中节点总数在范围 `[0, 5000]` 内
-   `-1000 <= Node.val <= 1000`
-   `-1000 <= targetSum <= 1000`

注意：本题与主站 113 题相同：https://leetcode-cn.com/problems/path-sum-ii/

前言
注意到本题的要求是，找到所有满足从「根节点」到某个「叶子节点」经过的路径上的节点之和等于目标和的路径。核心思想是对树进行一次遍历，在遍历时记录从根节点到当前节点的路径和，以防止重复计算。

方法一：深度优先搜索
思路及算法

我们可以采用深度优先搜索的方式，枚举每一条从根节点到叶子节点的路径。当我们遍历到叶子节点，且此时路径和恰为目标和时，我们就找到了一条满足条件的路径。

代码

Python3      

    class Solution:
        def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
            ret = list()
            path = list()
            
            def dfs(root: TreeNode, target: int):
                if not root:
                    return
                path.append(root.val)
                target -= root.val
                if not root.left and not root.right and target == 0:
                    ret.append(path[:])
                dfs(root.left, target)
                dfs(root.right, target)
                path.pop()
            
            dfs(root, target)
            return ret

复杂度分析

时间复杂度：O(N^2)，其中 N 是树的节点数。在最坏情况下，树的上半部分为链状，下半部分为完全二叉树，并且从根节点到每一个叶子节点的路径都符合题目要求。此时，路径的数目为 O(N)，并且每一条路径的节点个数也为 O(N)，因此要将这些路径全部添加进答案中，时间复杂度为 O(N^2)。

空间复杂度：O(N)，其中 N 是树的节点数。空间复杂度主要取决于栈空间的开销，栈中的元素个数不会超过树的节点数。

方法二：广度优先搜索
思路及算法

我们也可以采用广度优先搜索的方式，遍历这棵树。当我们遍历到叶子节点，且此时路径和恰为目标和时，我们就找到了一条满足条件的路径。

为了节省空间，我们使用哈希表记录树中的每一个节点的父节点。每次找到一个满足条件的节点，我们就从该节点出发不断向父节点迭代，即可还原出从根节点到当前节点的路径。

代码

Python3

    class Solution:
        def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:
            ret = list()
            parent = collections.defaultdict(lambda: None)
    
            def getPath(node: TreeNode):
                tmp = list()
                while node:
                    tmp.append(node.val)
                    node = parent[node]
                ret.append(tmp[::-1])
    
            if not root:
                return ret
            
            que_node = collections.deque([root])
            que_total = collections.deque([0])
    
            while que_node:
                node = que_node.popleft()
                rec = que_total.popleft() + node.val
    
                if not node.left and not node.right:
                    if rec == target:
                        getPath(node)
                else:
                    if node.left:
                        parent[node.left] = node
                        que_node.append(node.left)
                        que_total.append(rec)
                    if node.right:
                        parent[node.right] = node
                        que_node.append(node.right)
                        que_total.append(rec)
    
            return ret


​    
复杂度分析

时间复杂度：O(N^2)，其中 N 是树的节点数。分析思路与方法一相同。

空间复杂度：O(N)，其中 N 是树的节点数。空间复杂度主要取决于哈希表和队列空间的开销，哈希表需要存储除根节点外的每个节点的父节点，队列中的元素个数不会超过树的节点数。

js

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    // 先存储根节点
    let path = [root.val];
    let res = [];
    // 深度优先，朝着一个方向一条路径遍历
    let preorder = (node) => {
        // 存在左节点，遍历左边
        if(node.left) {
            path.push(node.left.val);
            preorder(node.left);
            // 遍历完，不管符不符合要求都弹出           
            path.pop();
        } 
        if(node.right) {
            path.push(node.right.val);
            preorder(node.right);           
            path.pop();
        }
        // 到达叶子节点，判断路径和
        if(!node.left && !node.right) {
            let add = 0;
            for(let i = 0; i < path.length; i++) {
                add += path[i];
            }
            if(add == sum) {
                // 不能使用 res.push(path)是因为path是全局变量，push进的是path的地址，而不是数组的值
                res.push(path.slice());
            }           
        }
    }
    preorder(root);
    return res;
};

```

#### [剑指 Offer 35. 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)

请实现 `copyRandomList` 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 `next` 指针指向下一个节点，还有一个 `random` 指针指向链表中的任意节点或者 `null`。

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png)

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e2.png)

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

**示例 3：**

**![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e3.png)**

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

**示例 4：**

```
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

**提示：**

-   `-10000 <= Node.val <= 10000`
-   `Node.random` 为空（null）或指向链表中的节点。
-   节点数目不超过 1000 。

**注意：**本题与主站 138 题相同：https://leetcode-cn.com/problems/copy-list-with-random-pointer/

方法一：回溯 + 哈希表
思路及算法

本题要求我们对一个特殊的链表进行深拷贝。如果是普通链表，我们可以直接按照遍历的顺序创建链表节点。而本题中因为随机指针的存在，当我们拷贝节点时，「当前节点的随机指针指向的节点」可能还没创建，因此我们需要变换思路。一个可行方案是，我们利用回溯的方式，让每个节点的拷贝操作相互独立。对于当前节点，我们首先要进行拷贝，然后我们进行「当前节点的后继节点」和「当前节点的随机指针指向的节点」拷贝，拷贝完成后将创建的新节点的指针返回，即可完成当前节点的两指针的赋值。

具体地，我们用哈希表记录每一个节点对应新节点的创建情况。遍历该链表的过程中，我们检查「当前节点的后继节点」和「当前节点的随机指针指向的节点」的创建情况。如果这两个节点中的任何一个节点的新节点没有被创建，我们都立刻递归地进行创建。当我们拷贝完成，回溯到当前层时，我们即可完成当前节点的指针赋值。注意一个节点可能被多个其他节点指向，因此我们可能递归地多次尝试拷贝某个节点，为了防止重复拷贝，我们需要首先检查当前节点是否被拷贝过，如果已经拷贝过，我们可以直接从哈希表中取出拷贝后的节点的指针并返回即可。

在实际代码中，我们需要特别判断给定节点为空节点的情况。

代码

js

```
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, cachedNode = new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head);
}
```

复杂度分析

时间复杂度：O(n)，其中 n 是链表的长度。对于每个节点，我们至多访问其「后继节点」和「随机指针指向的节点」各一次，均摊每个点至多被访问两次。

空间复杂度：O(n)，其中 n 是链表的长度。为哈希表的空间开销。

方法二：迭代 + 节点拆分
思路及算法

注意到方法一需要使用哈希表记录每一个节点对应新节点的创建情况，而我们可以使用一个小技巧来省去哈希表的空间。

我们首先将该链表中每一个节点拆分为两个相连的节点，例如对于链表 A→B→C，我们可以将其拆分为 A→A′→B→B′→C→C′。对于任意一个原节点 S，其拷贝节点S′ 即为其后继节点。

这样，我们可以直接找到每一个拷贝节点S′ 的随机指针应当指向的节点，即为其原节点 S 的随机指针指向的节点 T 的后继节点T ′ 。需要注意原节点的随机指针可能为空，我们需要特别判断这种情况。

当我们完成了拷贝节点的随机指针的赋值，我们只需要将这个链表按照原节点与拷贝节点的种类进行拆分即可，只需要遍历一次。同样需要注意最后一个拷贝节点的后继节点为空，我们需要特别判断这种情况。


![img](https://assets.leetcode-cn.com/solution-static/jianzhi_35/1.png)

![img](https://assets.leetcode-cn.com/solution-static/jianzhi_35/2.png)

![img](https://assets.leetcode-cn.com/solution-static/jianzhi_35/3.png)

![img](https://assets.leetcode-cn.com/solution-static/jianzhi_35/4.png)

**代码**

js

```
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = (node.random !== null) ? node.random.next : null;
    }
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null;
    }
    return headNew;
};
```

复杂度分析

时间复杂度：O(n)，其中 n 是链表的长度。我们只需要遍历该链表三次。

读者们也可以自行尝试在计算拷贝节点的随机指针的同时计算其后继指针，这样只需要遍历两次。
空间复杂度：O(1)。注意返回值不计入空间复杂度。

#### [剑指 Offer 36. 二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

为了让您更好地理解问题，以下面的二叉搜索树为例：

 

![img](https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png)

 

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 

![img](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)

 

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

**注意：**本题与主站 426 题相同：https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/

**注意：**此题对比原题有改动。

```
用两个变量，prev和head记住位置
最后prev已经是最后一个元素
最后将prev.right = head head.left = prev

var treeToDoublyList = function(root) {
    /*
    1. 中序遍历是 排序的
    2.

    */
    if(!root){
        return null;
    }
    let prev = null;
    let head =null;
    function dfsHelper(root){
        if(!root){
            return null;
        }
        dfsHelper(root.left);
        /*
            中序(left,cur,right)
        */
        //说明是第一个节点
        if(!head){
            head = new Node(root.val);
            prev = head;
        } else {
            let newNode = new Node(root.val);
            prev.right = newNode;
            newNode.left = prev;
            prev = newNode;
        }
        dfsHelper(root.right);

    }
    dfsHelper(root);
    //prev是最后一个节点
    head.left = prev;
    prev.right = head;
    return head;
};
```

#### [剑指 Offer 37. 序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/)

请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

**提示：**输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式](https://support.leetcode-cn.com/hc/kb/article/1567641/)。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

 

**示例：**

![img](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

 

注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

方法一：深度优先搜索
思路和算法

二叉树的序列化本质上是对其值进行编码，更重要的是对其结构进行编码。可以遍历树来完成上述任务。众所周知，我们一般有两个策略：广度优先搜索和深度优先搜索。

广度优先搜索可以按照层次的顺序从上到下遍历所有的节点
深度优先搜索可以从一个根开始，一直延伸到某个叶，然后回到根，到达另一个分支。根据根节点、左节点和右节点之间的相对顺序，可以进一步将深度优先搜索策略区分为：
先序遍历
中序遍历
后序遍历
这里，我们选择先序遍历的编码方式，我们可以通过这样一个例子简单理解：


https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/solution/xu-lie-hua-er-cha-shu-by-leetcode-soluti-4duq/#:~:text=%E4%BE%8B%E5%AD%90%E7%AE%80%E5%8D%95%E7%90%86%E8%A7%A3%EF%BC%9A-,1%20/%2012,-%E6%88%91%E4%BB%AC%E4%BB%8E%E6%A0%B9

我们从根节点 1 开始，序列化字符串是 1,。然后我们跳到根节点 2 的左子树，序列化字符串变成 1,2,。现在从节点 2 开始，我们访问它的左节点 3（1,2,3,None,None,）和右节点 4

(1,2,3,None,None,4,None,None)。None,None, 是用来标记缺少左、右子节点，这就是我们在序列化期间保存树结构的方式。最后，我们回到根节点 1 并访问它的右子树，它恰好是叶节点 5。最后，序列化字符串是 1,2,3,None,None,4,None,None,5,None,None,。

即我们可以先序遍历这颗二叉树，遇到空子树的时候序列化成 None，否则继续递归序列化。那么我们如何反序列化呢？首先我们需要根据 , 把原先的序列分割开来得到先序遍历的元素列表，然后从左向右遍历这个序列：

如果当前的元素为 None，则当前为空树
否则先解析这棵树的左子树，再解析它的右子树
具体请参考下面的代码。

代码

```
var serialize = function(root) {
    return rserialize(root, '');
};

var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
    if (root === null) {
        str += "None,";
    } else {
        str += root.val + '' + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList[0] === "None") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}
```

复杂度分析

时间复杂度：在序列化和反序列化函数中，我们只访问每个节点一次，因此时间复杂度为 O(n)，其中 n 是节点数，即树的大小。

空间复杂度：在序列化和反序列化函数中，我们递归会使用栈空间，故渐进空间复杂度为 O(n)。

方法二：括号表示编码 + 递归下降解码
思路和算法

我们也可以这样表示一颗二叉树：

如果当前的树为空，则表示为 X
如果当前的树不为空，则表示为 (<LEFT_SUB_TREE>)CUR_NUM(RIGHT_SUB_TREE)，其中：
<LEFT_SUB_TREE> 是左子树序列化之后的结果
<RIGHT_SUB_TREE> 是右子树序列化之后的结果
CUR_NUM 是当前节点的值
根据这样的定义，我们很好写出序列化的过程，后序遍历这颗二叉树即可，那如何反序列化呢？根据定义，我们可以推导出这样的巴科斯范式（BNF）：


T -> (T) num (T) | X
它的意义是：用 T 代表一棵树序列化之后的结果，| 表示 T 的构成为 (T) num (T) 或者 X，| 左边是对 T 的递归定义，右边规定了递归终止的边界条件。

因为：

T 的定义中，序列中的第一个字符要么是 X，要么是 (，所以这个定义是不含左递归的
当我们开始解析一个字符串的时候，如果开头是 X，我们就知道这一定是解析一个「空树」的结构，如果开头是 (，我们就知道需要解析 (T) num (T) 的结构，因此这里两种开头和两种解析方法一一对应，可以确定这是一个无二义性的文法
我们只需要通过开头的第一个字母是 X 还是 ( 来判断使用哪一种解析方法
所以这个文法是 LL(1) 型文法，如果你不知道什么是 LL(1) 型文法也没有关系，你只需要知道它定义了一种递归的方法来反序列化，也保证了这个方法的正确性——我们可以设计一个递归函数：

这个递归函数传入两个参数，带解析的字符串和当前当解析的位置 ptr，ptr 之前的位置是已经解析的，ptr 和 ptr 后面的字符串是待解析的
如果当前位置为 X 说明解析到了一棵空树，直接返回
否则当前位置一定是 (，对括号内部按照 (T) num (T) 的模式解析
具体请参考下面的代码。

代码

```
var serialize = function(root) {
    if (root == null) {
        return "X";
    }
    const left = "(" + serialize(root.left) + ")";
    const right = "(" + serialize(root.right) + ")";
    return left + root.val + right;
};

var deserialize = function(data) {
    const ptr = [0];
    return parse(data, ptr);
};

const parse = (data, ptr) => {
    if (data[ptr[0]] === 'X') {
        ++ptr[0];
        return null;
    }
    let cur = new TreeNode(0);
    cur.left = parseSubtree(data, ptr);
    cur.val = parseInt(data, ptr);
    cur.right = parseSubtree(data, ptr);
    return cur;
}

const parseSubtree = (data, ptr) => {
    ++ptr[0]; // 跳过左括号
    const subtree = parse(data, ptr);
    ++ptr[0]; // 跳过右括号
    return subtree;
}

const parseInt = (data, ptr) => {
    let x = 0, sgn = 1;
    if (isNaN(Number(data[ptr[0]]))) {
        sgn = -1;
        ++ptr[0];
    }
    while (!isNaN(Number(data[ptr[0]]))) {
        x = x * 10 + data[ptr[0]++].charCodeAt() - '0'.charCodeAt();
    }
    return x * sgn;
}
```

复杂度分析

时间复杂度：序列化时做了一次遍历，渐进时间复杂度为 O(n)。反序列化时，在解析字符串的时候 ptr 指针对字符串做了一次顺序遍历，字符串长度为 O(n)，故这里的渐进时间复杂度为 O(n)。

空间复杂度：考虑递归使用的栈空间的大小，这里栈空间的使用和递归深度有关，递归深度又和二叉树的深度有关，在最差情况下，二叉树退化成一条链，故这里的渐进空间复杂度为 O(n)。
