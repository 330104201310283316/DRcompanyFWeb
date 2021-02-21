<template>
    <div class="top-bar-page">
		<div class="navigation-no-bg">
			<a-row>
				<a-col :span="4">
					<img class="video_top_logo" src="../assets/img/images/video-logo.png" />
				</a-col>
				<a-col :span="16">
					<ul class="navigation_list2">
						<li @click="home" class="home"><span class="navigation__link">HOME</span></li>
						<li @mouseover="onMouseover('About Us')">ABOUT US</li>
						<li @mouseover="onMouseover('Products')">PRODUCTS</li>
						<li @click="inspiration" class="home"><span class="navigation__link">INSPIRATION</span></li>
						<li @click="sustainability" class="home"><span class="navigation__link">SUSTAINABILITY</span></li>
					</ul>
				</a-col>
				<a-col :span="4">
					<span class="navigation-no-bg-contact2" style="cursor: pointer;">CONTACT US</span>
				</a-col>
			</a-row>
		</div>
		<div class="navigation-bg2 slide" :class="{slideDown: showImageList}" 
				>
			<a-row>
				<a-col :span="4">
					<img class="video_top_logo" src="../assets/img/images/video-logo-white.png" />
				</a-col>
				<a-col :span="16">
					<ul class="navigation_list2">
						<li @click="home" @mouseover="onMouseLeave()" class="home">Home</li>
						<li @mouseover="onMouseover('About Us')">About Us</li>
						<li @mouseover="onMouseover('Products')">Products</li>
						<li @click="inspiration">Inspiration</li>
						<li @click="sustainability" @mouseover="onMouseLeave()">Sustainability</li>
					</ul>
				</a-col>
				<a-col :span="4">
					<span class="contact2" style="line-height: 80px;cursor: pointer;">CONTACT US</span>
				</a-col>
			</a-row>
			<div @mouseleave="onMouseLeave">
				<a-row class="sod-nav" type="flex" justify="space-around">
					<a-col :span="2">
					</a-col>
					<a-col :span="4" v-for="(image,index) in imageList" :key="index">
						<img class="sod-img" :src="image" />
						<p class="sod-text" @click="factory">FACTORY</p>
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
		name: 'topBar2',
        data: function(){
            return {
                ceshi:false,
				showImageList:false,
                imageList:[],
            }
        },
		methods:{
			company:function(){
				this.$router.push({ path: '/company' })
			},
            factory:function(){
                this.$router.push({ path: '/factory' })
            },
            whyUs:function(){
                this.$router.push({ path: '/whyUs' })
            },
            home:function(){
                this.$router.push({ path: '/' })
            },
            inspiration:function(){
                this.$router.push({ path: '/inspiration' })
            },
            
            sustainability:function(){
                this.$router.push({ path: '/sustainablity' })
            },
            product:function(){
                this.$router.push({ path: '/product' })
            },

            sustainablity:function(){
                this.$router.push({ path: '/sustainablity' })
            },
            login:function(){
                this.$router.push({ path: '/login' })
            },
            onMouseover:function(name){
				if(name === 'Products'){
					this.imageList = [
						"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAeMWDAADbh1ou3hE451.png",
						"https://file.dtgty.com/group1/M00/0A/03/cteI9WAFCLOAcYC7AADK9xf21CU973.png",
					]; 
					this.showImageList = true;
				}else if(name === 'About Us'){
					this.imageList = [
                        "https://file.dtgty.com/group1/M00/0A/03/cteI9WACcBiASkGdAAF1SKvEDmI535.png",
						// "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1103998056,2697131070&fm=11&gp=0.jpg",
                        "https://file.dtgty.com/group1/M00/0A/03/cteI9WACcRKAAi02AAIkneauf3E511.png",
                        "https://file.dtgty.com/group1/M00/0A/03/cteI9WACcQOASmgPAAFHMXUbtig962.png"
						// "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1103998056,2697131070&fm=11&gp=0.jpg",
					]; 
					this.showImageList = true;
				}
            },
            onMouseLeave:function(){
                this.ceshi = false;
                this.showImageList = false; 
				setTimeout(()=>{
					this.imageList = []; 
				},300);
            },
            onMouseover1:function(){
                this.ceshi = true;
            },
            
		}
	}
</script>

<style>
    @import url("../assets/css/topBar2.css");
</style>
