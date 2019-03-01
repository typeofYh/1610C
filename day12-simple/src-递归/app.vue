<template>
    <div id="app">
        <!-- <ul>
            <li>
                <h2>插槽</h2>
                <ul>
                    <li>
                        <h2>插槽内容</h2>
                    </li>
                     <li>
                        <h2>作用域插槽</h2>
                        <ul>
                            <li>
                                <h2>独占默认插槽的缩写语法</h2>
                            </li>
                            <li>
                                <h2>解构插槽-Prop</h2>
                                <ul></ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><h2>自定义事件</h2></li>
        </ul> -->
        <my-ul :list="list"></my-ul>
    </div>
</template>
<script>
import list from './mock/data';
import myUl from './components/myul';
export default {
    data(){
        return {
            list 
        }
    },
    components:{
        myUl
    }
}
</script>

