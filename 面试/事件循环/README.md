## 事件循环

- 由来 众所周知，js 是单线程运行的，这是因为网页作为需要和用户随时交互的应用，但单线程带来的问题就是可能造成阻塞，例如 js 的加载、用户的操作等等。
- 解决方案 通过事件循环机制，解决单线程阻塞的问题
- 在 js 中，除了函数调用栈以外，还有任务队列的存在。所有的任务被分为 macro-task（宏任务）与 micro-task（微任务）。
  > 根据`script`的顺序，查看宏任务队列，若宏任务队列不为空，取出`第一个宏任务`，执行完毕，查询微任务队列是否为空。不为空，则执行微任务队列，若此过程中产生了微任务，则放入微任务队列依次执行，直到微任务队列为空。然后查询宏任务队列执行。如此一直循环执行的过程称为事件循环。
- macro-task 大概包括：
  1. script(整体代码)
  2. setTimeout
  3. setInterval
  4. setImmediate
  5. I/O
  6. UI render
- micro-task 大概包括：
  1. process.nextTick
  2. Promise.then
  3. Async/Await(实际就是 promise)
  4. Mutation Observer(html5 新特性)
