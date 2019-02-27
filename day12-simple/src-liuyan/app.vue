<template>
    <div id="wrap">
        <my-header :back="false">
            <h2>京东</h2>
            <a href="JavaScript:;">搜索</a>
        </my-header>
        <my-header :back="true">
            <h2>京东超市</h2>
            <a href="JavaScript:;">搜索</a>
        </my-header>
        <my-header :back="true">
            <template v-slot:detailnav="{navdata}"> 
                <ul>
                    <li v-for="(item,i) in navdata" 
                    :key="i">{{item.title}}</li>
                </ul>
            </template>
        </my-header>
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
        <button @click="open=true">+</button>
        <myDialog v-show="open">
            <template v-slot="{aa,list}">
                <h2>{{aa}}{{list}}</h2>
                <input type="text" v-model="text">
                <button @click="submit">发布</button>
            </template>
            <template v-slot:foot="{list}">
                {{list}}
                <p>著作权归1610C所有</p>
            </template>
        </myDialog>
    </div>
</template>
<script>
import message from './components/message';
import myDialog from './components/dialog'
import axios from 'axios';
export default {
    props:['title'],
    data(){
        return{
            pageid:0,
            list:[],
            open:false,
            text:''
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
        submit(){
            console.log(this.text)
        }
    },
    components:{
        message,
        myDialog
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
    header{
        display: flex;
       
    }
    header li{
        display: inline-block;
    }
</style>

