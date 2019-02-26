<template>
    <div id="app">
        <h2>
            {{title}}
        </h2>
        <myTitle />
        <MyLi />
    </div>
</template>
<script>
import MyLi from './components/li';

export default {
    data(){
        return {
            title:'hello'
        }
    },
    components:{
        MyLi
    }
}
</script>
