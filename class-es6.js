// class Child{
//     constructor(){
//         this.age=9;//私有属性
//     };
//      static a(){ //=>属于类上的方法
//          return 1
//      }
//     smoking(){   //=>原型上的方法

//     }
// }
//   class Parent{
//      constructor(){
//      this.name='parent'
//       }
//       static b(){
//           return 2;
//       }
//   }
//  new Child();
// // 类只能new
// 类可以继承共有方法和静态方法
// 父类的构造函数中返回了一个引用类型
// 类的调用检测 检测实例是不是new出来的



   function definePropertys(target,arr){
       for(let i=0;i<arr.length;i++){
           Object.defineProperty(target,arr[i].key,{
               ...arr[i],
               configurable:true,
               enumerable:true,
               writable:true
           })
       }
   };
    //=>constructor 是构造函数
    //=>protoPropertys 是原型方法的描述
    //=>staticPropertys 是静态方法的描述
    function _createClass(constructor,protoPropertys,staticPropertys){
        if(protoPropertys.length>0){
            definePropertys(constructor.prototype,protoPropertys);
        }
        if(staticPropertys.length>0){
            definePropertys(constructor,staticPropertys)
        }
    }
   function _classCallCheck(instance,constructor){
       if(!(instance instanceof constructor)){
           throw new Error('lll')
       }
   }
   let Parent=function(){
       function P(){
           _classCallCheck(this,P)
           this.name='parent';
       }
       _createClass(P,[
           {
          key:'eat',
          value:function(){
              console.log('eat')
          }
       }
    ],[
        {
        key:'b',
        value:function(){
            console.log('b')
        }
    }
])
       return P
   }();
     //=>子类继承父类
   function _inherits(subClass,superClass){
       subClass.prototype=Object.create(subClass.prototype,{constructor:{value:subClass}});
       Object.setPrototypeOf(subClass,superClass)
   };
   let Child=(function(Parent){
       //=>实现继承父类的共有属性和静态方法
       _inherits(C,Parent)
       function C(){
           _classCallCheck(this,C);
        let obj=Parent.call(this);
        let that=this;
        if(typeof obj==='object'){
           that=obj;
        }
           that.age=9;//解决了父类返回一个引用类型的问题
       }
       return C
   })(Parent)
   let P=new Child();
   console.log(P.b())

