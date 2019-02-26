import {urlCode} from 'common';
import "style/style";
import Vue from 'vue';
//.js .json

let vm = new Vue({
    el:'#app',  //挂载元素
    data:{
        classname:'1610C',
        urls:[{
            title:'百度',
            src:'http://www.baidu.com'
        },{
            title:'网易',
            src:'http://www.163.com'
        },{
            title:'京东',
            src:'http://www.jd.com'
        }],
        nametext:'',
        sex:'请选择性别',
        price:"",
        tip:""
    },
    methods:{
        submit(){
            console.log(this.sex,this.nametext);
        },
        leave(){
            if(this.price >= 1 && this.price <= 100){
                this.tip = 'vip'
            }else{
                this.tip = '金额输入有误'
            }
        }
    }
})

window.vm = vm;