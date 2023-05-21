## VUE-ROUTER

### hash 模式

利用 url 中 hash 值改变不会向服务器发出请求的特性，不会刷新页面；同时还会触发`hashchange`事件，可以通过监听事件实现更新页面内容的操作

### history 模式

利用 HTML5 中 history 新增的`pushState`和`replaceState`，可以改变 url 地址切不发送请求，同时还会触发`popstate`事件，可以通过监听事件实现更新页面内容的操作。使用 HTML5 实现，url 中不会多出`#`号，更加美观。但没有`#`，当用户刷新页面之类的操作时，浏览器会给服务器发送请求。所以需要服务器的支持，将路由重定向到根页面

- 不同
  1. `pushState()` 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 `hash` 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
  2. `pushState()` 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 `hash` 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
  3. `history` 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如缺少，则返回 `404 错误`；`hash`模式下，仅 `hash` 符号之前的内容会被包含在请求中，所以前端的 URL 没有全覆盖也不会返回 `404 错误`

### [如何响应动态路由参数的变化](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)

### [捕获所有路由或 404 Not found 路由](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1)

### 如果让你实现 vue-router，该怎么做

      ![image](./%E5%AE%9E%E7%8E%B0vue-router.jpg)
