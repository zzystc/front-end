# 前端面试手撕题

### FED1 事件委托

#### 描述

描述请补全JavaScript代码，要求如下：
\1. 给"ul"标签添加点击事件
\2. 当点击某"li"标签时，该标签内容拼接"."符号。如：某"li"标签被点击时，该标签内容为".."
注意：
\1. 必须使用DOM0级标准事件（onclick）

核心： 区别target和currentTarget

- target表示`当前触发事件`的元素
- currentTarget是`绑定处理函数的元素`

> 只有当事件处理函数绑定在自身的时候，target才会和currentTarget一样

题目要求使用事件代理，也即是不要在自身绑定`onclick`,我们可以选择它的父元素`ul`

完整代码如下:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
    	<ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
        </ul>

        <script type="text/javascript">
            // 补全代码
            document.querySelector('ul').onclick = function(e) {
                e.target.innerText += '.'
            }
            
        </script>
    </body>
</html>
```

### **FED2** **数组去重**

#### 描述

请补全JavaScript代码，要求去除数组参数中的重复数字项并返回该数组。
注意：
\1. 数组元素仅包含数字

#### 示例1

```html
输入：
_deleteRepeat([-1,1,2,2])

输出：
[-1,1,2]
```

**本题考点**：去除数组重复项

根据题目要求，去除数组中的重复项。数组去重的方式有多种，如ES6的Set对象等可实现快速去重。该处使用循环判断完成数组的去重，核心步骤有：

1. 进入参数数组长度的循环体中
2. 取“i”位数值再截取“i”位之后的数组
3. 判断截取的数组中是否有某一位和第“i”位相同
4. 如果有，则将数组最后一位和第“i”位进行替换并且数组长度减1
5. 如果没有，则进入下一次循环

**参考答案**：

```html
const _deleteRepeat = array => {
    for(let i=0 ; i<array.length ; i++) {
        const sign = array[i]
        const temArray = array.slice(i+1)
        if(temArray.indexOf(sign) > -1) {
            array[i] = array[array.length-1]
            array.length--
            i--
        }
    }
    return array
}
```

ES6

```
	new Set(arr)//返回值为类数组，可以用Array.from(new Set(arr))转换一下
    Array.from(new Set(arr))
	//扩展运算符：
	[...new Set(arr)]
```

### FED3 合法的URL

#### 描述

请补全JavaScript代码，要求以Boolean的形式返回字符串参数是否为合法的URL格式。
注意：
\1. 协议仅为HTTP(S)

```
题解 | #合法的URL#
本题考点：正则表达式

根据题目要求判断参数URL是否合法。首先URL结构一般包括协议、主机名、主机端口、路径、请求信息、哈希，而本题协议已给出为HTTP(S)，使用正则匹配URL，核心步骤有：

首先必须是以http(s)开头并且可以不包含协议头部信息
主机名可以使用"-"符号，所以两种情况都要判断，包含"-"或不包含"-"
顶级域名很多，直接判断"."之后是否为字母即可
最后判断端口、路径和哈希，这些参数可有可无

// 补全代码
// 开始符 ^
// 协议部分http(s)://		 表示为((https|http|ftp|rtsp|mms)?:\/\/)
// 域名部分					 表示为(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+
// 顶级域名com cn等为2-6位   表示为([a-zA-Z]{2,6})
// 端口部分					 表示为(:\d+)?, ?表示0次或1次
// 请求路径如/login			表示为 (\/.*)?
// 问号传参及哈希值如?age=1   表示为 (\?.*)?和(#.*)?
// 结束符 $
 const _isUrl = url => {
   // 补全代码
   let reg = /^((https|http|ftp|rtsp|mms)?:\/\/)(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]{2,6})(:\d+)?(\/.*)?(\?.*)?(#.*)?$/
   return reg.test(url)
 }

```

### FED4 快速排序

#### 描述

请补全JavaScript代码，要求将数组参数中的数字从小到大进行排序并返回该数组。
注意：
\1. 数组元素仅包含数字
\2. 请优先使用快速排序方法

示例1

输入：

```
_quickSort([0,-1,1,-2,2])
```

输出：

```
[-2,-1,0,1,2]
```

```
题解 | #快速排序#
根据题目要求，通过快速排序实现数组参数中数字从小到大排序。快速排序的基本思想是通过分治来使一部分均比另一部分小（大）再使两部分重复该步骤而实现有序的排列。核心步骤有：

选择一个基准值（pivot）
以基准值将数组分割为两部分
递归分割之后的数组直到数组为空或只有一个元素为止

const _quickSort = array => {
    if(array.length <= 1) return array
    var pivotIndex = Math.floor(array.length / 2)
    var pivot = array.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (var i=0 ; i<array.length ; i++){
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return _quickSort(left).concat([pivot], _quickSort(right))
}
```

### FED5 全排列

#### 描述

请补全JavaScript代码，要求以数组的形式返回字符串参数的所有排列组合。
注意：
\1. 字符串参数中的字符无重复且仅包含小写字母
\2. 返回的排列组合数组不区分顺序

示例1

输入：

```
_permute('abc')
```

输出：

```
['abc','acb','bac','bca','cab','cba']
```

```
题解 | #全排列#
‘abc’的全排列等于 ('a'拼接上'bc'的全排列数组中的每一项) + ('b'拼接上'ac'的全排列数组的每一项) + ('c'拼接上'ab'的全排列数组的每一项)

因此我们遍历传入的string，将每一个字符拼接上剩余字符串的全排列数组即可，代码如下： js

            // 补全代码
            const _permute = string => {
            if(string.length === 1) {
                return [string]
            }
            const results = []
            for(let s of string){
                const arr = string.split('').filter(str =>str !== s)
                _permute(arr.join('')).forEach(item => {
                    results.push(s + item)
                })
            }
            return results
        }
```

### FED6 instanceof

#### 描述

请补全JavaScript代码，要求以Boolean的形式返回第一个实例参数是否在第二个函数参数的原型链上。

```
题解 | #instanceof#
本题考点：原型链

根据题目要求，实现一个仿instanceof功能的"_instanceof"函数，该函数可以判断首参是否在第二个Fn构造函数的原型链上，核心步骤有：

获取首个对象参数的原型对象
获取Fn函数的原型对象
进入死循环，当两个参数的原型对象相等时返回true
当两个参数的原型对象不相等时获取首个对象参数原型的原型并且循环该步骤直到null时返回false

const _instanceof = (target, Fn) => {
    let proto = target.__proto__
    let prototype = Fn.prototype
    while(true) {
        if(proto === Fn.prototype) return true
        if(proto === null) return false
        proto = proto.__proto__
    }
}
```

### FED7 Array.map

#### 描述

请补全JavaScript代码，要求实现Array.map函数的功能且该新函数命名为"_map"。

示例1

输入：

```
[1,2]._map(i => i * 2)
```

输出：

```
[2,4]
```

```
题解 | #Array.map#
本题考点：Array.map

根据题目要求，实现一个仿Array.map功能的"Array._map"函数，该函数创建一个新数组，该新数组的结果是数组中的每个元素都调用一次函数参数后的返回值，核心步骤有：

判断参数是否为函数，如果不是则直接返回
创建一个空数组用于承载新的内容
循环遍历数组中的每个值，分别调用函数参数，将返回值添加进空数组中
返回新的数组

Array.prototype._map = function(Fn) {
    if (typeof Fn !== 'function') return
    const array = this
    const newArray = new Array(array.length)
    for (let i=0; i<array.length; i++) {
        let result = Fn.call(arguments[1], array[i], i, array)
        newArray[i] = result
    }
    return newArray
}
```



### FED8 请补全JavaScript代码，要求实现Array.filter函数的功能且该新函数命名为&amp;quot;_filter&amp;quot;。

#### 描述

请补全JavaScript代码，要求实现Array.filter函数的功能且该新函数命名为"_filter"。

示例1

输入：

```
[1,2]._filter(i => i>1)
```

输出：

```
[2]
```

```
题解 | #Array.filter#
08_Array.filter
本题考点：Array.filter

根据题目要求，实现一个仿Array.filter功能的"Array._filter"函数，该函数创建一个新数组，该数组包含通过函数参数条件的所有元素，核心步骤有：

判断参数是否为函数，如果不是则直接返回
创建一个空数组用于承载新的内容
循环遍历数组中的每个值，分别调用函数参数，将满足判断条件的元素添加进空数组中
返回新的数组

Array.prototype._filter = function(Fn) {
    if (typeof Fn !== 'function') return
    const array = this
    const newArray = []
    for (let i=0; i<array.length; i++) {
        const result = Fn.call(arguments[1], array[i], i, array)
        result && newArray.push(array[i])
    }
    return newArray
}
```

### FED9 Array.reduce

#### 描述

请补全JavaScript代码，要求实现Array.reduce函数的功能且该新函数命名为"_reduce"。

## 示例1

输入：

```
[1,2,3]._reduce((left, right) => left + right)
```

输出：

```
6
```

```
题解 | #Array.reduce#
09_Array.reduce
本题考点：Array.reduce

根据题目要求，实现一个仿Array.reduce功能的"Array._reduce"函数，并且需要将”_reduce“函数挂载在Array的原型对象上。根据Array.reduce的特点有：

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
可以接收一个初始值，当没有初始值时，默认初始值为数组中的第一项
实现该函数的核心步骤有：

在Array的原型对象上添加”_reduce“函数
”_reduce“函数第一个参数为回调函数，第二个参数为初始值
进入数组长度的循环体中
当初始值为空时，首个被加数为数组的第一项
当初始值不为空时，首个被加数为初始值

Array.prototype._reduce = function(fn, prev) {
    for(let i=0 ; i<this.length ; i++) {
        if(prev === undefined) {
            prev = fn(this[i], this[i+1], i+1, this)
                ++i
        } else {
            prev = fn(prev, this[i], i, this)
        }
    }
    return prev

```

### FED10 _objectCreate

#### 描述

请补全JavaScript代码，要求实现Object.create函数的功能且该新函数命名为"_objectCreate"。

```
题解 | #_objectCreate#
10_Object.create
本题考点：原型对象

根据题目要求，实现一个仿Object.create功能的"_objectCreate"函数，该函数创建一个新对象，使用现有的对象来提供新创建的对象的proto，核心步骤有：

创建一个临时函数
将该临时函数的原型指向对象参数
返回该临时对象的实例
参考答案：

Object.create法创建一个新对象，使用现有的对象来提供新创建的对象的proto。

const _objectCreate = proto => {
    if(typeof proto !== 'object' || proto === null) return
    const fn = function() {}
    fn.prototype = proto
    return new fn()
}
```

### FED11 _call函数

#### 描述

请补全JavaScript代码，要求实现Function.call函数的功能且该新函数命名为"_call"。

```
题解 | #_call函数#
11_Function.call
本题考点：this

根据题目要求，实现一个仿Function.call功能的"Function._call"函数，该函数会临时修改内部this的指向并返回结果，核心步骤有：

参数默认为window
获取调用该方法的对象，将this赋给对象参数，可以任意命名
通过该对象参数临时调用函数并返回结果
最后删除对象参数的临时函数属性
参考答案：

Function.prototype._call = function(target = window) {
    target['fn'] = this
    const result = target['fn']([...arguments].shift())
    delete target['fn']
    return result
}
```







# 前端coding

## [10个常见的前端手写功能，你全都会吗？](https://juejin.cn/post/7031322059414175774#heading-6)

### 1、防抖

```
function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 测试
function task() {
  console.log('run task')
}
const debounceTask = debounce(task, 1000)
window.addEventListener('scroll', debounceTask)
```

### 2、节流

```
function throttle(fn, delay) {
  let last = 0 // 上次触发时间
  return function (...args) {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

// 测试
function task() {
  console.log('run task')
}
const throttleTask = throttle(task, 1000)
window.addEventListener('scroll', throttleTask)
```

### 3、深拷贝

#### JSON 方法

```
// 不支持值为undefined、函数和循环引用的情况
const cloneObj = JSON.parse(JSON.stringify(obj))
```

#### 递归拷贝

```
function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  
  if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环
  let cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
  cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

// 测试
const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(newObj.address === obj.address) // false
```

### 4、手写 Promise

```
class MyPromise {
  constructor(executor) {
    this.status = 'pending' // 初始状态为等待
    this.value = null // 成功的值
    this.reason = null // 失败的原因
    this.onFulfilledCallbacks = [] // 成功的回调函数数组
    this.onRejectedCallbacks = [] // 失败的回调函数数组
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn()) // 调用成功的回调函数
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn()) // 调用失败的回调函数
      }
    };
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          const x = onFulfilled(this.value);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        })
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          const x = onRejected(this.reason)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        })
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => { // 将成功的回调函数放入成功数组
          setTimeout(() => {
            const x = onFulfilled(this.value)
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
          })
        })
        this.onRejectedCallbacks.push(() => { // 将失败的回调函数放入失败数组
          setTimeout(() => {
            const x = onRejected(this.reason)
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
          })
        })
      }
    })
  }
}

// 测试
function p1() {
  return new MyPromise((resolve, reject) => {
    setTimeout(resolve, 1000, 1)
  })
}
function p2() {
  return new MyPromise((resolve, reject) => {
    setTimeout(resolve, 1000, 2)
  })
}
p1().then(res => {
  console.log(res) // 1
  return p2()
}).then(ret => {
  console.log(ret) // 2
})
```

### 5、异步控制并发数

```
function limitRequest(urls = [], limit = 3) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0

    // 同时启动limit个任务
    while (limit > 0) {
      start()
      limit -= 1
    }

    function start() {
      const url = urls.shift() // 从数组中拿取第一个任务
      if (url) {
        axios.post(url).then(res => {
          // todo
        }).catch(err => {
          // todo
        }).finally(() => {
          if (count == len - 1) {
            // 最后一个任务完成
            resolve()
          } else {
            // 完成之后，启动下一个任务
            count++
            start()
          }
        })
      }
    }

  })
}

// 测试
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])
```

### 6、继承

#### ES5 继承（寄生组合继承）

```
function Parent(name) {
  this.name = name
}
Parent.prototype.eat = function () {
  console.log(this.name + ' is eating')
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.contructor = Child

// 测试
let xm = new Child('xiaoming', 12) 
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating
```

#### ES6 继承

```
class Parent {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(this.name + ' is eating')
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

// 测试
let xm = new Child('xiaoming', 12) 
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating
```

### 7、数组排序

#### sort 排序

```
// 对数字进行排序，简写
const arr = [3, 2, 4, 1, 5]
arr.sort((a, b) => a - b)
console.log(arr) // [1, 2, 3, 4, 5]

// 对字母进行排序，简写
const arr = ['b', 'c', 'a', 'e', 'd']
arr.sort()
console.log(arr) // ['a', 'b', 'c', 'd', 'e']
```

#### 冒泡排序

```
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    // 从第一个元素开始，比较相邻的两个元素，前者大就交换位置
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = num
      }
    }
    // 每次遍历结束，都能找到一个最大值，放在数组最后
  }
  return arr
}

//测试
console.log(bubbleSort([2, 3, 1, 5, 4])) // [1, 2, 3, 4, 5]
```

### 8、数组去重

#### Set 去重

```
const newArr = [...new Set(arr)]
// 或
const newArr = Array.from(new Set(arr))
```

#### indexOf 去重

```
const newArr = arr.filter((item, index) => arr.indexOf(item) === index)
```

### 9、获取 url 参数

#### URLSearchParams 方法

```
// 创建一个URLSearchParams实例
const urlSearchParams = new URLSearchParams(window.location.search);
// 把键值对列表转换为一个对象
const params = Object.fromEntries(urlSearchParams.entries());
```

#### split 方法

```
function getParams(url) {
  const res = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

// 测试
const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
console.log(user) // { user: '阿飞', age: '16' }
```

### 10、发布订阅模式

```
class EventEmitter {
  constructor() {
    this.cache = {}
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name, once = false) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn();
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

// 测试
const eventBus = new EventEmitter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }

eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.off('task', task1)
setTimeout(() => {
  eventBus.emit('task') // task2
}, 1000)
```

