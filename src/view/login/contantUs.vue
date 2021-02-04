<template>
	<div class="contant_us">
        <topBar/>
        <div class="contant_main">
            <div class="line"></div>
            <div class="module-title">
            </div>
            <div class="contant_content">
                <div class="contant_box">
                    <div class="block">
                        <div class="tit"><span>ADDRESS</span></div>
                        <P>HANGZHOU,CHINA</P>
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
            </div>
        </div>
	</div>
</template>

<script>
    import TopBar from '../../common/topBar.vue'
	export default {
		name: 'contantUs',
		components: {
           TopBar,
		},
        methods:{
            login:function(){
                this.$router.push({ path: '/Company' })
            },
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
        background: url(../../assets/img/aboutUs/title-contact.gif) 0 0 no-repeat;
        height: 86px;
        display: block;
    }
    .contant_main{
        padding-top: 10.7142rem;
    }
    .contant_box{
        border: 1px solid #000;
    }
    .contant_content{
        padding: 25px 29px;
        width: 942px;
        background-color: #f2f2f2;
        margin: 0 auto;
        margin-top: 35px;
    }
    .block{
        margin: 50px auto;
        text-align: center;
        font-size: 17px;
    }
    .tit {
        margin-bottom: 15px;
    }
    .tit span {
        padding: 3px 12px;
        background-color: #000;
        color: #fff;
    }
</style>
 