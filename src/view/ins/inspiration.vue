<template>
    <div class="inspiration-page">
        <topBar/>
        <div class="ins_warp">
            <div class="ins_banner_bg">
                <p class="ins_banner_t">Fashion</p>
            </div>
            <div class="ins_list">
                <a-row class="ins_list_item" v-for="item in dataList" :key="item.id">
                    <a-col :span="12">
                        <div class="ins_item_title">
                            {{item.pictureTitle}}
                        </div>
                        <div class="ins_item_sub">
                           {{item.pictureExplain}}
                        </div>
                        <button class="in-list-btn" @click="Details(item.id)">READ NOW</button>
                    </a-col>
                    <a-col :span="12" class="ins_list_img_box">
                        <img :src="item.pictureUrl"/>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="go-login-warp">
            <button class="go-login" @click="Gologin">VIEW MORE</button>
        </div>
        <footerBar/>
    </div>
</template>
<script>
    import TopBar from '../../common/topBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
    export default {
        name: 'index',
        components: {
            TopBar,
            FooterBar
        },
        data() {
            return {
                dataList:[],
            }
        },
        methods:{
            Gologin:function(){
                this.$router.push({ path: '/login'})
            },
            Details:function(id){
                this.$router.push({
                    path: "/InspirationDetails",
                    query: {        
                        ID: id
                    }
                });
            }
        },
        mounted(){
            axios({
                method:'get',
                url:'http://192.168.3.49:8081/api/dr/PictureUpLoad/PictureList',
                headers:{
                    'Authorization':'ff0e9033-7fa4-4c11-8692-ce2a89db8d70'
                }
            }).then((data)=>{
                this.dataList = data.data.data;
            }).catch((data)=>{
                console.log(data,'2')
            }) 
        }
    
    }
</script>

<style>
    @import url("../../assets/css/inspiration.css");
</style>
