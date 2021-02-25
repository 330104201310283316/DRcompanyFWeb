<template>
    <div class="inspiration-page" style="padding-bottom: 100px;">
        <newBar/>
        <div class="ins_warp">
            <div class="ins_banner_bg1">
            </div>
            <div class="ins_list">
                <a-row class="ins_list_item" v-for="item in dataList" :key="item.id">
                    <a-col :span="12" @click="Details(item.id)">
                        <div class="ins_item_title">
                            {{item.pictureTitle}}
                        </div>
                        <div class="ins_item_sub">
                           {{item.pictureExplain}}
                        </div>
                        <button class="in-list-btn">READ NOW</button>
                    </a-col>
                    <a-col :span="12" class="ins_list_img_box">
                        <img :src="item.pictureUrl"/>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="go-login-warp" v-show="showMore">
            <button class="go-login" @click="Gologin">VIEW MORE</button>
        </div>
      <FooterBar />
    </div>
</template>
<script>
    import NewBar from '../../components/newBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
	import { url } from '../../../url.json'
    export default {
        name: 'inspiration',
        components: {
            NewBar,
            FooterBar
        },
        data() {
            return {
                dataList:[],
                showMore:true
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
            var token = localStorage.getItem('token');
            console.log(token,'wangting')
            axios({
                method:'get',
                url:url+'/api/dr/PictureUpLoad/PictureList',
                headers:{
                    'Authorization':token
                }
            }).then((data)=>{
                this.dataList = data.data.data;
                if(this.dataList.length>4){
                    this.showMore=false
                }
            }).catch((data)=>{
                console.log(data,'2')
            }) 
        }
    
    }
</script>

<style>
    @import url("../../assets/css/inspiration.css");
</style>
