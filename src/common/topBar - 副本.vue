<template>
    <div class="top-bar-page">
		<div class="navigation-no-bg">
			<a-row>
				<a-col :span="4">
					<span class="navigation2-logo" @click="home">TAO</span>
				</a-col>
				<a-col :span="16">
					<ul class="navigation_list2">
						<li @click="home" class="home">Home</li>
						<li @mouseover="onMouseover('About Us')">About Us</li>
						<li @mouseover="onMouseover('Products')">Products</li>
						<li @click="inspiration" >Inspiration</li>
						<li  @click="sustainability">Sustainability</li>
					</ul>
				</a-col>
				<a-col :span="4">
					<span class="navigation-no-bg-contact2">Contact Us</span>
				</a-col>
			</a-row>
		</div>
		<div class="navigation-bg">
			<a-row>
				<a-col :span="4">
					<span class="navigation2-logo" @click="home">TAO</span>
				</a-col>
				<a-col :span="16">
					<ul class="navigation_list2">
						<li @click="home" class="home">Home</li>
						<li @mouseover="onMouseover('About Us')" >About Us</li>
						<li @mouseover="onMouseover('Products')">Products</li>
						<li @click="inspiration" class="home">Inspiration</li>
						<li  @click="sustainability" class="home">Sustainability</li>
					</ul>
				</a-col>
				<a-col :span="4">
					<span class="contact2" style="color: #161616;">Contact Us</span>
				</a-col>
			</a-row>
			<div class="slide" :class="{slideDown: showImageList}" 
				@mouseleave="onMouseLeave">
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
                this.showImageList = false; 
				setTimeout(()=>{
					this.imageList = []; 
				},300);
            },
		}
	}
</script>

<style>
    @import url("../assets/css/topBar.css");
</style>
