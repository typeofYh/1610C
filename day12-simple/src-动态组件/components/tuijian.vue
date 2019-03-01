<template>
    <div>
        <myDl v-for="(item,i) in list"
        :key="i"
        :title="item.title"
        :img="item.img"
        :tag="item.tag"
        classname="list"></myDl>
    </div>
</template>
<script>
import myDl from './dl';
import Mock from 'mockjs';
let cont = Mock.mock({
    'contdata|15':[
        {
            img:"@image",
            title:"@ctitle",
            "tag|10-3000":10
        }
    ]
})
export default {
    data(){
        return{
            list:cont.contdata
        }
    },
    components:{
        myDl
    },
    created(){
        console.log('推荐')
    }
}
</script>
