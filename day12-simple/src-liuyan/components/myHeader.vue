<template>
    <header>
        <a href="javascript:;" v-show="back"><</a>
        <div>
            <slot></slot>
            <slot name="detailnav" :navdata="navdata"></slot>
        </div>
        <span>···</span>
    </header>
</template>
<script>
export default {
    props:{
        back:Boolean
    },
    data(){
        return {
            navdata:[
                {
                    "title":"商品"
                },
                {
                    "title":"评价"
                },
                {
                    "title":"详情"
                },
                {
                    "title":"推荐"
                }
            ]
        }
    }
}
</script>

