<template>
    <div class="menu">
        <div class="menucont">
            <!-- 左侧导航 -->
            <ul class="nav">
                <li 
                v-for="(val,index) in navdata"
                :key="index"
                :class="{active:i===index}"
                @click="changenav(index)">{{val.title}}</li>
            </ul>
            <!-- 右侧内容 -->
            <div class="content">
                <h2>{{title}}</h2>
                <div>
                    <!-- 列表 -->
                    <DlList v-for="(item,i) in contentdata"
                    :key="i"
                    :img="item.img"
                    :price="item.price"
                    :sale="item.sale"
                    :info="item.info"
                    :id="item.id"
                    :title="item.title"
                    :count="item.count"></DlList>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="caricon">
                <span v-if="sumcount">{{sumcount}}</span>
            </div>
            <p>{{sumprice ? '总价： ￥ ' +sumprice : '未选商品'}}</p>
        </footer>
    </div>
</template>
<script>
import DlList from '../components/dllist';
export default {
    data(){
        return{
            navdata:[],
            title:"",
            contentdata:[],
            i:0,
            sumcount:0,
            sumprice:0,
            contentData:{} //0 1 2
        }
    },
    components:{
        DlList
    },
    created(){
        //获取导航数据
        this.$ajax.get('/elm/navlist').then(res=>{
            this.navdata = res;
            //默认请求第一个列表数据
            this.getcontentdata(this.navdata[this.i].id);
        });
        //进入页面会执行这个操作
        //如果之前加入购物车 保留之前状态
        this.localdata = JSON.parse(localStorage.getItem('cardata')) || [];
        this.sumcount = this.localdata.reduce((p,n)=>p+n.count,0);
        this.sumprice = this.localdata.reduce((p,n)=>p+n.count*n.price,0);
        this.$bus.$on('addCar',res=>{
            //res => {id:}
            //loacaldata => [{},{}]
            //判断数组中有没有  根据商品标识来判断 id
            let {id} = res;
            let index = this.localdata.findIndex(item=>item.id===id);
            //存在替换
            if(index != -1){
                this.localdata.splice(index,1,res);
                //不存在添加
            }else{
                this.localdata.push(res);
            };
            localStorage.setItem('cardata',JSON.stringify(this.localdata));
            this.sumcount = this.localdata.reduce((p,n)=>p+n.count,0);
            this.sumprice = this.localdata.reduce((p,n)=>p+n.count*n.price,0);
        })
    },
    methods:{
        getcontentdata(id){
            if(this.contentData[id]){
                this.contentdata = this.contentData[id];
            }else{
                this.$ajax.get('/elm/content?id='+id).then(res=>{
                    this.title = res.navtitle;
                    res.cont.forEach(item=>{
                        let obj = this.localdata.find(val=>item.id===val.id);
                        item.count = obj ? obj.count : 0;
                    })
                    this.contentData[id] = res.cont;
                    this.contentdata = res.cont;
                    // console.log(this.contentdata);
                })
            }
            console.log(this.contentData);
        },
        changenav(i){
            this.i = i;
            this.getcontentdata(this.navdata[i].id);
        }
    }
}
</script>
<style lang="scss" scoped>
.menu{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.menucont{
    display:flex;
    flex:1;
    overflow: hidden;
    .nav{
        width: 120px;
        height: 100%;
        overflow: auto;
        li{
            height: 40px;
            line-height: 40px;
            text-indent: 5px;
            &.active{
                font-weight: 900;
            }
        }
    }
    .content{
        flex:1;
        height: 100%;
        overflow: auto;
    }
}
.footer{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color:#fff;
    background: #000;
    position: relative;
    box-sizing: border-box;
    padding-left:75px;
    .caricon{
        position:absolute;
        width:55px;
        height:55px;
        background: skyblue;
        border-radius: 50%;
        top:-20px;
        left:10px;
        span{
            width: 25px;
            height: 25px;
            background: red;
            color:#fff;
            text-align: center;
            line-height:25px;
            position:absolute;
            border-radius:50%;
            right:-10px;
            top:-5px;
        }
    }
}
</style>


