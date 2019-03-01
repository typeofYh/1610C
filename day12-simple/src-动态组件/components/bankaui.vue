<template>
    <div class="content">
        <ul class="leftnav">
            <li v-for="(item,i) in navdata.navdata"
            :key="i"
            :class="{active:i===index}"
            @click="index=i">{{item.title}}</li>
        </ul>
        <div class="rightcontent">
            <MyDl v-for="(item,i) in cont[index].cont"
            :key="i"
            :title="item.title"
            :img="item.img"
            :tag="item.tag"></MyDl>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs';
import MyDl from './dl';
let navdata = Mock.mock({
    "navdata|15":[
        {
            title:"@ctitle"
        }
    ]
});
let cont = Mock.mock({
    'contdata|15':[
        {
            "id|+1":0,
            "cont|15-20":[
                {
                    img:"@image",
                    title:"@ctitle",
                    "tag|10-3000":10
                }
            ]
        }
    ]
})
export default {
    data(){
        return {
           navdata,
           index:0,
           cont:cont.contdata
        }
    },
    components:{
        MyDl
    },
    created(){
        console.log('板块')
    }
}
</script>
<style lang="scss">
@import "../../static/scss/common.scss";
@import "../../static/scss/_minix.scss";
    .content{
        width:100%;
        height:100%;
        display:flex;
    }
    .leftnav{
        width:pxTorem(80px);
        height:100%;
        overflow:auto;
        background:#eee;
        text-align:center;
        li{
            width:100%;
            height:pxTorem(44px);
            line-height:pxTorem(44px);
            &.active{
                border-left:pxTorem(2px) solid red;
                background:#fff;
            }
        }
    }
    .rightcontent{
        flex:1;
        overflow:auto;
    }
</style>