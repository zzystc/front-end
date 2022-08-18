# 零基础入门前端

01HTML

#### FED1 表单类型

入门 通过率：55.40% 时间限制：3秒 空间限制：256M

描述

请依次写出以下类型的输入框。
\1. 类型为密码，默认值为"nowcoder"
\2. 类型为复选框，且状态为已勾选

```
<form>
	<!-- 补全代码 -->
	<input type="password" value="nowcoder">
	<input type="checkbox" checked>
</form>
```

#### FED2 表格结构

入门 通过率：43.68% 时间限制：3秒 空间限制：256M

描述

请写出具有表格标题为"nowcoder"的2行3列表格结构。

```
<table border="1" width=100%>
    <!-- 补全代码 -->
    <caption>nowcoder</caption>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```

#### FED3 图像标签属性

入门 通过率：75.92% 时间限制：3秒 空间限制：256M

描述

请写出具有标题属性和代替文本属性的图片标签。

```
<!-- 补全代码 -->
<img title="" src="" alt="">
```

#### FED4 新窗口打开文档

入门 通过率：63.01% 时间限制：3秒 空间限制：256M

描述

请写出可以在新窗口打开文档的a标签。

```
<a href=" #" target="_blank">    </a>
<!--href 属性代表你想要把超链接连接到那个位置 ，#为空-->
<!-- target 属性用来规定在何处打开链接文档 -->
<!-- _blank 这个属性是在你点击后使用新窗口打开-->
```

#### FED5 自定义列表

入门 通过率：71.93% 时间限制：3秒 空间限制：256M

描述

请写出列表项为"nowcoder"且列表项内容也为"nowcoder"的自定义列表。

```
<dl>
    <!-- 补全代码 -->
    <dt>nowcoder</dt> 
    <dd>nowcoder</dd> 
</dl>
```

#### FED6 语义化标签

入门 通过率：63.82% 时间限制：3秒 空间限制：256M

描述

请使用语义化标签创建头部标签且包含导航标签。
注意：只需在html模块填写标签结构，有且仅有一个头部标签和一个导航标签。

```
<header>        
        <nav></nav>
</header>

```

#### FED7 音频媒体标签属性

入门 通过率：66.19% 时间限制：3秒 空间限制：256M

描述

请写出具有控件功能的音频媒体标签。

```
<audio src="" controls></audio>
```



#### FED8 视频媒体标签属性

入门 通过率：68.22% 时间限制：3秒 空间限制：256M

描述

请写出具有当视频的媒体数据加载期间发生错误时执行某个方法事件的视频媒体标签。

```
<video src="movie.ogg" onerror="myFunction（）" controls="controls">
抱歉，加载视频失败
</video>
<!-- onerror执行某个方法，这里的方法可以自己定义-->
```



FED9 CSS选择器——标签、类、ID选择器

入门 通过率：47.84% 时间限制：3秒 空间限制：256M

描述

请将html模块中字体内容是"红色"的字体颜色设置为"rgb(255, 0, 0)"，"绿色"设置为"rgb(0, 128, 0)"，"黑色"设置为"rgb(0, 0, 0)"，且字体大小都为20px。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            /*补全代码*/
            /*补全代码*/
            div{
                font-size:20px;
                color:rgb(255,0,0);
            }
            .green{
                color:rgb(0, 128, 0)
            }
            #black{
                color:rgb(0, 0, 0)
            }
            /*此处按照题意为改动任何html代码 */
            /*font-size 设置字体大小，color设置颜色加入rgb就等于设置了颜色的rgb值 */
            /*div是内置标签所以找到标签定义的时候不需要加入任何东西，class定义的类名要定义需要使用
            一个.来找到，定义id时需要使用#号*/
        </style>
    </head>
    <body>
        <div>红色</div>
        <div class='green'>绿色</div>
        <div id='black'>黑色</div>
    </body>
</html>
```



#### FED10 CSS选择器——伪类选择器

简单 通过率：61.40% 时间限制：3秒 空间限制：256M

描述

请将html模块中ul列表的第2个li标签和第4个li标签的背景颜色设置成"rgb(255, 0, 0)"。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            /*补全代码*/
            li:nth-child(even) {
                background-color: rgb(255, 0, 0);
            }
        </style>
    </head>
    <body>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </body>
</html>
```



#### FED11 CSS选择器——伪元素

简单 通过率：38.06% 时间限制：3秒 空间限制：256M

描述

请给html模块的div元素加一个后伪元素，且后伪元素的宽度和高度都是20px，背景颜色为"rgb(255, 0, 0)"。

```
<html>
    <head>
      <meta charset=utf-8>
      <style type="text/css">
        /*补全代码*/
        div::after{
          content:"";
          width: 20px;
          height: 20px;
          background-color: rgb(255,0,0);
          display: block;
        }
      </style>
    </head>
    <body>
        <div></div>
    </body>
</html>

```

#### FED12 按要求写一个圆

简单 通过率：48.72% 时间限制：3秒 空间限制：256M

描述

请将html模块的div元素设置为一个半径是50px的圆，且边框为1px的黑色实线。
要求：
\1. 圆角属性仅设置一个值
\2. 圆角属性单位请使用px
注意：由于圆角属性设置广泛且都可以实现题目效果，所以请按照要求规范书写。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            /*补全代码*/
            div {
                width: 100px;
                height: 100px;
                border-radius: 50px;
                border: 1px solid black;
            }

        </style>
    </head>
    <body>
        <div></div>
    </body>
</html>
```



#### FED13 设置盒子宽高

中等 通过率：72.58% 时间限制：3秒 空间限制：256M

描述

请将html模块类为"box"的div元素宽度和高度都设置为100px，且内间距为20px、外间距为10px。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            /*补全代码*/
            div.box{
                width:100px;
                height:100px;
                background:red;
                padding:20px;
                margin:10px;
            }

        </style>
    </head>
    <body>
        <div class="box">
        </div>
    </body>
</html>
```

#### FED14 浮动和清除浮动

简单 通过率：46.92% 时间限制：3秒 空间限制：256M

描述

请将类为"left"的div元素和类为"right"的div元素在同一行上向左浮动，且清除类为"wrap"的父级div元素内部的浮动。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            .wrap::after{
                /*补全代码*/
               content:'';
                display:block;
                clear:both;
            }
             .left {
                width: 100px;
                height: 100px;
                /*补全代码*/
                 display:block;
                 float:left;
            }
             .right {
                width: 100px;
                height: 100px;
                /*补全代码*/
                display:block;
                  float:left;
            }
        </style>
    </head>
    <body>
        <div class='wrap'>
            <div class='left'></div>
            <div class='right'></div>
        </div>
    </body>
</html>
```

#### FED15 固定定位

中等 通过率：57.59% 时间限制：3秒 空间限制：256M

描述

请将html模块类为"box"的div元素固定在视口的左上角。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            .box {
                width: 100px;
                height: 100px;
                /*补全代码*/
                border:1px solid black;
                position:fixed;
                left:0;
                top:0;
            }
        </style>
    </head>
    <body>
        <div class='box'></div>
    </body>
</html>
```



#### FED18 CSS单位（一）

简单 通过率：71.20% 时间限制：3秒 空间限制：256M

描述

请将html模块中类为"box"的div元素的宽度和高度设置为自身字体大小的4倍。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            .box {
                width: 4em;
                height: 4em;
                /*补全代码*/
                
            }
        </style>
    </head>
    <body>
        <div class='box'>牛客网</div>
    </body>
</html>
```



#### FED19 CSS单位（二）

简单 通过率：89.41% 时间限制：3秒 空间限制：256M

描述

请将html模块div元素的宽度和高度设置为html根元素字体大小的4倍。
注意：只需在css模块补全样式内容，请勿修改html模块。

```
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            div {
                /*补全代码*/
                width:4rem; height:4rem;
            }
        </style>
    </head>
    <body>
        <div></div>
    </body>
</html>s
```



#### FED20 基本数据类型检测

中等 通过率：51.84% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以字符串的形式返回参数的类型。
注意：只需检测基本数据类型。

```
function _typeof(value) {
    // 补全代码
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
```

#### FED21 检测复杂数据类型

中等 通过率：62.97% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以Boolean的形式返回第一个参数是否属于第二个参数对象的实例。

```
function _instanceof(left,right) {
    // 补全代码
    return Boolean(left instanceof right)
}
```



#### FED22 数据类型转换

中等 通过率：56.44% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以字符串的形式返回两个数字参数的拼接结果。
示例：
\1. _splice(223,233) -> "223233"
\2. _splice(-223,-233) -> "-223-233"

```
function _splice(left,right) {
    // 补全代码
    return (right).toString()+(left).toString();
}
```



#### FED23 阶乘

中等 通过率：48.06% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回数字参数的阶乘。
注意：参数为大于等于0的整数。

```
function _factorial(number) {
    // 补全代码
    var  sum= 1 ;
    for(let i = 1;i<=number;i++){
        sum *= i
    }
    return sum
}
```



#### FED24 绝对值

中等 通过率：76.41% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回数字参数的绝对值。

```
function _abs(number) {
    // 补全代码
    return number >= 0 ? number : -number;
}
```



#### FED25 幂

中等 通过率：59.86% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回底数为第一个参数，幂为第二个参数的数值。

```
function _pow(number,power) {
    // 补全代码
    let num=number;
    for(let a=2;a<=power;a++){
        num*=number;
    }
    return num;
}
```



#### FED26 平方根

中等 通过率：73.86% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回数字参数的平方根。

```
function _sqrt(number) {
    // 补全代码
    if(number === 1 || number === 0) return number;   
    var low = 0;  
    var high = number;  
    while(low < high){       
        var p = (low + high)>>1;       
        if( p * p === number)           
            return p;     
        else if(p * p < number)          
            low = p;       
        else         
            high = p; 
    }
}
```

#### FED27 余数

中等 通过率：81.28% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回数字参数除以2的余数。

```
function _remainder(value) {
    // 补全代码
    return value % 2    //对2取余数
}
```



#### FED28 返回星期数

中等 通过率：39.85% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以字符串的形式返回数字参数所对应的星期。
示例：
\1. _getday(1) -> "星期一"
\2. _getday(7) -> "星期天"

```
function _getday(value) {
    // 补全代码
    let arr = ['天', '一', '二', '三', '四', '五', '六'] ;
    return `星期${arr[value % 7]}`
}
```



#### FED29 从大到小排序

中等 通过率：37.54% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将数组参数中的数字从大到小进行排序并返回。

```
function _sort(array) {
    // 补全代码
    return array.sort((x, y)=>{
        return y-x
    })
}
```



#### FED30 大写字符串

中等 通过率：66.62% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将字符串参数转换为大写字符串并返回。

```
function _touppercase(string) {
    // 补全代码
     return string.toUpperCase();
}
```

#### FED31 对象属性键名

中等 通过率：60.43% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以数组的形式输出对象各个属性的键名。
示例：
\1. _keys({name:'nowcoder',age:7}) -> ['name','age']
注意：只需考虑对象属性均为原始数据类型的情况。

```
function _keys(object) {
    // 补全代码
    let arr=[];
    for(let i in object){
        arr.push(i)
    }
    return arr
}
```

#### FED32 对象数字

中等 通过率：75.38% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将数字参数转换为对象的形式返回。
示例：
``\1. typeof number === 'number' -> typeof _numbertoobject(number) === 'object'``

```
function _numbertoobject(number) {
    // 补全代码
    return {number}
}
```

#### FED33 对象字符串

中等 通过率：86.60% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将字符串参数转换为对象的形式返回。
示例：
`\1. typeof string === 'string' -> typeof _stringtoobject(string) === 'object'`

```
function _stringtoobject(string) {
    // 补全代码
    return new String(string)
}
```

#### FED34 去除字符串两端空格

中等 通过率：69.65% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求去除参数字符串两端的空格并返回。

```
function _trim(string) {
    // 补全代码
    return  string.trim()
    // return string.replace(/^\s*|\s*$/g,'')
}
```



#### FED35 输出日期

中等 通过率：36.06% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以字符串的形式输出时间戳参数所对应的"年-月-日"。
示例：
\1. _date(1631159776311) -> '2021-9-9'

```
function _date(number) {
    // 补全代码
     let date = new Date(number);
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}
```



#### FED36 数字取整

中等 通过率：65.42% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回数字参数的整数部分。

```
function _int(value) {
    // 补全代码
    return (parseInt(value));
}
```

#### FED37 数组反转

中等 通过率：67.18% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将参数数组反转之后返回。

```
function _reverse(array) {
    // 补全代码
    let arr = [];
    for(let x = array.length - 1;x >= 0;x--){
        arr.push(array[x]);
    }
    return arr
}
```

#### FED38 数组转字符串

中等 通过率：53.43% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将参数数组转换为字符串输出。
示例：
\1. _join([1,'2',3]) -> "123"
注意：只需考虑一维数组且数据类型为原始数据类型。

```
function _join(array) {
    // 补全代码
    let str='';
    for(let i=0;i<array.length;i++)
        {
            str+=array[i];
        }
    return str;
}
```

#### FED39 数组最大值

中等 通过率：51.47% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求找到数组参数中的最大值并返回。
注意：数组中只包含数字。

```
function _max(array) {
    // 补全代码
    return array.reduce((acc, cur)=>{
        if( acc < cur){
            acc = cur;
        }
        return acc;
    }, -Infinity)
}
```



#### FED40 搜索数字

描述

请补全JavaScript函数，要求以boolean的形式返回字符串参数中是否包含数字。

```
function _search(string) {
    var reg=/\d+/
    return reg.test(string)  
}


function _search(string) {
    // 补全代码
    //return [..string].find(c => Number(c) === 0 ? false : true);
    return string.search(/[0-9]/) >= 0 ? true : false;
}
```

#### FED41 头部插入元素

中等 通过率：60.92% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将第二个参数插入第一个参数数组的头部，并且以数组的形式返回。

```
function _unshift(array,value) {
    // 补全代码
    for(var i=array.length;i>0;i--){
        array[i]=array[i-1];
    }
    array[0]=value;
    return array;
}
```

#### FED42 尾部插入元素

中等 通过率：80.67% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将第二个参数插入第一个参数数组的尾部，并且以数组的形式返回。

```
function _push(array,value) {
    // 补全代码
    array[array.length]=value
    return array
    
}
```

#### FED43 js-位置查找

中等 通过率：54.52% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以数字的形式返回第一个参数数组中第二个参数所在的首个索引值。
注意：如果数组中不存在目标值，则返回-1。



```
function _indexof(array,value) {
    // 补全代码
    return array.reduce((p,c,i) => p<0&&c===value? i:p, -1)
}
```



#### FED44 向下取整

中等 通过率：78.96% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以数字的形式返回数字参数向下取整的结果。

```
function _floor(number) {
    // 补全代码
    let value = number - parseInt(number) > 0
    return  parseInt(number)   
}
```

#### FED45 整数反转

中等 通过率：32.17% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求将整数参数反转之后输出。
示例：
\1. _reverse(0) -> 0
\2. _reverse(233) -> 332
\3. _reverse(-223) -> -322

```
function _reverse(number) {
    // 补全代码
    if(number<0){
        return String(Math.abs(number)).split('').reverse().join('')*-1;
    }else{
       return String(Math.abs(number)).split('').reverse().join('')*1
    }
}
```



#### FED46 字符串搜索

中等 通过率：59.99% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求以boolean的形式返回字符串首参中是否包含第二个参数。

```
function _search(string,value) {
    // 补全代码
    return string.indexOf(value)===-1?false:true
}
```

#### FED47 函数——参数对象

中等 通过率：77.40% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求返回它的参数伪数组对象。

```
function getArguments (a,b,c) {
    // 补充代码
    return {'0': a, '1': b, '2':c, length:3};
    // return arguments;
}
```



#### FED48 this指向

中等 通过率：75.60% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，使obj对象中fn函数返回该对象中a属性和b属性的和。

```
var obj = {
    a: 1,
    b: 2,
    fn: function(){
        // 补全代码
        return this.a+this.b
    }
}
```



#### FED49 JS动态创建节点

中等 通过率：31.67% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，根据参数数组创建li元素。
要求：
\1. li元素的个数和数组的长度一样
\2. li元素的内容是数组中的每个元素
\3. 将创建的所有li元素插入到ul中

```
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <ul></ul>
    </body>
    <script type="text/javascript">
        function createLi(array) {
            var ul = document.querySelector('ul')
            for(let i=0 ; i<array.length ; i++) {
                let li = document.createElement('li')
                li.innerHTML = array[i]
                ul.appendChild(li)
            }
        }

    </script>
</html>
```

#### FED50 根据ID获取元素

中等 通过率：53.74% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，根据id获取html模块中ul标签下第二个li元素并返回。

```
function getLI(id){
    // 补全代码
    let bb = document.getElementById(id);
}
```



#### FED51 JS修改元素内容

中等 通过率：39.55% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，将类为"box"的div元素内容修改为"欢迎来到牛客网"。

```
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <div class='box'></div>
    </body>
    <script type="text/javascript">
        function modifyText(){
            // 补全代码
            let div  = document.getElementsByClassName('box')[0];
            div.textContent='欢迎来到牛客网';
        }
    </script>
</html>
```

#### FED52 阻止冒泡事件

中等 通过率：43.84% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求在点击li元素的时候不触发ul的事件。
注意：需要自行获取li元素。

```
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <ul>
            <li>nowcoder</li>
        </ul>
    </body>
    <script type="text/javascript">
        // 补全代码
        var li = document.querySelector('li');
        li.onclick=function(e){
            e=window.event|| e;
            if(e){
                e.cancelBubble=true;
            }else{
                  e.stopPropagation();
            }
        }
        
    </script>
</html>
```



#### FED53 阻止默认事件

中等 通过率：47.00% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，要求在点击id为"checkbox"的复选框时不会取消勾选状态。
注意：需要自行获取input元素。

```
<html>
    <head>
        <meta charset=utf-8>
    </head>
    <body>
        <form>
            <label>牛客会陪伴大家</label>
            <input id="checkbox" type="checkbox" checked />
        </form>
    </body>
    <script type="text/javascript">
        // 补全代码
       let cbox=document.getElementById('checkbox')
        cbox.addEventListener('click',(e)=>{
            e.preventDefault()
        })
    </script>
</html>
```



#### FED54 url地址

中等 通过率：74.62% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript函数，实现一个函数返回页面当前url。

```
function getUrlHref (){
    // 补全代码
    return location.href;
}
```



#### FED55 点击按钮隐藏元素

较难 通过率：28.95% 时间限制：3秒 空间限制：256M

描述

请补全JavaScript代码，实现一个盒子的关闭按钮功能。
要求：
\1. 使类为"btn"的div元素中心点定位在类为"box"的div元素右上顶点
\2. 使类为"btn"的div元素中内容"X"垂直水平居中
\3. 点击"X"按钮可以使类为"box"的div元素隐藏

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            .box {
                width: 100px;
                height: 100px;
                border: solid 1px black;
                /*补全代码*/
                position:relative;
            }
            .btn{
                width: 20px;
                height: 20px;
                background-color: red;
                /*补全代码*/
                position:absolute;
                right:-10px;
                top:-10px;
                text-align:center;
                line-height:20px;
            }
        </style>
    </head>
    <body>

        <div class='box'>
            <div class='btn'>X</div>
        </div>

        <script type="text/javascript">
            var btn = document.querySelector('.btn');
            var box = document.querySelector('.box');
            btn.onclick = function(){
                // 补全代码
                box.style.display = "none"
            }
        </script>
    </body>
</html>
```

# CSS布局

01盒模型

#### CSS1 盒模型 - content-box

中等 通过率：59.56% 时间限制：3秒 空间限制：256M

描述

 盒模型是CSS的核心概念，描述了元素如何显示，以及在一定程度上如何相互作用、相互影响。页面中的所有元素都被看作一个矩形盒子，这个盒子包含元素的内容、内边距、边框和外边距。
 内边距是内容周围的空间，当给元素填充背景时会作用到元素的内容区域和内边距区域。边框会在内边距外且紧挨着内边距。边框的外侧是外边距，外边距是围绕在盒子可见部分之外的透明区域，用于控制元素之间的距离。
 默认情况下，width和height是指盒子的内容区域的大小，如果此时给盒子添加内边距或边框，那么会导致整个盒子变大。现在给类名为"content-box"的盒子设置宽度、高度都为"80px"、内边距为"5px"、边框为"5px solid black"，此时可以打开调试工具查看该盒子的大小，会发现该盒子实际是一个长度为"100px"的正方形，并不是"80px"。
 实际上还有另外一种盒模型，它的width和height的计算方式和当前的盒子不同。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .content-box{
                width:80px;
                height:80px;
                border: 5px solid black;
                padding:5px;
            }
        </style>
    </head>
    <body>
        <div class="content-box"></div>
    </body>
</html>
```



#### CSS2 盒模型 - border-box

中等 通过率：58.69% 时间限制：3秒 空间限制：256M

描述

 默认盒模型的width和height只会作用于盒子的内容区，而通过"box-sizing"属性可以改变计算盒子大小的方式。"box-sizing"的默认值为"content-box"，即上一题看到的那样，把值只作用于内容区。现在给类名为"border-box"的盒子设置"box-sizing"属性为"border-box"，此时width和height的值不仅会作用于内容区，并且还会包括内边距和边框。
 很多人将"border-box"称为怪异盒模型，其实并不怪异。因为现实中的盒子就是这样测量的。比如快递盒，当用安全气囊包裹易碎物品时，填充物就可以视为"padding"，无论填充物有多厚，也不会影响盒子的整体大小。
 现在再给类名为"border-box"的盒子设置宽度、高度都为"100px"、内边距为"5px"、边框为"5px solid black"，此时通过调试工具会发现盒子的实际大小并没有因为添加了内边距或边框而被撑大。"border-box"在布局中可以让开发者减少不必要的烦恼，如添加内边距、边框之后盒子大小发生变化影响到整体布局的效果。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .border-box{
                padding: 5px;
                height: 100px;
                width: 100px;
                border: 5px solid black;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>
    	<div class="border-box"></div>
    </body>
</html>
```

#### CSS3 盒模型- 外边距折叠

中等 通过率：51.80% 时间限制：3秒 空间限制：256M

描述

 常规块盒子有一种机制叫外边距折叠，即垂直方向上的两个外边距相遇时，会折叠成一个外边距，且折叠之后的外边距高度为两者之中较大的那一个。现在给类名为"top"、"bottom"两个盒子都设置宽度、高度且都为"100px"、都设置外边距且都为"10px"，可以添加任意颜色便于区分两个盒子。此时通过调试工具可以发现两个盒子之间的距离为"10px"，并不是"20px"，说明已经发生了外边距折叠。
外边距折叠好像很奇怪，实际上却很有用。当一个页面包含了多个段落，如果没有外边距折叠，从第二个段落开始，所有段落的间距都是最上方段落的上外边距的两倍，有了外边距折叠，段落间距才会相等。
如果想要清除两个盒子之间的外边距折叠，可以给目标盒子设置以下属性：
\1. display: inline-block
\2. float属性值不是"none"的元素
\3. 绝对定位
现在给类名为"bottom"的盒子设置"position"属性为"absolute"，可以看到下方的盒子向下移动了，此时外边距折叠失效。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .top{
                width:100px;
                height:100px;
                margin:10px;
                background-color:yellow;
            }
            .bottom{
                width:100px;
                height:100px;
                margin:10px;
                background-color:pink;
                position:absolute;
            }
        </style>
    </head>
    <body>
        <section class="top"></section>
        <section class="bottom"></section>
    </body>
</html>
```

#### CSS4 浮动

中等 通过率：60.83% 时间限制：3秒 空间限制：256M

描述

 浮动盒子可以向左、右移动，直到它的外边沿接触父级的外边沿或另一个浮动盒子的外边沿。浮动盒子会脱离常规文档流，所以文档流中的元素几乎认为浮动盒子不存在。
 现在给"body"标签设置宽度为300px，再给类名为"left"、"center"、"right"的盒子（左、中、右盒子）皆设置宽度、高度且都为100px，三个盒子的颜色可以自定义以便于观测。继续给中间盒子设置"float: left"属性，此时中间盒子已经是一个浮动盒子，不再占据流中的位置空间，右盒子上升到了浮动盒子的区域并且被浮动盒子覆盖住了。现在再给左、右盒子皆设置"float: left"属性，此时三个盒子水平排列在一行上。重设左盒子的宽度、高度皆为120px，可以观察到因为"body"盒子较窄，所以右盒子被迫换行并且因为左盒子的高度超过了中间盒子，右盒子被卡在了中间盒子下方。
 以上为浮动盒子的特性。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            body{
               width:300px; 
            }
            .center{
                width:100px;
                height:100px;
                background:yellow;
                float:left;
            }
            .left{
                width:120px;
                height:120px;
                background:green;
                float:left;
            }
            .right{
                width:100px;
                height:100px;
                background:red;
                float:left;
            }
        </style>
    </head>
    <body>
    	<div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </body>
</html>
```

#### CSS5 浮动 - 清除

中等 通过率：84.98% 时间限制：3秒 空间限制：256M

描述

 通过前面的学习了解到，浮动元素会脱离文档流，因此不会影响其他元素。但,在之前介绍浮动盒子时提到了"文档流中的元素几乎认为浮动盒子不存在"，实际上被浮动盒子覆盖的区域中的文本内容会识别到浮动盒子并且绕开浮动盒子。
 现在给类名为"media"的盒子设置"float: left"属性，让该盒子成为浮动盒子，背景色可以自定义便于观察。此时可以观察到盒子下方的文字内容跑到了盒子右侧。通过调试工具可以发现，两个"p"标签被浮动元素所覆盖，并且内部的文字识别到了浮动元素从而绕开了浮动元素。如果给"section"元素添加边框，就会发现"section"这个父级盒子的高度只有两个"p"标签那么高，并没有将浮动元素的高度计算进去，这样会让布局很困难。
 clear属性的值有"left"、"right"、"both"和"none"，用于指定盒子的那一侧不应该紧挨着浮动盒子。现在再给类名为"clear-left"的"p"标签设置"clear: left"属性，现在可以发现"universe"文本到了浮动盒子的下方并且"section"盒子的高度也发生了变化，该高度包含了浮动盒子的高度。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            section{
                border:1px #000 solid;
            }
            .media {
                width: 100px;
                height: 100px;
                float:left;
                background-color:red;
            }
            .clear-left{
                clear:left;
            }
        </style>
    </head>
    <body>
    	<section>
            <div class="media"></div>
            <p>hello</p>
            <p class="clear-left">universe</p>
        </section>
    </body>
</html>
```



#### CSS6 定位 - static

中等 通过率：94.89% 时间限制：3秒 空间限制：256M

描述

 在流中的元素定位属性值默认都为"static"，即没有定位。此时元素会忽略"top"、"bottom"、"left"、"right"和"z-index"定位属性。
 现在给"section"盒子设置"left: 10px"，这时会发现定位属性无效。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            section {
                width: 100px;
                height: 100px;
                background-color: black;
               left:10px;
                }
        </style>
    </head>
    <body>
    	<section></section>
    </body>
</html>
```

##### CSS7 定位 - inherit

中等 通过率：77.58% 时间限制：3秒 空间限制：256M

描述

 当一个元素的定位属性设置为"inherit"时，表示从父元素继承定位属性。现在虽然类名为"inner"的里盒子设置了"left: 10px"属性，但是这是无效的，因为该盒子的定位属性值为"static"。现在给里盒子添加"position: inherit"属性，表示从类名为"outer"的父级外盒子继承定位属性，现在发现里盒子的"left: 10px"属性依然没有生效，因为外盒子的定位值依然是"static"。最后再给外盒子添加"position: relative"属性，此时会发现里盒子向右移动了10px，定位属性"left"生效了。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .outer {
                width: 100px;
                height: 100px;
                background-color: black;
                position:relative;
            }
            .inner {
                left:10px;
                width: 80px;
                height: 80px;
                background-color: red;
                position:inherit;
            }
        </style>
    </head>
    <body>
    	<section class="outer">
            <section class="inner">
                
            </section>
        </section>
    </body>
</html>
```

#### CSS8 定位 - absolute

中等 通过率：66.11% 时间限制：3秒 空间限制：256M

描述

 绝对定位会把元素拿出文档流，不会再占据原来的空间。绝对定位元素的父级是距离该元素最近的定位祖先，也就是"position"属性不为"static"的最近任意祖先。如果没有这个定位祖先，那么绝对定位元素就相对于文档的根元素"html"进行定位。
 当前类名为"outer"、"middle"、"inner"的盒子（外、中、里盒子）嵌套在一起，现在给三个盒子均设置左内边距10px，再自定义盒子背景颜色以便于观察。再给里盒子设置绝对定位属性"position: absolute"，会发现里盒子的位置并没有发生改变，因为绝对定位的默认位置是当前绝对定位盒子在流中的位置。继续给里盒子设置"left: 0px"属性，观察到里盒子是根据最外层盒子定位的，直接绕过了中间盒子，这是由于中间盒子的定位属性为默认的"static"，此时再给中间盒子设置定位属性"position: absolute"，会发现里盒子现在是根据中间盒子重新定位的。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .outer,.middle,.inner{
                padding-left:10px;
            }
            .outer {
                width: 100px;
                height: 100px;
                background-color:skyblue;
            }
            .middle {
                width: 100px;
                height: 100px;
                background-color:yellowgreen;
                position: absolute;
            }
            .inner {
                width: 100px;
                height: 100px;
                background-color: pink;
                position: absolute;
                left: 0;
            }
        </style>
    </head>
    <body>
    	<div class="outer">
            <div class="middle">
                <div class="inner">
                    
                </div>
            </div>
        </div>
    </body>
</html>
```

#### CSS9 定位 - absolute - 评注

中等 通过率：83.08% 时间限制：3秒 空间限制：256M

描述

 绝对定位非常适合创建弹出层、提示和对话框等覆盖于其他内容之上的组件。比如有一篇文章，可以给文章添加一些行内的评注，最好以气泡图的样式显示在文章外部的空白区域中。
 绝对定位的元素默认会待在自己还在流中时的地方，现在给"aside"盒子设置绝对定位属性"position: absolute"，此时"aside"盒子从流中出来并且覆盖住了下方的元素，现在可以将它向左移动一些，把它定位到文章内容的左边。"article"盒子的左外边距为10rem，想让"aside"评注放在左边空白处的中间，需要进行计算，这里省略计算步骤。现在只需要将评注组件向左移动9rem即可。现在给评注组件设置"margin-left: -9rem"，在CSS中，负边距是完全有效的，负左外边距可以将元素往左拉，其他有趣的效果这里不做赘述。此时观察效果，评注在"相煎何太急？"内容的左边，可以很醒目的告诉读者该句的意思。
emsp;完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            article {
                margin-left: 10rem;
            }
            aside {
                width: 5rem;
                padding: 1rem;
                color: white;
                background-color: pink;
                border-radius: 0.5rem;
                position: absolute;
                margin-left: -9rem;
            }
            aside:after {
                content: '';
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                border: 0.5rem solid pink;
                border-bottom-color: transparent;
                border-right-color: transparent;
                right: -1rem;
                top: 0.5rem;
            }
            .note {
                color: green;
                text-decoration-line: underline;
            }
        </style>
    </head>
    <body>
    	<section>
            <article>
                <p>煮豆燃豆萁，</p>
                <p>豆在釜中泣。</p>
                <p>本是同根生，</p>
                <aside>豆秸怎能这样急迫地煎熬豆子呢？</aside>
                <p class='note'>相煎何太急？</p>
            </article>
        </section>
    </body>
</html>
```



#### CSS10 定位 - z-index

中等 通过率：89.60% 时间限制：3秒 空间限制：256M

描述

 z-index属性设置元素的堆叠顺序，拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的上面。z-index可以设置为负数，且该属性只能作用于定位元素。
 现在给"img"图片标签添加"position: absolute"、"left: 0px"和"top: 0px"属性，此时会发现图片被定绝对定位在了页面的左上角，并且遮挡住了下方的内容。现在继续给图片标签添加"z-index: -1"属性，现在图片堆叠在了字体内容的下方。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            img{
                position:absolute;left:0px;top:0px;z-index:-1;
            }
        </style>
    </head>
    <body>
    	<h1>The countdown to Christmas starts here.</h1>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1912%2F1135-191202143454.jpg&refer=http%3A%2F%2Fuploads.xuexila.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639984107&t=eca951193e736a17eb96278117bcfb1f" width="100">
        <p>由于图像的 z-index 是 -1，因此它在文本的后面出现。</p>
    </body>
</html>
```



#### CSS11 定位 - relative

中等 通过率：93.78% 时间限制：3秒 空间限制：256M

描述

 相对定位的元素仍然会待在原来的地方，即不会从流中出来。此后可以通过"top"、"right"、"bottom"和"left"属性使元素相对于初始位置进行移动。现在给类名为"center"的盒子设置相对定位属性"position: relative"、设置"left: 50px"、设置"top: 50px"，再自定义背景颜色以便于观察。此时可以观察到中间盒子在原始的位置上向右、向下均移动了50px的距离，并且保留了原来的空间。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .left {
                width: 100px;
                height: 100px;
                background-color: pink;
            }
            .center {
                position: relative;
                left: 50px;
                top: 50px;
                width: 100px;
                height: 100px;
                background-color: skyblue;
            }
            .right {
                width: 100px;
                height: 100px;
                background-color: orange;
            }
        </style>
    </head>
    <body>
    	<div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </body>
</html>
```



#### CSS12 定位 - fixed

中等 通过率：80.16% 时间限制：3秒 空间限制：256M

描述

 固定定位是由绝对定位衍生出来的，不同之处在于，固定定位元素的父级始终是视口。因此固定定位可以用来创建始终停留在窗口相同位置的元素。比如：固定侧栏、固定顶栏等。这样方便用户，不必再费事寻找栏目。
 现在给"nav"盒子设置固定定位属性"position: fixed"、设置"top: 0"、设置自定义宽度、背景颜色。此时滑动滚轮，可以发现"nav"盒子始终固定在页面的最上方。但是，数字1却被覆盖了。由于固定定位的盒子不在流中，所以遮盖住了下方的元素。此时再给"section"盒子设置上外边距为1rem，此时1数字正常出现了。固定定位需要注意下方是否有元素被遮挡。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            nav {
                position:fixed;
                top:0;
                width:100px;
                background:red;
            }
            section {
                margin-top:1rem;
            }
        </style>
    </head>
    <body>
    	<nav><br /></nav>
        <section>1<br />2<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></section>
    </body>
</html>
```



#### CSS13 定位 - fixed - 广告

中等 通过率：85.54% 时间限制：3秒 空间限制：256M

描述

 固定定位不仅可以用于导航栏目，还可以用于控制中心、广告、重要提示内容等。本节使用固定定位实现一个广告牌功能，关闭按钮和该按钮的功能已给出，当点击按钮时，广告牌会消失。现在给类名为"advert"的盒子设置固定定位属性"position: fixed"、设置"right: 0"、设置"bottom: 0"，此时广告牌的位置被固定在了视口的右下方。现在还需要将关闭按钮定位在广告牌的右上方，继续给类名为"x"的按钮盒子设置绝对定位属性"position: absolute"、设置"right: 0"，观察按钮的位置，已经被定位在了广告牌的右上方。一个简易的广告牌就设计完成了。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .advert {
                width: 300px;
                height: 200px;
                background-color: black;
                position:fixed;
                right:0;
                bottom:0;
                
            }
            .advert:first-line {
                color: white;
            }
            .x{
            position:absolute;
                right:0;
            }
        </style>
    </head>
    <body>
    	<section class="advert">
            广告文案
            <button class="x">x</button>
        </section>

        <script>
            document.querySelector('button').onclick = function() {
                this.parentNode.style.display = 'none'
            }
        </script>
    </body>
</html>
```

#### CSS14 display - flex

中等 通过率：69.04% 时间限制：3秒 空间限制：256M

描述

 Flexbox，也就是Flexible Box Layout模块，是CSS提供的用于布局的一套新属性。这套属性包含针对容器、容器直接子元素（弹性项）的两类属性。Flexbox可以控制弹性项的这几个方面：
\1. 大小，基于内容以及可用空间
\2. 流动方向，水平还是垂直，正向还是反向
\3. 两个轴向上的对齐与分布
\4. 顺序，与源代码中的顺序无关
 现在给"ul"标签添加"display: flex"属性，让该列表成为flex容器，注意：除非另有声明，否则该属性默认弹性项排列方向为正横向，即"flex-direction: row"。现在可以看到，列表内容已经是水平排列，并且根据各自的内容宽度进行了收缩。现在对主轴（即"flex-direction"属性声明的轴向）进行排列，该属性为"justify-content"且默认值为"flex-start"，现在给"ul"标签设置"justify-content: center"属性，可以发现弹性项在主轴上已经居中了。但是此时会发现由于"home"的字体比其他字体大，所以弹性项在辅轴（与主轴对应的另一方向的轴）上并没有对其，这是由于控制辅轴对齐方式的"align-items"属性默认为"stretch"即拉伸，会占满"ul"的所有高度空间，并且该行的基线是默认的。现在再给"ul"标签添加"align-items: center"属性，会发现"li"标签此时没有撑满"ul"标签的高度，并且在辅轴上是居中对齐的，如果给该属性设置"baseline"值，仅仅会在辅轴上将内容文字对齐。
 以上所提到的容器属性都有多个属性值，可查阅官网。完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            ul {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            nav ul {
                height: 2rem;
                list-style: none;
            }
            nav ul li {
                border: 1px solid black;
            }
            nav ul li:first-child {
                font-size: 1.2rem;
            }
        </style>
    </head>
    <body>
    	<nav>
            <ul>
                <li>home</li>
                <li>spaceships</li>
                <li>planets</li>
                <li>stars</li>
            </ul>
        </nav>
    </body>
</html>
```

#### CSS15 display - flex - 可伸缩项属性

中等 通过率：48.91% 时间限制：3秒 空间限制：256M

描述

 Flexbox支持对弹性项的灵活控制。Flex的意思为可伸缩，这体现在以下三个属性中：
\1. flex-basis：基础值
\2. flex-grow：拉伸弹性系数，如果容器宽度减去弹性项的基础值之和之后还有剩余空间，那么就按照弹性系数比例去分配剩余空间
\3. flex-shrink：缩减弹性系数，和拉伸弹性系数逻辑相反
 这三个属性应用给弹性项，而不是容器。
 现在首先给所有的"li"添加"flex: 1 0 0%"属性，该属性的三个值分别为flex-grow、flex-shrink和flex-basis，表示：当有剩余空间时均匀分配剩余空间、当超出容器宽度时不进行缩放、弹性项的基础值都为容器的0%。此时可以看到四个每个"li"标签的宽度都为125px，分别占据了容器的1/4。现在再单独给第一个"li"标签设置"flex-grow: 2"属性，此时又会发现所有"li"标签的宽度比值为2:1:1:1。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            nav {
                width: 500px;
            }
            nav ul {
                display: flex;
                list-style: none;
            }
            nav ul li {
                flex: 1 0 0%;
            }
            nav ul li:first-child{
                flex-grow:2
            }
        </style>
    </head>
    <body>
    	 <nav>
            <ul>
                <li>home</li>
                <li>spaceships</li>
                <li>planets</li>
                <li>stars</li>
            </ul>
        </nav>
    </body>
</html>
```

#### CSS16 display - flex - 标签

中等 通过率：80.57% 时间限制：3秒 空间限制：256M

描述

 通过之前的学习，现在来实现一组标签，表示星球的种类。当前的"li"标签都是行内盒子，虽然看似实现了标签效果，但是每一行的宽度却没有保持一致，当进行缩放时，布局会特别的混乱。现在使用Flex布局将当前的布局方式进行优化，首先删除"li"标签的"display: inline-block"属性，给"ul"添加"display: flex"使该元素称为弹性容器。再给容器添加"flex-wrap: wrap"属性表示换行，否则所有标签会在第一行排列。此时标签已经分行排列了，但，每一行的宽度看起来依然是不同的，这时候需要通过给弹性项添加属性，通过之前讲过的"flex"属性入手。继续给所有的"li"标签添加"flex: 1 0 auto"属性，auto代表在计算剩余空间时需要减去每个标签自身的宽度而不是之前讲的0%那样忽略了自身的宽度。此时标签功能基本上是完成了，但是注意，最后一行可能因为页面的缩放导致只有一个标签却占满了一整行。那么继续给所有的"li"标签设置"max-width: 10rem"即可，此时最后一行标签虽然少但是看起来依旧很和谐。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                font-size: 12px;
                box-sizing: border-box;
            }
            nav ul {
                padding: 0.5rem;
                list-style: none;
                display: flex;
                flex-wrap: wrap;
            }
            nav ul li {
                //display: inline-block;
                margin: 0.2rem;
                flex: 1 0 auto;
                max-width: 10rem;
            }
            nav ul li a {
                position: relative;
                display: block;
                padding: 0.2rem 0.6rem;
                color: white;
                line-height: 1rem;
                background-color: black;
                border-radius: 0.2rem;
                text-decoration: none;
                text-align: center;
            }
            nav ul li a:before {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
                border: 0.7rem solid transparent;
                border-right-width: 0.7rem;
                border-right-color: black;
                left: -1.2rem;
                top: 0;
            }
        </style>
    </head>
    <body>
    	<nav>
            <ul>
                <li><a href="">Fillithar</a></li>
                <li><a href="">Berzite</a></li>
                <li><a href="">Galidraan</a></li>
                <li><a href="">Gravlex Med</a></li>
                <li><a href="">Cato Neimoidia</a></li>
                <li><a href="">Coruscant</a></li>
                <li><a href="">Dantooine</a></li>
                <li><a href="">Dhandu</a></li>
                <li><a href="">Iktotchon</a></li>
                <li><a href="">Hosnian Prime</a></li>
                <li><a href="">Harkrova I</a></li>
                <li><a href="">Livno III</a></li>
                <li><a href="">Karfeddion</a></li>
                <li><a href="">Eriadu</a></li>
                <li><a href="">Jestefad</a></li>
                <li><a href="">Iridonia</a></li>
                <li><a href="">Malachor</a></li>
                <li><a href="">Gan Moradir</a></li>
                <li><a href="">Kethmandi</a></li>
                <li><a href="">Mirrin Prime</a></li>
                <li><a href="">Ezaraa</a></li>
                <li><a href="">Muunilinst</a></li>
                <li><a href="">Itapi Prime</a></li>
                <li><a href="">Nam Chorios</a></li>
            </ul>
        </nav>
    </body>
</html>
```

#### CSS17 display - flex - order

中等 通过率：96.78% 时间限制：3秒 空间限制：256M

描述

 使用Flexbox的order属性，可以完全摆脱项目在源码中顺序的约束。默认情况下，每个项目的order值都为0，意味着按照他们在源代码中的顺序进行排列。可以观看右边的代码效果，从设计上说，把图片放在最前面可以抓住读者的眼球，是比较好的设计方式，但是对于浏览器而言，拿到标题并且直接将标题呈现给读者的代价一定比获取一张照片并渲染出来小得多。所以可以考虑折中的方式，先渲染标题但是优先显示图片。
 现在给"img"图片标签设置"order: -1"属性，此时观察效果会发现图片的排列在标题之上，其他内容的相对位置不会变，它们的order值仍然是0。order的值不一定要连续，并且正负都可以。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
                display: flex;
                flex-direction: column;
                text-align: center;
            }
                img{
                    order: -1
                }
        </style>
    </head>
    <body>
    	<section>
            <h2>countdown</h2>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1912%2F1135-191202143454.jpg&refer=http%3A%2F%2Fuploads.xuexila.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639984107&t=eca951193e736a17eb96278117bcfb1f" width="100%">
            <article>The countdown to Christmas starts here.</article>
            <p><a href="#">more</a></p>
        </section>
    </body>
</html>
```

#### CSS18 display - grid

中等 通过率：98.68% 时间限制：3秒 空间限制：256M

描述

 Grid，即网格布局。它将页面划分为一个个网格，可以任意组合不同的形态，做出理想的布局效果。Grid布局与Flexbox布局的区别在于，Flexbox是根据轴线对弹性项进行排列，而Grid布局是将容器划分为行和列，产生单元格，然后再对单元格进行操作。
 采用网格布局的区域称为容器。容器内部采用网格定位的每个子元素称为容器项，也是单元格。划分网格的线称为网格线，比如，3x3的网格有4条水平网格线和4条垂直网格线。
 现在给section盒子设置"display: grid"属性，将该盒子变成一个容器。现在需要通过给该容器划分行和列来生成单元格，给容器设置"grid-template-rows: 100px"和"grid-template-columns: repeat(2, 1fr)"两条属性以生成一个Nx2的网格，且每个容器项的宽度比为1:1、第一行的高度为100px（注意：实际上行高度可以不用设置，会根据每个容器项自动撑开，但如果设置了，就要考虑清除需要多少行，当前的行值100px仅为第一行，如果需要前三行都为100px，需要设置为"grid-template-rows: 100px 100px 100px"）。repeat方法可以简化属性值的书写，为了方便表示比例关系，网格布局提供了fr关键字，该关键字和flex-grow颇为相似。实际上如果想固定大小，完全可以将单位全部设置为固定的px值。现在继续给容器添加"grid-gap: 10px"属性，该属性为"grid-row-gap"和"grid-column-gap"两个属性的简写，分别代表行间距和列间距。
 进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 500px;
    text-align: center;
}
            article {
                height: 100px;
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
    	<section>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
            <article>5</article>
            <article>6</article>
            <article>7</article>
            <article>8</article>
            <article>9</article>
        </section>
    </body>
</html>
```

#### CSS19 display - grid - 区域

中等 通过率：98.95% 时间限制：3秒 空间限制：256M

描述

 网格布局允许指定区域，一个区域由单个或多个单元格组成。根据上一节学习的内容，请将"section"设置为网格布局容器，并且生成一个3x3的网格，该网格容器项的宽度、高度都为100px。再给容器添加"grid-template-areas: 'a b c''d e f''g h i'"属性，表示3x3的网格区域划分从左到右、从上到下依次为a、b、c、d、e、f、g、h、i。现在给第一个"article"标签设置"grid-area: e"属性，此时可以看到数字1已经被移动到了最中间的区域，即区域"e"。
 进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
                text-align: center;
                display:grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows:100px 100px 100px;
                grid-template-areas:'a b c''d e f''g h i';
                
                
            }
            article {
                height: 100px;
                border: 1px solid black;
            }
            article:first-child{
                grid-area:e;
            }
        </style>
    </head>
    <body>
    	<section>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
            <article>5</article>
            <article>6</article>
            <article>7</article>
            <article>8</article>
            <article>9</article>
        </section>
    </body>
</html>
```



#### CSS20 单列布局

中等 通过率：75.53% 时间限制：3秒 空间限制：256M

描述

 单列布局是将头部、内容区、底部在页面上垂直排列，是非常实用的一种布局方式。主要对三个区域的宽度进行统一，然后通过设置自动外边距进行居中。
现在给"header"、"section"、"footer"三个盒子统一设置"margin: 10px auto"、"width: 360px"、"border: 1px solid black"属性。此时因为内容区有内容而头部和底部没有内容所以只有内容区的高度被撑开，一般头部和底部的内容是根据自己的需求固定大小的，所以现在再给头部和底部统一设置高度，即"height: 32px"。
完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                width: 500px;
            }
            header,section,footer {
                margin: 10px auto;
                width: 360px;
                border: 1px solid black;
                
            }
            header,footer {
                height: 32px;
            }
        </style>
    </head>
    <body>
    	<header></header>
        <section><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></section>
        <footer></footer>
    </body>
</html>
```

CSS21 双列布局 - 浮动

中等 通过率：80.78% 时间限制：3秒 空间限制：256M

描述

 自适应的双列布局利用浮动、外边和触发父级BFC即可实现，这种方法主要是因为BFC的高度计算会包含其内的浮动元素的高度，父盒子会被撑开。
 现在给类名为"container"的父盒子添加"overflow: hidden"属性，使该父盒子成为BFC。继续给类名为"left"的盒子设置"float: left"和"width: 100px"属性，使该盒子成为浮动元素并且需要一个固定的宽度。最后再给类名为"right"的盒子设置左外边距"margin-left: 100px"属性，该属性值需要和左浮动的盒子宽度一致。此时父盒子的高度会根据左边浮动元素、右边内容区中高度较高的一方进行计算，并且右边内容区的宽度自适应，最好是根据需要，配合最大或最小宽度进行设置。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                border: 1px solid black;
                overflow:hidden;
            }
            .left {
                border: 1px solid black;
                float:left;
                width:100px;
            }
            .right{
                margin-left: 100px
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></article>
            <article class="right"></article>
        </section>
    </body>
</html>
```



#### CSS23 双列布局 - flex

中等 通过率：88.29% 时间限制：3秒 空间限制：256M

描述

 通过Flexbox可以快速实现双列布局，主要通过"flex: 1"这条弹性项属性给内容区申请到父盒子的所有剩余空间，并且可以给弹性项设置"position"属性调整弹性项内部的子盒子细节。
 现在给类名为"container"的父盒子添加"display: flex"属性，使该盒子成为弹性盒容器。继续给类名为"left"的弹性项盒子添加"width: 100px"属性。最后给类名为"right"的弹性项盒子添加"flex: 1"属性。由于弹性项盒子默认占满弹性容器盒子的所有高度，所以两个弹性项盒子的高度也是自适应。右边的内容区宽度会占满弹性容器盒子的剩余空间，所以宽度也是自适应的。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                border: 1px solid black;
                display: flex;
            }
            .left {
                border: 1px solid black;
                width:100px;
            }
            .right {
                border: 1px solid greenyellow;
                flex:1;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></article>
            <article class="right"></article>
        </section>
    </body>
</html>
```

#### CSS24 双列布局 - grid

中等 通过率：98.37% 时间限制：3秒 空间限制：256M

描述

 使用Grid网格布局实现双列布局的要点在于列数为2，且首列的宽度根据需要自行设置，第二列使用片段"fr"属性进行自适应即可。行数不需要指定，每行会根据内容高度进行自适应缩放。
 现在给类名为"container"的盒子添加"display: grid"属性，使该盒子成为容器。再给该容器添加"grid-template-columns: 100px 1fr"属性，表示第一列宽度始终为100px，第二列的宽度为剩余的所有空间。此时可以看到整个容器的高度因为首列的内容被撑开了，并且右边内容区实现了自适应。
 进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                border: 1px solid black;
                display:grid;
                grid-template-rows:100px 1fr;
            }
            .left {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></article>
            <article class="right"></article>
        </section>
    </body>
</html>
```



#### CSS25 三列布局 - 浮动

中等 通过率：74.74% 时间限制：3秒 空间限制：256M

描述

 使用浮动实现三列布局的注意点是浮动元素需要写在内容元素之前，否则布局是混乱的。这种方式实现三列布局是优点是简单、兼容性好，但缺点是需要清除浮动，否则父盒子的高度无法撑开，可能会导致其他页面元素的布局混乱。
 首先给类名为"container"的盒子添加"overflow: hidden"属性，该属性可以使盒子成为BFC，处理浮动元素父盒子高度塌陷的问题。再给类名为"left"的盒子添加"float: left"和"width: 100px"两条属性，首先往左浮动，宽度这里设置100px。继续给类名为"right"的盒子添加"float: right"和"width: 100px"两条属性，往右浮动。最后给类名为"center"的盒子设置外边距"margin: 0px 100px"，该属性上下外边距为0px，左右外边距为两边浮动元素的宽度100px，这样保证了中间的内容区域不会被两边的浮动元素覆盖住。注意，HTML文档中两个浮动元素的顺序在内容元素之前。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                border: 1px solid black;
                overflow: hidden;
            }
            .left {
                border: 1px solid black;
                float: left;
                width: 100px;
                
            }
            .right {
                border: 1px solid black;
                float: right;
                width: 100px;
            }
            .center{
                margin: 0px 100px;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /><br /></article>
            <article class="right"><br /><br /><br /></article>
            <article class="center"></article>
        </section>
    </body>
</html>
```

#### CSS26 三列布局 - 绝对定位

中等 通过率：77.89% 时间限制：3秒 空间限制：256M

描述

 使用绝对定位实现三列布局，实际上是和之前使用绝对定位实现双列布局同一个原理。主要思路是，两边通过绝对定位定位到父盒子的左、右边框上，再根据实际的需要设置两边盒子的宽度，高度是根据内容自适应的。中间内容区通过定位属性左、右自适应宽度。
 现在给类名为"container"的盒子添加"position: relative"，该属性使子元素可以相对该盒子做定位。继续给类名为"left"的盒子添加"position: absolute"、"left: 0px"和"width: 100px"三条属性。继续给类名为"right"的盒子添加"position: absolute"、"right: 0px"和"width: 100px"三条属性。最后给类名为"center"的盒子添加"position: absolute"、"left: 100px"和"right: 100px"三条属性，表示自适应区域为距离左边100px至距离右边100px。此时可以看到三个盒子的高度不同，根据内容高度撑开，实际中可以按需设置高度值。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container{
                position:relative;
            }
            .left {
                border: 1px solid black;
                position:absolute;
                left:0;
                width:100px;
            }
            .center {
                border: 1px solid black;
                position:absolute;
                left:100px;
                right:100px;
            }
            .right {
                border: 1px solid black;
                position:absolute;
                right:0;
                width:100px
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /></article>
            <article class="center"><br /><br /><br /></article>
            <article class="right"><br /><br /><br /><br /></article>
        </section>
    </body>
</html>
```

#### CSS27 三列布局 - flex

中等 通过率：89.95% 时间限制：3秒 空间限制：256M

描述

 相比于浮动和定位，使用Flexbox布局实现三列布局要更好，因为弹性容器的高度会根据最高的弹性项进行修正，不会出现明显的台阶式效果。Flexbox实现三列布局的特点为简单、使用、强大，核心思路为设置中间内容盒子的"flex: 1"属性，让中间内容区的宽度自适应，独自占据弹性容器的全部剩余空间。
 现在给类名为"container"的盒子添加"display: flex"属性，使该盒子成为弹性容器。再给类名为"left"和"right"的盒子添加"width: 100px"属性，最后给类名为"center"的盒子添加"flex: 1"属性，使该盒子占据容器盒子的全部剩余空间。此时会发现即使三个子盒子的内容高度不同，但容器和子会根据最高的子元素进行修正，并且没有出现浮动和定位中的台阶式效果。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container {
                display: flex;
            }
            .left {
                width: 100px;
                border: 1px solid red;
            }
            .center {
                flex: 1;
                border: 1px solid black;
            }
            .right {
                width: 100px;
                border: 1px solid skyblue;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /></article>
            <article class="center"><br /><br /><br /></article>
            <article class="right"><br /><br /><br /><br /></article>
        </section>
    </body>
</html>
```



#### CSS28 三列布局 - grid

中等 通过率：99.21% 时间限制：3秒 空间限制：256M

描述

 使用grid网格布局实现三列布局，和之前所讲的gird实现双列布局是同样的思想，只是把列数变为了3，高度依然不设置，通过容器项的内容高度自适应撑开整体高度。
 现在给类名为"container"的盒子添加"display: grid"属性，使该盒子成为网格布局容器。再给该容器添加"grid-template-columns: 100px auto 100px"属性，表示该容器一共有3列，且宽度分别为100px、自适应、100px。不需要设置行属性，当有多个元素时容器会自适应的往下顺次排列。此时观察容器的高度，是根据容器项中高度最高的那一项决定的，也不会产生台阶式效果。
 进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
             * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container{
                display: grid;
                grid-template-columns: 100px 1fr 100px;
            }
            .left {
                border: 1px solid black;
            }
            .center {
                border: 1px solid black;
            }
            .right {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="left"><br /><br /><br /></article>
            <article class="center"><br /><br /><br /></article>
            <article class="right"><br /><br /><br /></article>
        </section>
    </body>
</html>
```



#### CSS29 三列布局 - 圣杯布局

中等 通过率：40.72% 时间限制：3秒 空间限制：256M

描述

 不像Flexbox或Grid布局可以控制元素显示的次序，圣杯布局是通过浮动元素和外边距属性实现三列布局，但最重要的一点是，在文档中需要将优先渲染的内容写在最前方，但显示时看起来却好像是按照显示次序书写的一样。
 首先给类名为"container"的盒子添加"overflow: hidden"和"padding: 0px 100px"属性，以为了防止容器盒子高度塌陷和给之后的左、右浮动元素预留位置。现在继续给类名为"left"的盒子添加以下属性：
\1. "float: left"，浮动，保证之后的"margin-left"属性可以将自身拉到上一行
\2. "width: 100px"，固定宽度
\3. "margin-left: -100%"，该属性可以将元素向左移动属性值的单位，100%相对于父容器计算
\4. "position: relative"，相对定位，需要将自身再向左移动自身的宽度，进入容器的"padding-left"区域
\5. "left: -100px"，自身的宽度，刚好进入容器的"padding-left"区域
 到这里圣杯布局中最核心的步骤和思想就完了。之后继续给类名为"right"的盒子添加"float: left"、"width: 100px"、"margin-left: -100px"、"position: relative"和"left 100px"属性，该右盒子的思想和左盒子一样，即，将右盒子向上拉一行并且再向右移动自身宽度进入"padding-right"区。最后再给类名为"center"的盒子添加"float: left"和"width: 100%"即可。此时中间内容区的宽度是自适应的，并且因为有内边距属性所以内容不会被两边的浮动盒子遮挡住。
 圣杯布局需要注意的是，当中间内容区域的宽度小于左、右盒子的宽度时，整个布局就会混乱，所以为了避免这种情况，再给容器盒子添加"min-width: 100px"属性，保证圣杯布局正确、有效。
 完成以上所讲的步骤即可通过测试，进入下一节的学习吧。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .container {
                overflow: hidden;
                padding: 0 100px;
                min-width: 100px;
                border: 1px solid black;
            }
            .left {
                float: left;
                width: 100px;
                height: 50px;
                margin-left: -100%;
                position: relative;
                left: -100px;
                background-color: greenyellow;
            }
            .center {
                float: left;
                width: 100%;
                background-color: darkorange;
            }
            .right {
                float: left;
                width: 100px;
                height: 100px;
                margin-left: -100px;
                position: relative;
                left: 100px;
                background-color: darkgreen;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="center"><br />center<br /><br /></article>
            <article class="left"><br />left<br /><br /></article>
            <article class="right"><br />right<br /><br /></article>
        </section>
    </body>
</html>
```



#### CSS30 三列布局 - 双飞翼布局中等 通过率：71.25% 时间限制：3秒 空间限制：256M

描述

 双飞翼布局是在圣杯布局上做了优化，解决了圣杯布局中布局发生错乱的问题。核心思路是在圣杯布局的基础上，再在内容区添加一层新的盒子，该盒子通过外边距将内容与两边的浮动元素分隔开，实际上中心盒子是没有"padding"属性的。
首先给类名为"container"的盒子添加"overflow: hidden"属性，解决子浮动元素导致的高度塌陷问题。然后继续给类名为"left"的盒子添加"float: left"、"margin-left: -100%"和"width: 100px"。再给类名为"center"的盒子添加"float: left"和"width: 100%"属性，该盒子并没有像圣杯布局时添加"padding"属性那样。继续给类名为"right"的盒子添加"float: left"、"width: 100px"和"margin-left: -100px"。最后给类名为"main"的盒子添加"margin: 0px 100px"，该属性为双飞翼布局的核心点，使用外边距将内容封锁在两边浮动元素的中间。
完成以上所讲的步骤即可通过测试。感谢您，再见。

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .container {
                border: 1px solid black;
                overflow:hidden;
            }
            .center{
                float:left;
                width:100%;
            }
            .left {
                background-color: greenyellow;
                float:left;
                margin-left:-100%;
                width:100px;
            }
            .main {
                background-color: darkorange;
                margin:0px 100px;
            }
            .right {
                background-color: darkgreen;
                float:left;
                width:100px;
                margin-left:-100px;
            }
        </style>
    </head>
    <body>
    	<section class="container">
            <article class="center"><main class="main"><br /><br /><br /></main></article>
            <article class="left"><br /><br /><br /></article>
            <article class="right"><br /><br /><br /></article>
        </section>
    </body>
</html>
```





# 前端面试手撕题

### FED1 事件委托

描述

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



### FED8 实现Array.filter函数的功能

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

示例1

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

### FED12 Function.bind

#### 描述

请补全JavaScript代码，要求实现Function.bind函数的功能且该新函数命名为"_bind"。

```
题解 | #Function.bind#
12_Function.bind
本题考点：this、apply

根据题目要求，实现一个仿Function.bind功能的"Function._bind"函数，该函数会返回一个新的函数且该新函数内部通过apply修改了函数内部this指向，核心步骤有：

创建一个新this用来保存旧的this对象
返回一个匿名函数，该匿名函数返回通过apply修改了指针指向的函数运算结果
参考答案：

Function.prototype._bind = function(target, ...arguments1) {
    const _this = this
    return function(...arguments2) {
        return _this.apply(target,arguments1.concat(arguments2))
    }
}
```

### FED13 实现new操作符

#### 描述

请补全JavaScript代码，要求实现new操作符的功能。

```
本题考点：原型链

根据题目要求，实现一个仿new功能的新"_new"函数，该函数会返回一个对象，该对象的构造函数为函数参数、原型对象为函数参数的原型，核心步骤有：

创建一个新对象
获取函数参数
将新对象的原型对象和函数参数的原型连接起来
将新对象和参数传给构造器执行
如果构造器返回的不是对象，那么就返回第一个新对象
参考答案：

const _new = function() {
    const object1 = {}
    const Fn = [...arguments].shift()
    object1.__proto__ = Fn.prototype
    const object2 = Fn.apply(object1, arguments)
    return object2 instanceof Object ? object2 : object1
}
```

### FED14 Object.freeze

#### 描述

请补全JavaScript代码，要求实现Object.freeze函数的功能且该新函数命名为"_objectFreeze"

```
题解 | #Object.freeze#
需要注意的点
注意不可枚举的属性也要重新冻结。
注意 Symbol 类型作为 key 值的情况，也要冻结。
注意只冻结对象自有的属性（使用 for ... in 会把原型链上的可枚举属性遍历出来）。
注意不可扩展性（不能添加新属性，使用 Object.preventExtensions() 或 Object.seal() 实现，同时也相当于把原型链冻结）。

const _objectFreeze = object => {
    // 补全代码
    if(typeof object !== 'object' || object === null) {
        throw new TypeError(`the ${object} is not a object`)
    }

    const keys = Object.getOwnPropertyNames(object)
    const symbols = Object.getOwnPropertySymbols(object)

    ;[...keys, ...symbols].forEach(key => {
        Object.defineProperty(object, key, {
            configurable: false,
            writable: false,
        })
    })

    Object.preventExtensions(object)
}
```

### FED15 浅拷贝

#### 描述

请补全JavaScript代码，要求实现一个对象参数的浅拷贝并返回拷贝之后的新对象。
注意：
\1. 参数可能包含函数、正则、日期、ES6新对象

```
15_浅拷贝
本题考点：遍历

根据题目要求，实现一个对象参数的浅拷贝并返回拷贝之后的新对象，因为可能包含函数、正则、日期、ES6新对象，所以需要对这些对象类型进行特殊判断，核心步骤有：

如果对象参数的数据类型不为"object"或为"null"，则直接返回该参数
如果是"object"，就获取该参数的构造函数名，通过正则表达式判断该对象是否为函数、正则、日期、ES6新对象等，如果返回true，则直接返回该参数
当以上条件判断之后函数依然没有结束时，此时通过数组的原型方法判断该参数为普通对象或数组并创建相应数据类型的新变量
进入遍历体，将对象参数的每一项赋值给新变量
最终返回该新变量
参考答案：

const _shallowClone = target => {
    if(typeof target === 'object' && target !== null) {
        const constructor = target.constructor
		if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return target
        const cloneTarget = Array.isArray(target) ? [] : {}
        for(prop in target) {
            if(target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop]
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
```

### FED16 简易深拷贝

#### 描述

请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象。
注意：
\1. 参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中]
\2. 无需考虑循环引用问题

```
16_简易深拷贝
本题考点：递归、遍历

根据题目要求，实现对象参数的深拷贝并返回拷贝之后的新对象，因为参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中且无需考虑循环引用问题，所以不需要做过多的数据类型判断，核心步骤有：

如果对象参数的数据类型不为“object”或为“null”，则直接返回该参数
根据该参数的数据类型是否为数组创建新对象
遍历该对象参数，将每一项递归调用该函数本身的返回值赋给新对象
参考答案：

const _sampleDeepClone = target => {
    if(typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for(prop in target) {
            if(target.hasOwnProperty(prop)) {
                cloneTarget[prop] = _sampleDeepClone(target[prop])
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
```

### FED17 深拷贝

### 描述

请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象。
注意：
\1. 需要考虑函数、正则、日期、ES6新对象
\2. 需要考虑循环引用问题

```
17_深拷贝
本题考点：递归、遍历、Map

根据题目要求，实现对象参数的深拷贝并返回拷贝之后的新对象，因为需要考虑参数对象和参数对象的每个数据项的数据类型可能包括函数、正则、日期、ES6新对象且必须考虑循环引用问题，所以需要引入ES6新对象Map并且详细的判断数据类型，核心步骤有：

首先判断对象参数是否为“null”，是则返回“null”
判断对象参数数据类型是否为“object”，不是则返回该参数
获取到对象参数的构造函数名，判断是否为函数、正则、日期、ES6新对象其中之一，如果是则直接返回通过该参数对象对应的构造函数生成的新实例对象
当以上条件判断之后函数依然没有结束时继续进行以下操作
在Map对象中获取当前参数对象，如果能获取到，则说明这里为循环引用并返回Map对象中该参数对象的值
如果在Map对象中没有获取到对应的值，则保存该参数对象到Map中，作为标记
根据该参数的数据类型是否为数组创建新对象
遍历该对象参数，将每一项递归调用该函数本身的返回值赋给新对象
参考答案：

const _completeDeepClone = (target, map = new Map()) => {
    if(target === null) return target
    if(typeof target !== 'object') return target
    const constructor = target.constructor
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
    if(map.get(target)) return map.get(target)
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for(prop in target) {
        if(target.hasOwnProperty(prop)) {
        	cloneTarget[prop] = _completeDeepClone(target[prop], map)
        }
    }
    return cloneTarget
}
```

### FED18 寄生组合式继承

#### 描述

请补全JavaScript代码，要求通过寄生组合式继承使"Chinese"构造函数继承于"Human"构造函数。要求如下：
\1. 给"Human"构造函数的原型上添加"getName"函数，该函数返回调用该函数对象的"name"属性
\2. 给"Chinese"构造函数的原型上添加"getAge"函数，该函数返回调用该函数对象的"age"属性

```
18_寄生组合式继承
本题考点：原型链、call、Object.create

根据题目要求，通过寄生组合式继承使"Chinese"构造函数继承于"Human"构造函数。寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的形式来继承方法，只调用了一次父类构造函数，效率高，也避免了在子类的原型对象上创建不必要的、多余的属性，原型链也不会被改变，核心步骤有：

在"Human"构造函数的原型上添加"getName"函数
在”Chinese“构造函数中通过call函数借助”Human“的构造器来获得通用属性
Object.create函数返回一个对象，该对象的__proto__属性为对象参数的原型。此时将”Chinese“构造函数的原型和通过Object.create返回的实例对象联系起来
最后修复"Chinese"构造函数的原型链，即自身的"constructor"属性需要指向自身
在”Chinese“构造函数的原型上添加”getAge“函数
参考答案：

function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}
Human.prototype.getName = function() {
    return this.name
}
function Chinese(name,age) {
    Human.call(this,name)
    this.age = age
    this.color = 'yellow'
}
Chinese.prototype = Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese
Chinese.prototype.getAge = function() {
    return this.age
}
```

### FED19 发布订阅模式

#### 描述

请补全JavaScript代码，完成"EventEmitter"类实现发布订阅模式。
注意：
\1. 同一名称事件可能有多个不同的执行函数
\2. 通过"on"函数添加事件
\3. 通过"emit"函数触发事件

```
19_发布订阅模式
本题考点：设计模式

根据题目要求，完成"EventEmitter"类实现发布订阅模式，考虑到同一名称事件可能有多个不同的执行函数，所以在构造函数中需要以对象的结构存放事件，核心步骤有：

构造函数中创建”events“对象变量用于存放所有的事件
添加”on“函数，用于订阅事件。当总事件中不存在此事件时创建新的事件数组，当存在时将”fn“函数添加在该事件对应数组中
添加”emit“函数，用于发布事件，遍历该事件下的函数数组并全部执行
参考答案：

class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(event, fn) {
        if(!this.events[event]) {
            this.events[event] = [fn]
        } else {
            this.events[event].push(fn)
        }
    }
    emit(event) {
        if(this.events[event]) {
            this.events[event].forEach(callback => callback())
        }
    }
}
```

### FED20 观察者模式

#### 描述

请补全JavaScript代码，完成"Observer"、"Observerd"类实现观察者模式。要求如下：
\1. 被观察者构造函数需要包含"name"属性和"state"属性且"state"初始值为"走路"
\2. 被观察者创建"setObserver"函数用于保存观察者们
\3. 被观察者创建"setState"函数用于设置该观察者"state"并且通知所有观察者
\4. 观察者创建"update"函数用于被观察者进行消息通知，该函数需要打印（console.log）数据，数据格式为：小明正在走路。其中"小明"为被观察者的"name"属性，"走路"为被观察者的"state"属性
注意：
\1. "Observer"为观察者，"Observerd"为被观察者

```
20_观察者模式
本题考点：设计模式

根据题目要求完成"Observer"、"Observerd"类实现观察者模式。核心步骤有：

被观察者构造函数声明三个属性分别为"name"用于保存被观察者姓名、"state"用于保存被观察者状态、"observers"用于保存观察者们
被观察者创建"setObserver"函数，该函数通过数组的push函数将观察者参数传入"observers"数组中
被观察者创建"setState"函数，该函数首先通过参数修改被观察者的"state"属性，然后通过遍历"observers"数组分别调用各个观察者的"update"函数并且将该被观察者作为参数传入
观察者创建"update"函数，用于打印信息
参考答案：

class Observerd {
    constructor(name) {
        this.name = name
        this.state = '走路'
        this.observers = []
    }
    setObserver(observer) {
        this.observers.push(observer)
    }
    setState(state) {
        this.state = state
        this.observers.forEach(observer => observer.update(this))
    }
}
class Observer {
    constructor() {
        
    }
    update(observerd) {
        console.log(observerd.name + '正在' + observerd.state)
    }
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

