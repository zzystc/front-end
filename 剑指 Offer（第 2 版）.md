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

