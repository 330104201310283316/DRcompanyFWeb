<template>
    <div class="product">
        <topBar/>
        <div class="product_main">
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
            
        </div>
         <footerBar />
    </div>
</template>

<script>
    import TopBar from '../../common/topBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
    export default {
       name: 'product',
       components: {
           TopBar,
           FooterBar
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
           var url ="http://192.168.3.49:8081/api/dr/PictureUpLoad/PhotoList";
           axios.get(url,{
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
</style>
