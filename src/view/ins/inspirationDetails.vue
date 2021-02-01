<template>
    <div class="inspirationDetails">
        <topBar/>
        <div class="inspirationDetails_main">
            <div v-html='this.dataDetails'>
            </div>
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
                dataDetails:''
            }
        },
        methods:{
        },
        mounted(){
            var id = this.$route.query.ID;
            var url ="http://192.168.3.49:8081/api/dr/PictureUpLoad/PictureInfo";
            axios.get(url,{
                params:{ID:id}   
            }).then((data)=>{
                this.dataDetails = data.data.data.htmlContent;
            }).catch((data)=>{
                console.log(data,'2')
            }) 
        }
    
    }
</script>

<style>
    @import url("../../assets/css/inspiration.css");
</style>
