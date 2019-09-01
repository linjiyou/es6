// 函数可以返回函数

// 类型判断
// //  function isType(type,content){
//      let t= Object.prototype.toString.call(content).replace(/\[object\s|\]/g
//         ,'');
//         return t===type

//  }
//  console.log(isType('String','kk'))
// console.log(Object.prototype.toString.call(1))
function isType(type){
       return function(content){
        let t= Object.prototype.toString.call(content).replace(/\[object\s|\]/g
                    ,'');
                    return t=type;
       }
}
let isString=isType('String')
// 函数可以当作参数 典型的callback