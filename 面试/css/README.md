### 盒子模型

- 标准盒子 width = content
- IE 盒子 width = border + content + padding
- 设置方式 `box-sizing: content-box | border-box;`

### 水平垂直居中

- [常见的居中方式](https://juejin.cn/post/7062608828570796046)
  - `position: absolute;transform: translate(-50%,-50%);`绝对定位+自身位移
  - `position: relative;left: 50%;top: 50%;`相对定位+自身位移
  - `table -> table-cell`
  - `absolute -> margin auto`
  - [flex](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)(推荐，ES6 方案)

### [动画、过渡、转换、变形](https://juejin.cn/post/6844903615920898056)

### 选择器

- .class/ #id / tag / \*
- 伪类：:link 未访问过的链接 :visited 已访问过的链接 :hover 鼠标悬停时 :active 鼠标点击 :focus 具有焦点的输入元素
- :first-child 第一个子元素 last-of-type 最后一个子元素 nth-child(n)第 n 个子元素，n 可谓常数或表达式
- :before 在元素之前插入内容 :after 在元素之后插入内容

### 渐变

- 线性渐变 Linear Gradients `background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`
- 径向渐变 Radial Gradients `background-image: radial-gradient(center, color-stop1, color-stop2, ...);`

### 媒体查询

### BFC(块级格式化上下文)[查看](https://juejin.cn/post/6950082193632788493#heading-5)

- 概念：一个**独立渲染区域**，里面的元素不会影响外面的元素，外面的元素也不会影响里面的元素。
- 布局规则：提供了一个环境，元素在按照一定规则进行布局
- 触发：overflow: hidden | position: absolute | position: fixed |display: inline-block | display: table-cell | display: flex
- 应用：1. 防止 margin 重叠 2. margin 溢出 3. 高度坍塌问题 4. 自适应多栏布局
- 布局规则详细：
  - 块元素垂直方向的总距离由`边框内大小`和 `margin` 共同决定
  - 属于同一个 BFC 的两个相邻块元素在垂直方向上的 margin 会发生重叠/合并。但水平方向的 margin 不会
  - 计算父元素 BFC 高度时，必须计算内部浮动元素的高度
  - 形成条件
    - float 不为 none
    - position 不是 static 或 relative
    - display 为 inline-block | rable-cell | flex | table-caption | inline-flex
    - overflow 不为 visible

> margin 重叠：指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起

### IFC(行内格式化上下文)

### 高度坍塌

- 问题：父元素的高度，都是由内部未浮动子元素的高度撑起的；如果子元素浮动起来，就不占用普通文档流的位置。父元素高度就会失去支撑，也称为高度坍塌。
- 解决方案
  1. 为父元素设置 `overflow:hidden` 属性
     - 原理: CSS 中的`overflow :hidden`属性会强制要求父元素必须包裹住所有内部浮动的元素，以及所有元素的 margin 范围。
     - 缺点：在有需要时，无法显示超出范围的子元素
  2. 在父元素结尾添加一个空子元素，并设置清浮(clear:both)
     - 原理：利用`clear:both`属性，以及父元素必须包含非浮动的元素
     - 缺点：多出一个无意义的空元素，影响选择器
  3. 设置父元素浮动
     - 原理：浮动属性使父元素扩大到包含所有浮动的内部元素
     - 缺点：会产生新的浮动影响 -> 可结合方案二，设置父元素之后的平级元素清除浮动
  4. 给父元素末尾伪元素设置`clear:both` (完美方案)
     - 优点： 既不会影响显示隐藏，又不会影响查找元素，又不会产生新的浮动问题
     - 一个小问题：个别浏览器可能给`display:table;`设置默认高度，因此需要额外加上`height:0`
     - 设置方法：`父元素::after{ content:""; display:table; clear:both; height:0 }`

 

### 其他

- 边框(border)
- 背景(background)
- 字体(font)
