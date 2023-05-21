## [vuex](https://vuex.vuejs.org/zh/)
    > 它借鉴了 Flux、Redux 和 The Elm Architecture

### 核心概念
    - state
    - getter 派生某些状态，可以认为是 store 的计算属性
    - mutation 提交(commit) mutation,同步的修改状态
    - action 触发(dispatch) action,异步的修改状态
    - module 分割模块管理状态，防止单一状态树过于臃肿


### [模块动态注册](https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C)
应用：状态过多时，在需要的时候再加载对应的模块

