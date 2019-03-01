<template>
    <div>
        <div id="top">
            <b>列表</b>
            <button @click="flag = !flag">新增</button>
            <ul v-show="flag">
                <li v-for="(item,i) in list"
                :key="i"
                @click="addlist(i)">
                    {{item.type}}
                </li>
            </ul>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>类型</th>
                        <th>号码/账号</th>
                        <th>提示内荣</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 列表组件 -->
                    <MyList v-for="(item,i) in checklist"
                    :key="i"
                    :type="item.type"
                    :num="item.number"
                    :tip="item.tip"
                    :id="item.id"
                    @del="del"
                    @changeTip="changeTip"></MyList>
                </tbody>
            </table>
        </div>
        <div id="rightbox">
            <!-- icon组件 -->
            <MyIcon v-for="(item,i) in checklist"
            :key="i" 
            :classname="item.icon"
            :tip="item.tip"></MyIcon>
        </div>
    </div>
</template>
<script>
import list from './mock/data';
import MyList from './components/list';
import MyIcon from './components/icon';
export default {
    data(){
        return {
            list,
            flag:false,
            checklist:[]
        }
    },
    components:{
        MyList,
        MyIcon
    },
    methods:{
        addlist(i){
            this.flag = false;
            let falg = this.findIndex(this.list[i].id);
            if(falg != -1){
                alert('不能重复添加')
            } else {
                this.checklist.push({...this.list[i]});
            }
        },
        del(id){
            let index = this.findIndex(id);
            this.checklist.splice(index,1);
        },
        changeTip(val,id){
            let index = this.findIndex(id);
            this.checklist[index].tip = val;
        },
        findIndex(id){
            return this.checklist.findIndex(item=>item.id===id);
        }
    }
}
</script>
<style>
#rightbox{
    position: fixed;
    right: 10px;
    bottom: 10px;
}
</style>


