<template>
	<div class="contant_us">
        <NewBar/>
        <div class="contant_main">
        <div class="line"></div>
            <div class="module-title">
            </div>
            <div class="contant_content">
                <div class="contant_box">
                    <div class="block">
                        <div class="tit"><span>ADDRESS</span></div>
                        <P>HANGZHOU CHINA</P>
                    </div>
                    <div class="block">
                        <div class="tit"><span>E-MAIL</span></div>
                        <P>daoran@information.com</P>
                    </div>
                    <div class="block">
                        <div class="tit"><span>PHONE  NUMBER</span></div>
                        <P>+86 168 7954 2135</P>
                    </div>
                </div>
                <div class="foot-share1">
                    <a-icon @click="facebook" class="facebook" type="facebook" />
                    <a-icon @click="twitter" class="twitter" type="twitter" />
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import NewBar from '../../components/newBar.vue'
	export default {
		name: 'contantUs',
		components: {
           NewBar,
		},
       data:function(){
           return {
               show:false
           }
       },
       mounted:function(){
           var _this = this;
           setTimeout(function(){
               _this.show = true;
           },500);
           
       }
	}
</script>
<style>
    .line{
       position: absolute;
       left: 0;
       height: 45px;
       width: 100%;
       border-bottom: 1px solid #d8d8d8; 
    }
    .module-title{
        width: 280px;
        margin: 0 auto;
        position: relative;
        background: url(../../assets/img/aboutUs/title-contact1.gif) 0 0 no-repeat;
        height: 86px;
        display: block;
    }
    .contant_main{
        padding-top: 10.7142rem;
    }
      .contant_box{
          width: 400px; 
          border-right: 1px solid #9E9E9E;
        }
    .contant_content{
        width: 800px;
        margin: 0 auto;
        margin-top: 35px;
        display: flex;
    }
    .block{
        text-align: left;
        font-size: 17px;
        padding-top: 3.5714rem;
        transition-property: padding-top opacity;
        transition-duration: 1s;
        transition-timing-function: ease;
    }
    .tit {
        margin-bottom: 15px;
    }
    .tit span {
        padding: 3px 12px;
        background-color: #0c0c0c;
        color: #fff;
        letter-spacing: 1.5;
        font-family: Univers LT Std,sans-serif;
        font-weight: 300;
        opacity: .4;
    }
    .fadeInUp{
       opacity: 1;
    }
    .fadeHide{
       padding-top: 100px;
       opacity: 0;
    }
    .fadeInDelay_1{
        transition-delay: 200ms;
    }
    .fadeInDelay_2{
        transition-delay: 400ms;
    }
    .foot-share1{
        padding-top: 300px;
        font-size: 3rem;
        padding-left: 14.2857rem;
        color: #0c0c0c !important;
        opacity: .4;
    }
    .foot-share1 :hover{
        font-size: 3rem;
    }
</style>
 