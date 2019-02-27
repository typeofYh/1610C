<template>
    <div class="parent">
        <h2>parent</h2>
        <son :title="title"></son>
        <girl></girl>
    </div>  
</template>
<script>
import son from '@/components/son';
import girl from '@/components/girl';

export default {
    components:{
        son,
        girl
    },
    props:{
        title:String
    },
    created(){
        console.log(this.$children);
        console.log(this.$parent);
    }
}
</script>

