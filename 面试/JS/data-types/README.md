## 数据类型

- 在 JS 中,数据分为基础数据类型与引用类型，即原始值与引用值。原始值是最简单的数据，而引用值则是由多个值构成的对象。
- 基础数据类型有以下 6 种：undefined、null、boolean、number、string 以及 symbol（ES6 新增）。在实际使用中，我们操作的就是存储在变量中的实际值；**保存在栈内存**
- 引用类型则是保存在内存中的对象。因为 JS 不允许直接访问内存位置，因此操作对象时实际是操作该对象的引用。（但在给对象添加属性时，操作的是实际对象，因此该说法并不严谨）**保存在堆内存**

- 复制数据的不同点

  1. 基础数据类型复制互不影响；
  2. 在引用类型数据种，简单的复制（赋值）等操作，由于操作的是对象的引用，因此两者引用的是同一个对象。

- 复制引用数据

```js
// 浅复制
function shallowCopy(obj) {
  let newObj = obj instanceof Object ? {} : [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      newObj[key] = element;
    }
  }
  return newObj;
}
// 深复制
function deepCopy(obj) {
  if (obj && typeof obj === "object") {
    let newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(typeof obj[key]);
        if (obj[key] && typeof obj[key] === "object") {
          deepCopy(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  } else {
    return obj;
  }
}
```

- 判断数据类型

  1. 通常用 typeof 判断基础类型的值，如字符串、数值、布尔值或 undefined 等。但 null 是个特例，使用 typeof 判断类型时返回的是 Object。
  2. ES6 提供了更有效的 instanceof 操作符用来判断引用值。使用 intanceof 检测原始值返回 false。

### 变量声明

1. ES6 之前只有 var 声明关键字，ES6 添加了 const 和 let 关键字。
2. var 的变量提升(声明提前)问题；
   - 使用 var 生命变量实际上是两个过程，以`var a = 1`为例，在 js 的执行过程中，会先找到所有的变量声明，并将他们拿到作用域的顶，此时`a`的值为 undefined，再将`1`的值赋给 a。在这个**变量提升**过程中，是函数优先的。
   ```js
   function fn() {
     console.log(a); //此时a有效，输出值为undefined（严格模式下报错）
     var a = 1;
   }
   fn();
   ```
3. const 与 let
   - let 与 const 有自己的块级作用域，由`{}`界定，更适合在循环中生命迭代变量，因为 var 生命的变量会泄漏到循环外部。
   - let 不会有“变量提升”问题，是因为在提升后，由于“暂时性死区”的存在，无法在声明前使用 let 变量。
   - 无法重复声明变量
   - 使用 const 声明常量，在声明时必须同时初始化为某个值，因为声明后，不能再重新赋值。
     - **const 声明只应用到顶级原语或者对象**：赋值为对象的 const 变量不能再被重新赋值为其他引用值，但对象的键则不受限制。
   - let 底层相当于匿名函数自调

### 内存泄漏

- 全局变量、定时器、闭包等
-

### [栈 & 堆](https://juejin.cn/post/6844903997615128583)
