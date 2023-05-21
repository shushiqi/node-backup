## Promise 对象

- 在传统异步解决方案`回调函数和事件`中，如果存在过多回调函数，就会造成`回调地狱`。因此，社区中提出并实现了一种新的解决方案，叫做`Promise`。ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。
- 特点：

  1. 状态不受外界影响，只会由`pending`变为`fulfilled`或`rejected`。
  2. 一旦状态改变，就不会再变。

- [实现](../../simple-promise/README.md)

- 方法
  1. `new Promise(executor)`
  2. `then(onFulfilled, onRejected)`
  3. `catch(onRejected)`
  4. `finally(onFinally)`不管 promise 最后的状态，在执行完 then 或 catch 指定的回调函数以后，都会执行 finally 方法指定的回调函数。
  5. `all()` 将多个 Promise 实例，包装成一个新的 Promise 实例。在一个数组内存放多个`Promise`实例，当所有实例变为`fulfilled`时，结果为`fulfilled`，数组内任意一个变为`rejected`，结果为`rejected`。
  6. `race()` 同样是将多个 Promise 实例，包装成一个新的 Promise 实例。数组内任意一个实例改变状态，结果为该实例改变的状态
  7. `allSettled()` 数组内所有实例状态改变，不管变为`fulfilled`还是`rejected`，结果变为`fulfilled`
  8. `any()` 数组内任意一个实例变为`fulfilled`，结果为`fulfilled`；当所有实例变为`rejected`时，结果为`rejected`
- async/await
  - async 告诉程序内部存在异步对象
  - async/await 的组合，虽然整体是异步的，但内部 await 是同步顺序执行的。相较于`Promise`，更直观，没有嵌套问题。
  - 使用`try/catch`处理程序错误，承接内部`reject`抛出的错误
