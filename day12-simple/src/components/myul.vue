<template>
    <ul>
        <li v-for="item in list" 
        :key="item.id">
            <h2>{{item.title}}</h2>
            <aa v-if="item.children" :list="item.children"></aa>
        </li>
    </ul>
</template>
<script>
export default {
    name:"aa",
    props:{
        list:{
            type:Array,
            required:true
        }
    }
}
</script>

