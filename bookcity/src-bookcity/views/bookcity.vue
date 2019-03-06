<template>
    <div class="wrap">
        <my-header :back="false">
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
            <span class="user"><i></i></span>
        </my-header>
        <main>
            <router-link to="/search" tag="div">请输入搜索内容</router-link>
            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                    v-for="item in swiperdata"
                    :key="item.id">
                        <img :src="item.ad_pic_url" alt="">
                    </div>
                </div>
            </div>
            <div class="block">
                <h2>本周最火</h2>
                <div>
                    <dl-list v-for="item in weekhot"
                    :key="item.fiction_id"
                    :img="item.cover"
                    :title="item.title"
                    :bookid="item.fiction_id"
                    classname="upblock">
                    </dl-list>
                </div>
            </div>
            <div class="block">
                <h2>重磅推荐</h2>
                <div>
                    <dl-list v-for="item in heavy"
                    :key="item.fiction_id"
                    :img="item.cover"
                    :title="item.title"
                    :bookid="item.fiction_id"
                    classname="leftblock">
                        <div>
                            <p>{{item.authors}}</p>
                            <p>{{item.summary}}</p>
                            <p>{{item.latest}}</p>
                        </div>
                    </dl-list>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import Swiper from 'swiper'; 
export default {
    data(){
        return {
            swiperdata:[],
            weekhot:[],
            heavy:[]
        }
    },
    created(){
        this.$ajax.get('/api/home').then(res=>{
            this.swiperdata = res.data.items[0].data.data;
            this.weekhot = res.data.items[1].data.data;
            this.heavy = res.data.items[2].data.data;
            console.log(this.heavy);
            //数据发生变化dom更新完成之后执行
            this.$nextTick(()=>{
                new Swiper(this.$refs.swiper,{
                    autoplay:true
                });
            })
        })
    }
}
</script>
<style scoped>
img{
    width: 100%;
}
</style>


