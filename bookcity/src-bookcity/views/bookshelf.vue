<template>
    <div class="wrap">
        <my-header :back="false">
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
            <span class="user"><i></i></span>
        </my-header>
        <main>
            <div>
                <router-link to="/search" tag="div">请输入搜索内容</router-link>
                <button @click="changevies">切换视图</button>
            </div>
            <div>
                <dl-list v-for="item in heavy"
                    :key="item.fiction_id"
                    :img="item.cover"
                    :title="item.title"
                    :classname="classname"
                    :bookid="item.fiction_id">
                        <div>
                            <p>{{item.authors}}</p>
                            <p>{{item.summary}}</p>
                            <p>{{item.latest}}</p>
                        </div>
                </dl-list>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            heavy:[],
            classname:'leftblock'
        }
    },
    created(){
        this.$ajax.get('/api/home').then(res=>{
            this.heavy = res.data.items[2].data.data;
            console.log(this.heavy);
        })
    },
    methods:{
        changevies(){
            this.classname = this.classname === 'leftblock' ? 'upblock' : 'leftblock';
        }
    }
}
</script>

