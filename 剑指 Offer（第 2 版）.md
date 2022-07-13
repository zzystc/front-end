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
var reversePrint = function(head) {
    if(!head) return []
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
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

