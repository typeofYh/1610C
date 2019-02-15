let age = 18;

let obj = {
    age,//
    sayhello(){
        console.log(this.age)
    },
    aa:function(){

    },
    name:'zs'
}
obj.sayhello();
//获取该对象数据属性的描述属性
//configurable: true 可配置
//enumerable: true 可枚举
//value: 18 值
//writable: true 可编写
// console.log(Object.getOwnPropertyDescriptor(obj,'age'));

//访问器属性 getter setter
Object.defineProperty(obj,'age',{
    // enumerable:false,
    // value:20,
    // writable:false,
    // configurable:false
    get(){ //getter
        return '下雪拉'
    },
    set(val){
        if(val > 18){
            alert('已成年')
        }
    }
})
console.log(obj.age);
obj.age = 18;


function ajax(obj){
    let defaulteobj = {
        async:true,
        type:'get',
        data:{
            a:'111'
        },
        error:null
    };
    let opt = Object.assign(defaulteobj,obj);
    // opt.data.b = '222';
    // console.log(opt);
    // console.log(defaulteobj);
}
// function myExtend(obj,...options){
//     options.map(function(item){
//         Object.keys(item).map(function(key){
//              obj[key] = item[key];
//         })
//     })
//     return obj;
// }
// ajax({
//     url:'127.0.0.1:8080',
//     type:'post',
//     success(){

//     }
// });



