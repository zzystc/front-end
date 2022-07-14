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

