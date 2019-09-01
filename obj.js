let name={name:'linjiyou'},
    age={age:9};
    let obj=Object.assign(name,age);//浅拷贝
     console.log(obj)
     console.log({...name,...age})

     //=>_proto_链
       
     let obj1={name:'linjiyou'},
         obj2={age:9};
        //  obj1._proto_=obj2;
        Object.setPrototypeOf(obj1,obj2);
         console.log (Object.getPrototypeOf(obj1));
         let obj2={
             name:'l',
             age:'l'
         };
         let obj={
             name:'linjiyou',
             getPName(){
                 return super.age
             },
             _proto_:obj2
         }
 console.log(obj.getPName());