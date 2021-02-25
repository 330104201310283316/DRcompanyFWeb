<template>
    <div class="inspirationDetails">
        <NewBar/>
        <div class="inspirationDetails_main">
           <!-- <div v-html='this.dataDetails'>
            </div> -->
           <iframe class="ceshi" :src='dataDetails' frameborder="0" width="100%" scrolling="no" height="600px">
           </iframe>
        </div>
        <footerBar/>
    </div>
</template>
<script>
    import NewBar from '../../components/newBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
    // import { url } from '../../../url.json'
    export default {
        name: 'inspirationDetails',
        components: {
            NewBar,
            FooterBar
        },
        data() {
            return {
                dataDetails:''
            }
        },
        methods:{
        },
        mounted(){
            var id = this.$route.query.ID;
            // var url = url +'/api/dr/PictureUpLoad/PictureInfo';
            var url ="http://192.168.3.49:8081/api/dr/PictureUpLoad/PictureInfo";
            axios.get(url,{
                params:{ID:id}   
            }).then((data)=>{
                this.dataDetails = data.data.data.attachedPath;
                console.log(this.dataDetails,'wangting')
            }).catch((data)=>{
                console.log(data,'2')
            }) 
        }
    
    }
</script>

<style>
    @import url("../../assets/css/inspiration.css");
    .inspirationDetails_main{
        width: 100%;
        height: 1000px !important;
        margin: 0 auto;
        padding-top: 20px;
    }
    .ceshi{
        height: 1000px !important;
        background-color: #fff;
    }
</style>
