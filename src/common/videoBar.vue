<template>
    <div class="video_top_bar" style="min-width:1000px;">
       <a-row>
            <a-col :span="4">
                <img @click="home" class="video_top_logo" src="../assets/img/images/video-logo-white.png" />
            </a-col>
            <a-col :span="16">
                <ul class="video_navigation_list">
                    <li @click="home" class="home">HOME</li>
                    <li @mouseover="onMouseover('About Us')">ABOUT US</li>
                    <li @mouseover="onMouseover('Products')">PRODUCTS</li>
                    <li @click="inspiration" class="home">INSPIRATION</li>
                    <li @mouseover="onMouseover('Sustainability')">SUSTAINABILITY</li>
                </ul>
            </a-col>
            <a-col :span="4">
                <span class="video_contact" @click="contantUs">CONTACT US</span>
            </a-col>
		</a-row>
        <div class="navigation-bg2 slide" :class="{slideDown: showImageList}" >
            <a-row class="video_top_bar_bg">
                <a-col :span="4">
                    <img @click="home" class="video_top_logo" src="../assets/img/images/video-logo.png" />
                </a-col>
                <a-col :span="16">
                    <ul class="video_navigation_list black_color">
                        <li @click="home" class="home">HOME</li>
                        <li @mouseover="onMouseover('About Us')" class="home">ABOUT US</li>
                        <li @mouseover="onMouseover('Products')" class="home">PRODUCTS</li>
                        <li @click="inspiration" class="home">INSPIRATION</li>
                        <li @mouseover="onMouseover('Sustainability')" class="home">SUSTAINABILITY</li>
                    </ul>
                </a-col>
                <a-col :span="4">
                    <span class="video_contact black_c_con" @click="contantUs">CONTACT US</span>
                </a-col>
            </a-row>
            <div @mouseleave="onMouseLeave">
                <a-row class="second_nav" type="flex" justify="space-around">
                    <a-col :span="2">
                    </a-col>
                    <a-col style="cursor: pointer;" :span="4" v-for="(image,index) in imageList" :key="index" @click="clickSecondNav(image.title)">
                        <img class="second_img" :src="image.image" />
                        <p style="color: #fff;" class="second-text">{{image.title}}</p>
                    </a-col>
                    <a-col :span="2">
                    </a-col>
                </a-row>
            </div>
        </div>
        
    </div>
</template>

<script>
	export default {
		name: 'videoBar',
        data: function(){
            return {
				showImageList:false,
                imageList:[],
            }
            
        },
		methods:{
            home:function(){
                this.$router.push({ path: '/' })
            },
            inspiration:function(){
                this.$router.push({ path: '/inspiration' })
            },
            contantUs:function(){
                this.$router.push({ path: '/contantUs' })
            },
            onMouseover:function(name){
				if(name === 'Products'){
					this.imageList = [
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAeMWDAADbh1ou3hE451.png",
                            title:"YOUTH"
                        },
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAcYC7AADK9xf21CU973.png",
                            title:"ELEGANT"
                        }
					]; 
					this.showImageList = true;
				}else if(name === 'About Us'){
					this.imageList = [
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WACcBiASkGdAAF1SKvEDmI535.png",
                            title:"COMPANY"
                        },
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WACcRKAAi02AAIkneauf3E511.png",
                            title:"FACTORY"
                        },
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WACcQOASmgPAAFHMXUbtig962.png",
                            title:"WHY US"
                        }
					]; 
					this.showImageList = true;
				}else if(name === 'Sustainability'){
                    this.imageList = [
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAU3lxAAHPXpNjlOA693.png",
                            title:"ETHICAL"
                        },
                        {
                            image:"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAb-wVAAFm04qN9ow796.png",
                            title:"SUSTAINABLITY"
                        }
                    ]; 
                    this.showImageList = true;
                }
            },
            onMouseLeave:function(){
                this.showImageList = false; 
				setTimeout(()=>{
					this.imageList = []; 
				},300);
            },
            clickSecondNav:function(title){
                if(title === "COMPANY"){
                    this.$router.push({ path: '/company' })
                }else if(title === "FACTORY"){
                    this.$router.push({ path: '/factory' })
                }else if(title === "WHY US"){
                    this.$router.push({ path: '/whyUs' })
                }else if(title === "YOUTH"){
                    this.$router.push({ path: '/product2?type=0' })
                }else if(title === "ELEGANT"){
                    this.$router.push({ path: '/product2?type=1' })
                }else if(title === "ETHICAL"){
                    this.$router.push({ path: '/Ethical' })
                }else if(title === "SUSTAINABLITY"){
                    this.$router.push({ path: '/sustainablity' })
                }
            }
		}
	}
</script>
<style>
   @import url("../assets/css/videoBar.css");
</style>
