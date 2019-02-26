import Vue from 'vue';
import aixos from 'axios';
let vm = new Vue({
    //el:"#app",
    // template:`<div>
    //     <h2 class="title">{{text}}</h2>
    // </div>`,
    data:{
        text:'1234',
        list:[]
    },
    methods:{
        aa(){
            alert(111);
        }
    },
    beforeCreate(){  //属性和方法没有分配到实例之前去调用的
        console.log('beforeCreate');
        console.log(this.text);
        console.log(this.aa);
    },
    created(){  //分配配置项到实例
        console.log('created')
        aixos.post('/api/list',{
            name:'zs'
        }).then(respones=>{
            this.list = respones.data;
        })
    },
    beforeMount(){  //dom节点生产之前
        console.log('beforeMount');
        console.log(document.querySelector('.title'));
    },
    mounted(){  //dom节点生成之后
        console.log('mounted');
        console.log(document.querySelector('.title'));
    },
    beforeUpdate(){//数据发生改变之前触发
        console.log('beforeUpdate');
        console.log(document.querySelector('.title'))
    },
    updated(){ //新的dom节点产生
        console.log('updated');
    },
    beforeDestroy(){  //组件卸载之前触发
        console.log('beforeDestroy');
    },
    destroyed(){ //组件卸载完成
        console.log('destroyed');
    }
})

window.onload = function(){
    vm.$mount('#app');
    this.vm = vm;
}