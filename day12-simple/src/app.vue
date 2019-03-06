<template>
    <div class="wrap">
        <router-view></router-view>
    </div>
</template>
<script>

</script>
<style>
@import "./css/common.css";
.wrap,body,html,.wrap>div{
    width: 100%;
    height: 100%;
}
.wrap>div{
    display: flex;
    flex-direction: column;
}
.indexMain{
    flex:1;
    overflow: hidden;
}

</style>


