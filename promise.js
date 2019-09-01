// Promise es6的
// generator async await 都需要学promise；
// koa generator async await
// axios redux-saga promise
// fetch

// Promise 是一种异步流程的控制手段
// 1.回调地狱，代码难以维护，第一个的输入时第二个的输入
// promise链式调用
// 2.promise可以支持多个并发的请求，获取并发请求中的数据
// 3.这个promise可以解决异步的问题，本身不能说promise是异步

// promise（承诺）关键字 resolve 成功 reject 失败 pending 等待状态
// 如果一旦promise成功了就不能失败，相反也是一样的
// 只有状态是等待的状态时 才可以装换状态
// 每个Promise的实例上都有一个then方法，then方法中有两个参数，一个参数叫成功函数，一个是
// 失败函数
// promise中发生错误 就会执行失败状态

//  事件环
// Prosmise只有一个参数 叫excutor执行器，默认new时就会调用
let P =new Promise((resolve,reject)=>{
   
});
// then方法是异步调用的，事件环
P.then(()=>{

},()=>{

})