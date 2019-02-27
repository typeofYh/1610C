<template>
    <div id="app">
        <h1>app</h1>
        <parent :title="title"></parent>
    </div>
</template>
<script>
import parent from '@/components/parent';
export default {
    data(){
        return {
            title:'1610A'
        }
    },
    components:{
        parent
    },
    created(){
        this.$bus.classname = '1610C';
        console.log(this.$parent === this.$root);
        this.$bus.$on('changeclassname',()=>{
            this.title = '显示班级'
        })
    }
}
</script>

