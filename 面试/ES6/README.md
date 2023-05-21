## [ES6](https://es6.ruanyifeng.com/)

### [${}](模板字符串)

### [const 和 let](../JS/data-types/README.md#变量声明h2-id"variable-declaration"-style"displaynone"-h2)

### [数组的扩展](https://es6.ruanyifeng.com/#docs/array)

- Array.from() 将类数组对象（array-like object）和可遍历（iterable）的对象转为数组
  > 例如 ES6 新增的 Set 和 Map
- find() 和 findIndex() 分别返回第一个符合条件的成员和第一个符合条件成员的下标位置，如果没有符合条件的成员，则返回 undefined。它们的参数为一个回调函数，该函数接受 3 个参数：当前值、当前值的下标和原数组。
- fill() 使用给定值，填充数组，可接受 3 个参数：填充值、填充的起始位置和填充的结束位置。
- keys() 、 values()和 entries() 分别遍历键名、键值和键值对。
- includes() 判断数组是否包含给定的值，返回布尔值。
- [flat](../%E6%89%8B%E5%86%99%E6%96%B9%E6%B3%95/%E6%96%B9%E6%B3%95/flat.js)() “拉平”数组 `flatMap()`对原数组的每个成员执行一个函数，然后对返回值组成的数组执行`flat()`方法(即先`map`再`flat`)。该方法返回一个新数组，不改变原数组。

### [函数的扩展](https://es6.ruanyifeng.com/#docs/function)

- 参数默认值
- rest 参数（形式为...变量名），无需使用`arguments`对象。
- 箭头函数
  - 没有自己的 this 对象，绑定定义时所在的对象
  - 不可以当作构造函数
  - 不可以使用 `arguments` 对象，使用 `rest` 参数代替
  - 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数
  - 使用`call apply bind`等方法无法改变 this 指向，只会传入参数

### [对象的新增方法](https://es6.ruanyifeng.com/#docs/object-methods)

- Object.is() 判断两个值是否严格相等，与`===`基本一致，不同之处在于
  ```js
  Object.is(NaN, NaN); // true
  Object.is(0, -0); // false
  0 === -0; //true
  NaN === NaN; // false
  ```
- Object.assign(target, source) 将源对象的所有可枚举属性，复制到目标对象。

### [运算符的扩展](https://es6.ruanyifeng.com/#docs/operator)

- 指数运算符(`**`): 2\*\*3 = 8
- 链判断运算符 (`?.`):如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。
  ```js
  const firstName = message?.body?.user?.firstName || "default";
  ```
- Null 判断运算符(`??`):如果变量为 null 或 undefined，则返回第二个参数，否则返回第一个参数。
- 逻辑赋值运算符

  - **`||=`** **`&&=`** **`??=`**

  ```js
  // 或赋值运算符
  x ||= y;
  // 等同于
  x || (x = y);
  // 与赋值运算符

  x &&= y;
  // 等同于
  x && (x = y);

  // Null 赋值运算符
  x ??= y;
  // 等同于
  x ?? (x = y);
  ```

### [Symbol](https://es6.ruanyifeng.com/#docs/symbol)

- 新的原始数据类型，表示独一无二的值。

### [Set](https://es6.ruanyifeng.com/#docs/set)

- 类数组，没有重复的值。
- 方法：
  - add(value) 添加值
  - delete(value) 删除值
  - has(value) 判断值是否存在
  - clear() 清空
  - size() 返回集合的大小
- WeakSet 只能添加对象，不能添加其他类型的值。

### [Map](https://es6.ruanyifeng.com/#docs/map)

- 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
- 方法：
  - set(key, value) 添加或更新一个值
  - get(key) 获取指定的值
  - has(key) 判断是否存在指定的键
  - delete(key) 删除指定的键
  - clear() 清空
  - size() 返回`Map`的大小
  - keys() 返回所有的键
  - values() 返回所有的值
  - entries() 返回所有的键值对的数组
  - forEach() 遍历 Map 的所有成员。
- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
  - 方法`get()、set()、has()、delete()`

### [Proxy](https://es6.ruanyifeng.com/#docs/proxy)

- 代理，用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

### [Promise](https://es6.ruanyifeng.com/#docs/promise)

- [promise](./promise.md#promise-对象)

### [Class]()

- 程序中专门集中保存一种类型的所有子对象的统一属性结构和方法定义的程序结构
实际是语法糖，，绝大部分功能都能使用 es5 语法做到
- constructor 构造方法
- 公有方法， 直接创建` funcName(){...}`
- static 静态属性
- extends 继承父类型
    - super 继承父类型的构造方法
### 尾调用和尾递归优化[查看](https://blog.csdn.net/weixin_42569598/article/details/117514083)
