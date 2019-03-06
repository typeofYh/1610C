<template>
    <div id='app'>
        <router-view :sumCount="sumCount" :shopdata="shopdata"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shopdata:[],
            sumCount:0
        }
    },
    created(){
        this.$bus.$on('addcar',(val,flag)=>{
            //val是要添加的商品
            let shopobj = this.shopdata.find(item=>item.id===val.id);
            if(shopobj){
                if(flag){
                    shopobj.count = val.count;
                }else{
                    shopobj.count++;
                }
            }else{
                this.shopdata.push({count:1,...val});
            }
            //this.shopdata 购物车数据
            // console.log(this.shopdata);
            this.sumCount = this.shopdata.reduce((p,n)=>p+n.count,0);
        })
    }
}
</script>

<style>
*{
    padding:0;
    margin: 0;
    list-style: none;
}

body,html,.wrap,#app{
    width: 100%;
    height: 100%;
}
.wrap{
    display: flex;
    flex-direction: column;
}
.wrap main{
    flex:1;
    overflow: auto;
}
</style>
