<template>
    <div class="product-page">
        <TopBar/>
        <div class="product_banner">
           <a-row class="product_banner_warp" type="flex" justify="space-between">
               <a-col :span="12">
                   <img class="product_banner_1" src="../../assets/img/product/6.png" />
               </a-col>
               <a-col :span="12">
                   <img class="product_banner_2" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/cmsimage/441/homepage_tile_normal/6_BLUSH.jpg?1469633417" />
               </a-col>
               
           </a-row>
        </div>
        <div class="product_list">
            <a-row type="flex" justify="space-between">
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/275/plp/Name_of_Love_FW16_BMSD-009_Kass_Pink_912.jpg?1470055595" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/271/plp/Name_of_Love_FW16_BMSD-009_Kass_Pink_909.jpg?1470055590" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/90/plp/Name_of_Love_FW16_BMSD-007_Belle_Pink_357.jpg?1470055398" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/159/plp/Name_of_Love_FW16_BMSD-003_Emily_Pink_1031.jpg?1470055469" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/159/plp/Name_of_Love_FW16_BMSD-003_Emily_Pink_1031.jpg?1470055469" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
                <a-col :span="8">
                    <div class="product_list_item">
                        <img class="product_list_item_img" src="https://d3gmm2xq16tvhv.cloudfront.net/spree/products/275/plp/Name_of_Love_FW16_BMSD-009_Kass_Pink_912.jpg?1470055595" />
                        <p class="product_list_item_t">测试测试</p>
                    </div>
                </a-col>
            </a-row>
            
        </div>
        <footerBar />
    </div>
</template>

<script>
    import TopBar from '../../common/topBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    export default {
        name: 'product',
        components: {
            TopBar,
            FooterBar
        },
    }
</script>

<style>
    @import url("../../assets/css/product.css");
</style>
