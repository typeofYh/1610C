<template>
    <div class="homepage">
        <main class="indexMain">
            <nav class="homenav">
                <button>选择地址</button>
                <!-- <router-link to="/search"><p>搜索</p></router-link> -->
                <div @click="$router.push({name:'search'})">
                    <p>搜索饿了么商家、商品名称</p>
                </div>
            </nav>
            <ul class="shoplist">
                <li v-for="(item,i) in shoplist"
                :key="i"
                @click="$router.push('/shop/'+item.id)">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </main>
        <MyFooter />
    </div>
</template>
<script>
import MyFooter from '@/components/footer';
import {shoplist} from '@/mock/shopList';
export default {
    data(){
        return{
            shoplist
        }
    },
    components:{
        MyFooter
    },
    created(){
        console.log(this.$router)
        console.log(this.$route);
    }
}
</script>
<style scoped>
.shoplist li{
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style>

