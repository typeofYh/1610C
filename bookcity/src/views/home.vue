<template>
    <div class="wrap">
        <main>
            <swiper :options="swipersetting">
                <swiper-slide>
                    <img src="../img/banner1.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../img/banner1.png" alt="">
                </swiper-slide>
            </swiper>
            <div>
                <h2>本周特价</h2>
                <div>
                    <ShopDl v-for="item in list"
                    :key="item.id"
                    :item="item"/>
                </div>
            </div>
        </main>
        <ElFooter :sumcount="sumCount"/>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import ShopDl from '@/components/shopDl';
import list from '../mock/data';
export default {
    props:['sumCount'],
    data(){
        return {
            swipersetting:{
                autoplay:true
            },
            list,
        }
    },
    components:{
        swiper,
        swiperSlide,
        ShopDl
    }
}
</script>
<style scoped  lang="">
img{
    width: 100%;
}
</style>