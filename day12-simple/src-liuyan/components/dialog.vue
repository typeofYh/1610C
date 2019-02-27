<template>
    <div id="dialog">
        <div>
            <slot :aa="p" :list="list"></slot>
        </div>
        <footer>
            <slot name="foot" :list="list"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            p:"dialog",
            list:['a','b']
        }
    },
    created(){
        console.log(this.$slots);
    }
}
</script>

<style lang="scss" scoped>
#dialog{
    width:100%;
    height:100%;
    position:absolute;
    background:#fff;
    top:0;
    left:0;
}
</style>

