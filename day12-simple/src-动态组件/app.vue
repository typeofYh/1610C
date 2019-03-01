<template>
    <div id="wrap">
        <nav class="nav">
            <span 
            v-for="(item,i) in navdata" 
            :key="i" 
            :class="{active:i===index}"
            @click="index=i">
                {{item.title}}
            </span>
        </nav>
        <main class="main">
            <!-- include 包含 -->
            <!-- exclude 不包含 -->
            <!-- max 最多缓存个数 -->
            <keep-alive :exclude="/^ban/">
                <component :is="navdata[index].components"></component>
            </keep-alive>
        </main>
    </div>
</template>
<script>
import bankuai from './components/bankaui';
import shipin from './components/shipin';
import tuijian from './components/tuijian';
export default {
    data(){
        return {
            navdata:[
                {
                    title:'板块',
                    components:'bankuai'
                },
                {
                    title:'推荐',
                    components:'tuijian'
                },
                {
                    title:'视频',
                    components:'shipin'
                }
            ],
            index:0
        }
    },
    components:{
        tuijian,
        shipin,
        bankuai
    }
}
</script>

<style lang="scss">
@import "../static/scss/common.scss";
@import "../static/scss/_minix.scss";
#wrap{
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
}
.nav{
    width: 100%;
    height: pxTorem(50px);
    line-height: pxTorem(50px);
    background: #ccc;
    border-bottom: pxTorem(1px) solid #eee;
    display: flex;
    span{
        color:#000;
        font-size: pxTorem(16px);
        flex: 1;
        text-align: center;
        &.active{
            color:red;
        }
    }
}
.main{
    flex:1;
    width:100%;
    overflow:auto;
}
</style>

