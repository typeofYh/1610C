<template>
    <div id="app">
        <parent></parent>
    </div>
</template>
<script>
import parent from './components/parents';
export default {
    data(){
        return{
            title:"1610C"
        }
    },
    created(){
        this.$bus.title = "天气比较好";
        this.$bus.$on('changeclass',()=>{
            this.title = '1610A';
        })
    },
    components:{
        parent 
    }
}
</script>

