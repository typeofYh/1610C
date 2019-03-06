<template>
    <div>
        <div class="reduce" v-if="falg">
            <button @click="reducecount">-</button>
            <span>{{count}}</span>
        </div>
        <button @click="addcount">+</button>
    </div>
</template>
<script>
export default {
    props:['id','title','price','num'],
    data(){
        return {
            falg:false,
            // count:0
        }
    },
    watch:{
        num(val){
            this.count = val;
            this.falg = this.count > 0;
        }
    },
    created(){
        // 因为
        this.count = this.num;
        this.falg = this.count > 0;
    },
    methods:{
        addcount(){
            this.count++;
            this.falg = true;
            this.sendAddCar();
        },
        reducecount(){
            this.count--;
            this.falg = this.count > 0;
            this.sendAddCar();
        },
        sendAddCar(){
            this.$bus.$emit('addCar',{
                id:this.id,
                title:this.title,
                price:this.price,
                count:this.count
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.reduce{
    display: inline-block;
}
button{
    width: 30px;
    height: 30px;
    line-height: 30px;

}
</style>

