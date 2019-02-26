<template>
    <footer>
        <input type="text" v-model="text">
        <button @click="submit">发送</button>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            text:''
        }
    },
    props:{
        addmessage:Function
    },
    methods:{
        submit(){
            if(this.text != ''){
                //怎么告诉父组件  让父组件修改list
                // this.addmessage({
                //     title:this.text,
                //     name:'讲师',
                //     img:'https://cn.vuejs.org/images/logo.png'
                // });
                this.$emit('addmessage',{
                    title:this.text,
                    name:'讲师',
                    img:'https://cn.vuejs.org/images/logo.png'
                },'hello')
            }
            this.text = '';
        }
    }
}
</script>

