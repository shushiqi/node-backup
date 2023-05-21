## cookie 和 session

cookie 和 session 都是用来跟踪浏览器用户身份的会话方式。

- 区别
  1. 状态：`cookie`保存在浏览器端，`session`保存在服务器端；
  2. 使用：`cookie`保存在内存中，随浏览器关闭而结束，若设置过期时间，关闭浏览器数据仍存在，直到过期时间结束；session 首先检查客户端中是否存在`sessionid`，服务器根据`sessionid`返回 session 对象，使用`cookie`方式存储 session 对象。若禁用`cookie`，则需使用 URL 重写，可通过`response.encodeURL(url)` 进行实现。这个 API 对 encodeURL 的结果为，当浏览器支持`Cookie`时，url 不做任何处理；当浏览器不支持`Cookie`的时候，将会重写 URL 将`sessionid`拼接到访问地址后;
  3. 存储：`cookie`以文本的方式保存为字符串类型，大小不超过 4kb。`session`类似 HashTable，可以支持任何类型对象，大小没有限制；
     1. `cookie`欺骗，`cookie`截获；`session`的安全性大于`cookie`；原因：
        - `sessionid`存储在`cookie`中，首先需要攻破`cookie`；
     - `sessionid`是需要登录或启动`session_start`才有等等
  4. 应用场景：
     - `cookie`： 是否登陆过网站（实现自动登录）；保存上次登陆时间等信息；保存上次查看页面；浏览计数；
     - `session`： 商城购物车；防止用户非法登录；将某些数据放入 session 中，供同一用户的不同页面使用；
  5. **缺点**：
     - `cookie`：
       1. 大小受限；
       2. 可被禁用；
       3. 安全性较低；某些状态不可保存在客户端；
       4. 每次访问都需要发送`cookie`，浪费带宽；
       5. `cookie`数据有路径（path）的概念，可以限制`cookie`只属于某个路径下。
     - `session`：
       1. 占用服务器内存，服务器的内存压力较大；
       2. 依赖于`cookie`（`sessionID`保存在`cookie`）；
       3. 创建`Session`变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用`session`变量将会导致代码不可读而且不好维护；

## webStorage

    提供了两种API：localStorage(本地存储）和sessionStorage（会话存储）。
    - 区别：
        1. 有效期：localStorage有效期为永久有效，sessionStorage有效期为会话期间。
        2. 存储：localStorage存储的是字符串，sessionStorage存储的是对象。大小一般都是5M
        3. 存储位置：localStorage、sessionStorage都存储在客户端
        4. 应用场景：localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。sessionStorage：敏感账号一次性登录
