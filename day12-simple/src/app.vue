<template>
    <div id="app">
        <header>
            <span>菜单</span>
            <span>评价</span>
            <span>商家</span>
        </header>
        <main>
            <Menu />
        </main>
    </div>
</template>
<script>
import Menu from './views/menu.vue'
export default {
    components:{
        Menu
    }
}
</script>
<style lang="scss">
*{
    padding:0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
body,html,#app{
    width: 100%;
    height: 100%;
}
#app{
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
}
main{
    flex:1;
    overflow:hidden;
}
</style>

