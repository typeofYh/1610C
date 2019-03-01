<template>
    <tr>
        <td>{{type}}</td>
        <td>{{num}}</td>
        <td><input type="text" :value="tip" @blur="change($event)"></td>
        <td><button @click="del">删除</button></td>
    </tr>
</template>
<script>
export default {
    props:{
        type:String,
        num:String,
        tip:String,
        id:Number
    },
    methods:{
        del(){
            this.$emit('del',this.id);
        },
        change(e){
            this.$emit('changeTip',e.target.value,this.id);
        }
    }
}
</script>

