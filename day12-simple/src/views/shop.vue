<template>
    <div>
        每一个店铺数据{{$route.params.shopid}}
        <div class="main"> 
            <ul>
                <li @click="$router.push(`/shop/${$route.params.shopid}/rx`)">热销</li>
                <li @click="$router.push(`/shop/${$route.params.shopid}/yh`)">优惠</li>
                <li>主食</li>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        let id = this.$route.params.shopid
        // axios.get('/shop?id='+id)
    },
    beforeRouteEnter(to,from,next){ //组件内守卫
        //to 准备要访问的路由对象
        //from 从哪来
        //next 下一步
        // console.log(this);
        if(to.params.shopid >= 0 && to.params.shopid <= 3){
            next(vm=>{
                console.log(vm);
            })
        }else{
            next('/');
        }
    },
    beforeRouteUpdate(to,from,next){ //组件内守卫 当前路由发送变化时触发
        console.log('beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to,from,next){  //当前路由离开时触发
        console.log(to);
    }
}

//http://localhost:8080/index/list/1?id=10&sex=12#aaa


</script>
