<template>
    <div>
        <topBar/>
<!--        <div class="ins_banner_bg">
        </div> -->
        <div class="inspiration2">
            <h1 class="header_h1">
                Inspiration
            </h1>
<!--            <a-row class="top_new">
                <a-col :span="16">
                   <img src="https://www.hallhuber.com/media/i/media-kollektion-uebersichtsseite-banner-The-spring-edition-desktop-4k-13945-0.jpg" />
                </a-col>
                <a-col :span="8">
                    <div class="new_content">
                        <p class="new">New</p>
                        <h4 class="new_h4">The spring edition</h4>
                        <p class="new_p" style="text-align: justify;">This new HALLHUBER collection is full of things to make you look forward to spring. Colours borrowed from nature such as sea green, dusty mint and cream give the styles a fashionable, fresh note, while sparing use of black adds the elegant aspect.</p>
                        <div class="common-btn red-bg"><span>READ NOW</span></div>
                    </div>
                    
                </a-col>
            </a-row> -->
            <a-row>
               <a-col :span="12">
                   <div class="art_warp">
                       <img src="https://www.hallhuber.com/media/i/media-kollektion-uebersichtsseite-banner-the-unexpected-desktop-4k-12822-0.jpg" />
                       <div class="art_info">
                           <h4 class="new_h4">Modern elegance</h4>
                           <p class="new_p">This new HALLHUBER collection is full of things to make you look forward to spring. Colours borrowed from nature such as sea green, dusty mint and cream give the styles a fashionable, fresh note, while sparing use of black adds the elegant aspect.</p>
                            <div class="common-btn red-bg"><span>READ NOW</span></div>
                       </div>
                   </div>
               </a-col>
                <a-col :span="12">
                    <div class="art_warp">
                        <img src="https://www.hallhuber.com/media/i/media-kollektion-uebersichtsseite-banner-the-unexpected-desktop-4k-12822-0.jpg" />
                        <div class="art_info">
                            <h4 class="new_h4">Modern elegance</h4>
                            <p class="new_p">This new HALLHUBER collection is full of things to make you look forward to spring. Colours borrowed from nature such as sea green, dusty mint and cream give the styles a fashionable, fresh note, while sparing use of black adds the elegant aspect.</p>
                             <div class="common-btn red-bg"><span>READ NOW</span></div>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <div class="art_warp">
                        <img src="https://www.hallhuber.com/media/i/media-kollektion-uebersichtsseite-banner-the-unexpected-desktop-4k-12822-0.jpg" />
                        <div class="art_info">
                            <h4 class="new_h4">Modern elegance</h4>
                            <p class="new_p">This new HALLHUBER collection is full of things to make you look forward to spring. Colours borrowed from nature such as sea green, dusty mint and cream give the styles a fashionable, fresh note, while sparing use of black adds the elegant aspect.</p>
                            <div class="common-btn red-bg"><span>READ NOW</span></div>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <div class="art_warp">
                        <img src="https://www.hallhuber.com/media/i/media-kollektion-uebersichtsseite-banner-the-unexpected-desktop-4k-12822-0.jpg" />
                        <div class="art_info">
                            <h4 class="new_h4">Modern elegance</h4>
                            <p class="new_p">This new HALLHUBER collection is full of things to make you look forward to spring. Colours borrowed from nature such as sea green, dusty mint and cream give the styles a fashionable, fresh note, while sparing use of black adds the elegant aspect.</p>
                           <div class="common-btn red-bg"><span>READ NOW</span></div>
                        </div>
                    </div>
                </a-col>
               
            </a-row>
            <div class="show_more">
                <button class="go-login" @click="Gologin">VIEW MORE</button>
            </div>
        </div>
        <!--  <footerBar/> -->
        <div class="foot-warp" style="background-color: #f29544;height: 80px;width: 100%;">
            <div  style="width: 1000px;margin: 0 auto;">
                <div class="foot-share">
                    <a-icon class="facebook" type="facebook" />
                    <a-icon class="twitter" type="twitter" />
                </div>
                <div class="foot-copy">
                    <p>Copyright © 2021 TAO. All rights reserved.</p>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
    import TopBar from '../../common/topBar.vue'
    export default {
        name: 'inspiration2',
        components: {
           TopBar,
            // FooterBar
        },
        methods:{
            Gologin:function(){
                this.$router.push({ path: '/login'})
            },
        },
    }    
</script>

<style>
    .ins_banner_bg{
        background: url(../../assets/img/ins/product_bg.png) no-repeat;
        width: 100%;
        height: 28.5714rem;
        margin-bottom: 5rem;
    }
    .inspiration2{
        padding: 5.7142rem;
        min-width: 1000px;
    }
    .header_h1{
        font-size: 3.4285rem;
        letter-spacing: 2.57px;
        font-family: Univers LT Std,sans-serif;
        text-align: center;
        font-weight: 300;
        margin: 4.2857rem;
    }
    .top_new{
        padding: 0 5px 30px; 
    }
    .new{
        color: #95a5a6;
        font-size: 1.2857rem;
        letter-spacing: .96px;
        line-height: 26px;
    }
    .new_h4{
        font-size: 1.2857rem;
        letter-spacing: .96px;
        line-height: 26px;
        margin: 0 0 8px;
    }
    .new_content{
        padding: 50px;
    }
    .new_p{
        font-size: 1rem;
        letter-spacing: .75px;
        font-family: Univers LT Std,sans-serif;
        font-weight: 300;
        line-height: 2;
        color: #000;
    }
    .art_warp{
        padding: 0 5px 30px;
    }
    .art_info{
        margin: 2.1428rem 0 2.1428rem 0;
        line-height: 2rem;
    }
    /*start */
    .common-btn{
        border: 1px solid #FE5368;
        font-size: .8rem;
        background: #FE5368;
        height: 2.5rem;
        text-align: center;
        width: 7.1428rem;
        line-height: 2.5rem;
        position: relative;
        transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -webkit-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        display: block;
        font-family: Century Gothic;
        font-weight: 400;
        cursor: pointer;
    }
    .common-btn span{
        position: relative;
        z-index: 2;
        color: #fff;
    }
    .common-btn span:hover{
        color: #000;
    }
    .common-btn :hover{
        color: #000;
    }
    .common-btn:after {
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background: #000;
        color: #000;
        transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -webkit-transition: all 0.4s ease-out;
        -ms-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
    }
    .common-btn.red-bg:after{
        background: #fff;
        color: #000 !important;
    }
    .common-btn.red-bg:hover:after{
        width: 100%;
        color: #000;
    }
    /* end */
    .show_more{
        margin: 50px;
    }
</style>
