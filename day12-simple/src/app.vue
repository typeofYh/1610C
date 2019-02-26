<template>
    <div id="wrap">
        <header>{{title}}</header>
        <main>
            <div>
                <message v-for="item in list"
                :key="item.id"
                :title="item.title"
                :name="item.name"
                :img="item.img"
                ></message>
            </div>
        </main>
        <myFooter v-on:addmessage="addmessage"></myFooter>
    </div>
</template>
<script>
import message from './components/message';
import myFooter from './components/myfooter'
import axios from 'axios';
export default {
    props:['title'],
    data(){
        return{
            pageid:0,
            list:[]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            axios.get(`/api/list?pageid=${this.pageid}`).then(res=>{
                this.list = res.data.list;
            })
        },
        addmessage(obj){
            this.list.unshift(obj);
        }
    },
    components:{
        message,
        myFooter
    }
}
</script>
<style scoped>
    #wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header,footer{
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color:#fff;
        font-size: 16px;
        background: skyblue
    }
    main{
        flex:1;
        overflow: auto;
    }
</style>

