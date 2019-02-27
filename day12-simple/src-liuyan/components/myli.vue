<template>
    <li>
        {{title.title}}
        {{age}}
    </li>
</template>
<script>
export default {
    props:{
        title:{
            // type:String,
            // validator(val){
            //     return /^[\u4e00-\u9fa5]+$/.test(val);
            // },
            // default:'八维'
            default(){
                return {title:'八维'}
            }
        },
        age:{
            type:Number,
            required:true,
            validator(val){
                return val > 18
            }
        }
    }
}
</script>

