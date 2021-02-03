<template>
    <div style="color: #ff6d37;" class="footer-bar-page" :class="{showFooter:showFooter}">
        <div class="foot-warp">
            <div class="foot-share">
                <a-icon class="facebook" type="facebook" />
                <a-icon class="twitter" type="twitter" />
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
</style>
