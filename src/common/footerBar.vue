<template>
    <div class="footer-bar-page" :class="{showFooter:showFooter}">
        <div class="foot-warp">
            <div class="foot-share">
                <a-icon @click="facebook" class="facebook" type="facebook" />
                <a-icon @click="twitter" class="twitter" type="twitter" />
            </div>
            <div class="foot-copy">
                <p>Copyright © 2021 TAO. All rights reserved.</p>
            </div>    
        </div>
    </div>
</template>

<script>
	export default{
		name: 'FooterBar',
		data:function(){
			return {
				showFooter:false
			}
		},
        methods:{
            facebook:function(){
                this.$router.push({ path: 'https://www.facebook.com/' })
            },
            twitter:function(){
                this.$router.push({ path: ' https://twitter.com/intent/tweet' })
            },
        },   
		beforeCreate: function () {
			window.addEventListener('scroll',()=>{
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				
				if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
					this.showFooter = true;
					console.log(this.showFooter );
				}else{
					
					this.showFooter = false;
					console.log(this.showFooter );
				}
			});
		},
		beforeDestory: function(){
			window.removeEventListener('scroll');
		},
	}
</script>

<style>
    .footer-bar-page{
        background-color: #ddd !important;
    }
    .foot-share{
        color: #000;
    }
    .foot-copy{
        color: #000;
    }
</style>
