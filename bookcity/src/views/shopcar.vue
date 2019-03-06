<template>
    <div class="wrap">
        <main>
            <ul class="shoplist">
                <li v-for="(item,i) in onecheck"
                :key="item.id">
                    <span class="checkbox" :class="{active:item.open}"
                    @click="onecheckevent(i)"></span>
                    <p><img :src="require('../img/'+item.pic)" alt=""></p>
                    <div>
                        <h2>{{item.name}}</h2>
                        <b>￥{{item.price}}</b>
                    </div>
                    <div>
                        <button @click="reduce(i)">-</button>
                        <span>{{item.count}}</span>
                        <button @click="add(i)">+</button>
                    </div>
                </li>
            </ul>
            <div>
                <span class="checkbox" :class="{active:allcheck}"
                @click="allcheckevent"></span>全选
                <b v-if="sumprice">共￥{{sumprice}}</b>
            </div>
        </main>
        <ElFooter :sumcount="sumCount"/>
    </div>
</template>
<script>
export default {
    props:{
        sumCount:Number,
        shopdata:Array
    },
    data(){
        return{
            sumprice:0,
            onecheck:[],
            allcheck:false
        }
    },
    created(){
        this.onecheck = this.shopdata;
        this.onecheck.forEach(item=>{
            // item.open = false;
            this.$set(item,'open',false);
        })
    },
    methods:{
        onecheckevent(i){
            this.onecheck[i].open = !this.onecheck[i].open;
            this.allcheck = this.onecheck.every(item=>item.open);
            this.reduceSumprice();
        },
        allcheckevent(){
            this.allcheck = !this.allcheck;
            this.onecheck.forEach(item=>{
                item.open = this.allcheck;
            })
            this.reduceSumprice();
        },
        reduceSumprice(){
            let sumprice = 0;
            this.onecheck.forEach(item=>{
                if(item.open){
                    sumprice += item.count * item.price
                }
            });
            this.sumprice = sumprice;
        },
        reduce(ind){
            let {count} = this.onecheck[ind];
            count--;
            count = count <= 1 ? 1 : count;
            this.changecount(ind,count);
        },
        add(ind){
            let {count} = this.onecheck[ind];
            count++;
            this.changecount(ind,count);
        },
        changecount(ind,count){
            this.onecheck[ind].count = count;
            this.reduceSumprice();
            this.$bus.$emit('addcar',this.onecheck[ind],'shopcar');
        }
    }
    // beforeCreate(){  //1
    //     console.log('购物车组件准备创建')
    // },
    // created(){  //2
    //     this.$bus.$off('sendcar');
    //     this.$bus.$on('sendcar',(shopdata)=>{
    //         console.log(shopdata);
    //     })
    // },
    // beforeMount(){  //3
    //     console.log('初始化dom未加载完成')
    // },
    // mounted(){  //6
    //     console.log('初始化dom加载完成')
    // }
}




</script>

<style scoped>
    .shoplist{
        width: 100%;
    }
    .shoplist li{
        display: flex;
    }
    .checkbox{
        width: 25px;
        height: 25px;
        display: inline-block;
        background: #ccc;
        border-radius: 50%;
    }
    .checkbox.active{
        background: orange;
    }
</style>




