<template>
  <div id="app">
      <my-list 
      v-for="(item,i) in data.data"
      :key="i" 
      :title="item.title"
      :imgpath="item.imgPath"
      :time="item.publishTime" />
  </div>
</template>

<script>
import {data} from "./mock/data";
import MyList from './components/mylist';
export default {
  data(){
    return {
      data
    }
  },
  components:{
     MyList
  }
}
</script>

<style lang="scss">

</style>
