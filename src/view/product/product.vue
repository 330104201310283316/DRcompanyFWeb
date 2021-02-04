<template>
    <div class="product" style="background-color: #000;">
        <videoBar/>
<!--        <div class="product_main">
            <div class="paroduct_player">
                  <video class="video-product-bg" preload="auto" autoPlay muted loop src="../../assets/img/video/pt.mp4"></video> 
            </div>
            <a-row class="product_introduce">
                <a-col :span="12" class="product_introduce_warp">
                    <p class="product_introduce_warp_item">
                        New collections, new winds. The energy of this season is strong, mysterious, almost mystical. The colorful fantasy of distant countries mixes with 70s rock, grunge meets sport, l’Homme explores la Femme, la Femme reinvents l’Homme, as dusk turns day into night.
                    </p> 
                    <p class="product_introduce_warp_item">
                        In its Fall-Winter 2020/21 collections, Maison Kitsuné delivers a manifesto of a redefined, free and emancipated style. An optimistic and daring vision. An infusion of soft, pop, and fluorescent colors imprint fabrics and knits. No borders, no limits...materials mixing patchworks and stripes, textures that blend and overlap, reliefs that appear unexpectedly. Velvets ribbed and shaved, textured jeans, degraded shades, imitated leather, draped wool, and embroidered chenille come to life in 3D. Playful, psychedelic, the attitude is uninhibited. Playing with genres and codes: the jacket is worn as a shirt, the suit pant becomes sporty. Garments adapt to a new life, enlarging their pockets, belting their sides, modernizing the old, and refreshing the lines. Sometimes the invisible becomes visible as seams appear...We adventure, we find joy, we accumulate accessories like mementos on a spiritual journey.
                    </p>
                    <p class="product_introduce_warp_item">
                        For her latest collection as Creative Director of the brand, Yuni Ahn, touches on the epitome of style that she has instilled in Maison Kitsuné for three seasons. Her creativity and know-how of Maison Kitsuné’s Parisian studio give birth to this emancipated silhouette, reflecting a new standard: modern and timeless.
                    </p>
                </a-col>
                <a-col :span="6" v-for="img in imgList" v-bind:key="img.id">
                     <img :src="img.pictureUrl"/>
                </a-col>
            </a-row>
            
        </div> -->
        
        
        <div class="slide_warp_new">
            <div class="slide_t_warp">
                <h2 style="color: #fff;text-align: center;padding-bottom: 3.5714rem;">SPRING SUMMER 2021</h2>
            </div>
            <div class="module-bd">
                <carousel-3d>
                    <slide :index="0" style="height: auto;">
                        <img src="http://shows.vogueimg.com.cn/showspic/FashionImages/S2021RTW/paris/zuhair-murad/collection/00001-Zuhair-Murad-RTW-Spring-21h.jpg.360X540.jpg" />
                    </slide>
                    <slide :index="1">
                        <img src="http://shows.vogueimg.com.cn/showspic/FashionImages/S2021RTW/paris/deveaux/collection/00001-DEVEAUX-SPRING-21-RTWh.jpg.360X540.jpg" />
                    </slide>
                    <slide :index="2">
                        <img src="http://shows.vogueimg.com.cn/showspic/FashionImages/S2021RTW/paris/adam-lippes/collection/00001-Adam-Lippes-RTW-Spring-21h.jpg.360X540.jpg" />
                    </slide>
                    <slide :index="3">
                        <img src="http://shows.vogueimg.com.cn/showspic/FashionImages/S2021RTW/paris/deveaux/collection/00001-DEVEAUX-SPRING-21-RTWh.jpg.360X540.jpg" />
                    </slide>
                    <slide :index="4">
                        <img src="http://shows.vogueimg.com.cn/showspic/FashionImages/S2021RTW/paris/amanda-wakeley/collection/00001-Amanda-Wakeley-RTW-Spring-21-credit-Jan-Lehnerh.jpg.360X540.jpg" />
                    </slide>
                </carousel-3d>
            </div>
           
            
        </div>
        
        
       <!--  <footerBar /> -->
       <!-- <div class="foot-warp" style="background-color: #72984b;height: 80px;width: 100%;">
           <div  style="width: 1000px;margin: 0 auto;">
               <div class="foot-share">
                   <a-icon class="facebook" type="facebook" />
                   <a-icon class="twitter" type="twitter" />
               </div>
               <div class="foot-copy">
                   <p>Copyright © 2021 TAO. All rights reserved.</p>
               </div>    
           </div>
       </div> -->
    </div>
</template>

<script>
    import VideoBar from '../../common/videoBar.vue'
    // import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
    import { url } from '../../../url.json'
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
       name: 'product',
       components: {
           VideoBar,
           Carousel3d,
           Slide
           // FooterBar
       },
       data() {
           return {
               imgList:[]
           }
       },
       methods:{
       },
       mounted(){
           var type = this.$route.query.type;
           axios.get(url+'/api/dr/PictureUpLoad/PhotoList',{
               params:{photoType:type}   
           }).then((data)=>{
               console.log(data)
               this.imgList = data.data.data;
           }).catch((data)=>{
               console.log(data,'2')
           }) 
       }
    }
</script>

<style>
    @import url("../../assets/css/product.css");
    .slide_warp_new{
        padding-top: 16rem;
    }
    .module-bd{
        width: 100%;
        height: 640px;
        padding-top: 3px;
        overflow: hidden;
        background: url(../../assets/img/product/designers-bg.jpg) bottom center no-repeat;
    }
    .carousel-3d-slide{
        height: 540px !important;
    }
    .carousel-3d-slider{
        height: 540px !important;
    }
    .carousel-3d-container{
        height: 540px !important;
    }
    .slide_t_warp{
       /* background:url('http://css.selfimg.com.cn/vogue/www-v2/images/global/fashion-slide.png') no-repeat ;
        margin: 0 auto;
        width: 30.7142rem; */
    }
    
</style>
