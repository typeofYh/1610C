<template>
    <div id="app">
        <MyHeader :back="false">
            <template>
                <b>京东首页</b>
            </template>
            <template v-slot:search>
                <button>搜索</button>
            </template>
        </MyHeader>
        <!-- <MyHeader>
            <template>
                <b>京东超市</b>
            </template>
            <template v-slot:search>
                <button>搜索</button>
            </template>
        </MyHeader>
        <MyHeader>
            <template v-slot="{a}">  
                <ul>
                    <li v-for="(item,i) in a" :key="i">{{item.title}}</li>
                </ul>
            </template>
        </MyHeader> -->

    </div>
</template>
<script>

export default {

}
</script>

<style lang="scss">
*{
    padding:0;
    margin: 0;
    list-style: none;
}
body,html,#app{
    width: 100%;
}
</style>

