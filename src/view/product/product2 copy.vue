<template>
    <div class="prouuct2_page">
        <videoBar/>
        <div class="prouuct2_banner_warp" style="z-index: 1;">
            <div class="banner_bg">
                <img class="banner_image" src="../../assets/img/product/product_banner.jpg" />
            </div>
           <div class="banner_bg animate_opacity"  :style="{opacity: show}">
                <img class="banner_image" src="../../assets/img/product/company_bg2.png" />
            </div>
        </div>
        <div class="img_list animate_padding_top"  style="z-index: 99;" 
                
                    >
            <a-row>
                <a-col :span="8">
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/02/miuzine/asset/thumb_big.jpg" />
                        </div>
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2020/001_fashion_shows/SS/Event/asset/thumb_2_small.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>   
                    </div> 
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/02/miuzine/asset/thumb_big.jpg" />
                        </div>
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2020/001_fashion_shows/SS/Event/asset/thumb_2_small.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>   
                    </div>
                     <div class="item_warp">
                         <div>
                             <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/01/cny_always_new/asset_2/thumb_big.jpg" />
                         </div> 
                         <div class="text-warp">
                             <div class="description"><span>pruduct description</span> </div>
                             <div class="title">TAO-zine SS21</div>
                             <div class="description"></div>
                         </div> 
                     </div> 
                </a-col>
                <a-col :span="8">
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/02/miumiu_league/asset/thumb_big.jpg" />
                         </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2020/006_special_projects/12/upcycled/asset/thumb_big.jpg" />
                         </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                        <div class="item_warp">
                            <div>
                                <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/02/miumiu_league/asset/thumb_big.jpg" />
                             </div> 
                            <div class="text-warp">
                                <div class="description"><span>pruduct description</span> </div>
                                <div class="title">TAO-zine SS21</div>
                                <div class="description"></div>
                            </div>
                        </div>
                        <div class="item_warp">
                            <div>
                                <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2020/006_special_projects/12/upcycled/asset/thumb_big.jpg" />
                             </div> 
                            <div class="text-warp">
                                <div class="description"><span>pruduct description</span> </div>
                                <div class="title">TAO-zine SS21</div>
                                <div class="description"></div>
                            </div>
                        </div>
                            
                </a-col>
                <a-col :span="8">
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/002_campaigns/SS/page_asset_2/thumb_medium.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>特别项目</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/01/cny_always_new/asset_2/thumb_big.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div> 
                    </div> 
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/002_campaigns/SS/page_asset_2/thumb_medium.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>特别项目</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2021/006_special_projects/01/cny_always_new/asset_2/thumb_big.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div> 
                    </div>
                    <div class="item_warp">
                        <div>
                            <img class="item_img" src="https://www.miumiu.com/content/dam/miumiu/2020/001_fashion_shows/SS/Event/asset/thumb_2_small.jpg" />
                        </div> 
                        <div class="text-warp">
                            <div class="description"><span>pruduct description</span> </div>
                            <div class="title">TAO-zine SS21</div>
                            <div class="description"></div>
                        </div>   
                    </div> 
                </a-col>
                
                
            </a-row>
            
        </div>
       
    </div>
</template>

<script>
    
    function throttle(fn,delay){
        let valid = true
        return function() {
           if(!valid){
               //休息时间 暂不接客
               return false 
           }
           // 工作时间，执行函数并且在间隔期内把状态位设为无效
            valid = false
            setTimeout(() => {
                fn()
                valid = true;
            }, delay)
        }
    }
    import VideoBar from '../../common/videoBar.vue'
    export default {
       name: 'product2',
       components: {
           VideoBar,
       },
       data: function () {
          return {
              show:0,
          };
       },
       beforeCreate: function () {
        let beforeScrollTop = 0;
        window.addEventListener('scroll',throttle(()=>{
            var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                delta = afterScrollTop - beforeScrollTop;
            if( delta === 0 ) return false;
            var direction = delta > 0 ? "down" : "up" ;
            
            if(this.show === 0 && direction == 'down' && afterScrollTop>10
            ){
                this.show = 1;
            }else if(this.show === 1 && direction == 'up' && afterScrollTop<10
            ){
                this.show = 0;
            }
            beforeScrollTop = afterScrollTop;
        },200));
       },
       beforeDestory: function(){
        window.removeEventListener('scroll');
       },
       methods:{
           
       },
    }
</script>

<style>
    .banner_image{
        width: 100%;
        height: 100% !important;
    }
    .animate_opacity{
        transition: opacity 2s ease;
        -webkit-transition:opacity 2s ease; 
    }
    .animate_padding_top{
        transition: padding-top 2s ease;
        -webkit-transition:padding-top 2s ease; 
    }
    .banner_bg{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
    }
    .img_list{
        width: 75%;
        margin: 0 auto;
		padding-top: 115vh;
    }
    .item_warp{
        padding: 5px;
    }
    .item_img{
        width: 100%;
        height: auto;
    }
    .text-warp{
        margin-top: 1.5rem;
        margin-bottom: 3.5714rem;
    }
    .description {
        font-size: 1rem;
        color: #fff;
        padding-left: 10px;
    }
    .title {
        font-size: 1.5rem;
        color: #fff;
        padding-top: 0.5rem;
        padding-left: 10px;
    }
       
    
</style>
