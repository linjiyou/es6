/**
 * 
 * 再es5中没有类的概念 构造函数
 * es6 class
 * 如何实现以个类
 * 类的继承 三种属性 共有属性（_proto_)私有属性 静态方法（静态属性）
 * 
 * 继承私有属性
 * 继续共有属性
 * 继承共有属性和私有属性
 * 
 */
         
            function Child(){
                this.age=9;
                Parent.call(this); //=》继承私有属性

            }
            function Parent(){
                //=>构造函数中的this通过new调用的那么this指代的是实例
                this.name='Parent';
            }
            Parent.prototype.eat=function(){
                console.log('eat')
            }
            Child.prototype.smoke=function(){
               return 1
            }
            let child=new Child();

             let parent=new Parent(); 
        // 继承共有属性
        //    Parent.prototype=Child.prototype; 这个是兄弟关系，不是父子关系
            //合并继承共有属性    
        //    Child.prototype._proto_=Parent.prototype;
        //    Object.setPrototypeOf(Child.prototype,Parent.prototype)  

        // //    parent._proto_.eat();   
        //    console.log( Parent.prototype.constructor===Parent)
        //    Child.protorype=Object.create(Parent.prototype);只继承共有
        
            //   function create(ParentPrototype,props={}){
                    
            //            function Fn(){

            //            };
            //            Fn.prototype=ParentPrototype;
            //            let fn=new Fn();
            //            for(let key in props){
            //                Object.defineProperty(fn,key,{
            //                    ...props[key],
            //                    enumerable:true
            //                })
            //            }
            //            return new Fn();
            //   }
              Child.prototype=Object.create(Parent.prototype)
              console.dir(child)
                console.log(child.eat())
              
    //     let a={};
    //    Object.defineProperty(a,'name',{
    //       // value:1,
    //        enumerable:true,  //=>表示这个属性是否可以被枚举
    //        configurable:true, //=>表示这个属性是否可以被删除
    //       // writable:true,
    //        get(){  //value可以替换value
    //         console.log('get')
    //         return 1;
    //        },
    //        set(val){
    //          console.log('设置值')
    //          console.log(val)
    //         return val
    //        }
    //    })
      
    //    a.name=20
    //    console.log(a.name)

    //=>继承共有属性和私有属性
    //Child.prototype=new Parent();//不会使用这种方法