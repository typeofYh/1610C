<template>
    <div>
        <my-header>
            <span>{{$route.query.title}}</span>
            <router-link to="/">回首页</router-link>
        </my-header>
        <div class="loaing" v-if="loadingopen">loading...</div>
        <template v-if="!loadingopen">
            <main v-if="item.code===0">
                {{item.mes}}
            </main>
            <main v-else>
                <dl-list
                :img="item.item.cover"
                :title="item.item.title"
                :bookid="item.item.fiction_id"
                classname="leftblock">
                    <div>
                        <h2>{{item.item.authors}}</h2>
                    </div>
                </dl-list>
                <div>
                    <button @click="startlook">开始阅读</button>
                    <button>下载</button>
                </div>
            </main>
        </template>
    </div>
</template>
<script>
export default {
    props:{
        bookid:String
    },
    data(){
        return{
            loadingopen:true,
            item:null
        }
    },
    // watch:{
    //     '$route'(val,oldval){
    //         this.getdata(val.params.bookid);
    //     }
    // },
    //url发生变化 组件已经被创建触发
    //to准备进入的
    //from 从哪个路由来的
    //next 向下执行
    beforeRouteUpdate(to,from,next){
        this.getdata(to.params.bookid);
        next();
    },
    created(){ //只执行一次 组件被创建时执行
        this.getdata(this.bookid);
    },
    methods:{
        startlook(){
            //判断是否登陆
            this.$router.push('/ready')
        },
        getdata(id){
            this.$ajax.get('/api/detail?id='+id).then(res=>{
                this.item = res.data;
                this.loadingopen = false;
            })
        }
    }
}
</script>

