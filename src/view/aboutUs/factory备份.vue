<template>
    <div class="factory_page">
        <TopBar/>
        <img style="margin-top: 80px;" class="factory_banner" src="../../assets/img/images/factory_banner.png" />
        <div class="factory_content">
            <a-layout>
                <a-layout-sider>
                    <ul class="factory_nav">
                        <li v-scroll-to="'#tao_company'" class="factory_choice">TAO & Company, Inc</li>
                        <li v-scroll-to="'#tao_company2'">Stmary (Guangde) Fashion Co,.Ltd</li>
                        <li v-scroll-to="'#tao_company3'">Management</li>
                    </ul>
                </a-layout-sider>
                <a-layout-content>
                    <div class="factory_content_right" style="padding-right: 100px;">
                        <p class="factory_main_p">
                            TAO now has two self-owned garment factories:<span> TAO & Company, Inc </span>and
                            <span> Stmary (Guangde) Fashion Co., Ltd </span>, both are regularly audited by customers
                             and/or external companies. Cooperating with experienced 
                            fabric dying and printing mills, and well-equipped embellishment factories, TAO has set up and 
                            Integrated Vertical Production Chain to provide qualified products and flexible production schedule
                             to all our brand partners. 
                        </p>  
                        <p class="factory_main_p">   
                             Both factories share extensive product categories and are also 
                             constantly expanding the product line. Starting from silk products, now are mainly focusing on 
                             dresses, blouses, skirts, pants, tops, coats and evening dresses, with about 70% woven, 
                             and 30% in circular knit or combined products, all for ladies’ wears.
                        </p>
                        <div class="factory_partner">
                            <img class="factory_partner_img1" src="../../assets/img/aboutUs/factory_partner1.png" />
                            <img class="factory_partner_img2" src="../../assets/img/aboutUs/factory_partner2.png" />
                            <img class="factory_partner_img3" src="../../assets/img/aboutUs/factory_partner3.png" />
                            <img class="factory_partner_img4" src="../../assets/img/aboutUs/factory_partner4.png" />
                        </div>
                        <div class="factory_video" id="tao_company">
                            <p class="factory_video_title">TAO & Company, Inc</p>
                            <div class="factory_video_info">
                                <div class="factory_video_info_item">Lcation<br/>HANZHOU,CHINA</div>
                                <div class="factory_video_info_item">Assembly<br/>lines5</div>
                                <div class="factory_video_info_item">Employees<br/>180</div>
                                <div class="factory_video_info_item">Established<br/>2007</div>
                            </div>
                            <div class="factory_video_player">  
                            </div>
                        </div>
                        <div style="width: 100%;height: 1px;background-color: #9d9da1;"></div>
                        <div class="factory_video" id="tao_company2">
                            <p class="factory_video_title">Stmary (Guangde) Fashion Co,.Ltd</p>
                            <div class="factory_video_info">
                                <div class="factory_video_info_item">Lcation<br/>Anhui,CHINA</div>
                                <div class="factory_video_info_item">Employees<br/>180</div>
                                <div class="factory_video_info_item">Established<br/>2007</div>
                                <div class="factory_video_info_item">Assembly lines<br/>4</div>
                            </div>
                            <div class="factory_video_player1">  
                            </div>
                        </div>
                        <div style="width: 100%;height: 1px;background-color: #9d9da1;"></div>
                        <div class="factory_manage" id="tao_company3">
                            <p class="factory_video_title">Management</p>
                            <div style="padding-top: 5rem;">
                                <p class="factory_manage_item_text_p2">Material Management</p>
                                <p class="factory_main_p">
                                    Proper temperature and humidity are strictly monitored in the warehouse, as well as the 
                                    cleanness and tidiness. Each function zone is clearly separated and marked.
                                    It is 100% inspected for all fabrics into the warehouse against the approved swatch, before 
                                    send to cutting room. Four-point inspection system are strictly introduced and followed. 
                                    To ensure the stable measurement, apart from regular inspection, we take pre-shrinkage 
                                    treatment for all viscose, jersey, and those fabrics with elastane.   
                                    All labels and tags are inspected as well, for quality, color and wording, etc.… and 
                                    separately stocked by brand/style. Also, to protect the brand, all logo labels are 
                                    particularly locked.
                                    Trims such as zipper, button and interlining, as tested with SGS or ITS for
                                </p>
                            </div>
                            <div style="padding-top: 5rem;">
                                <p class="factory_manage_item_text_p2">Production Management</p>
                                <p class="factory_main_p">
                                   Pre-Production: All styles should have Pre-production meeting before production started. 
                                   A team consists of pattern maker, QA, QC, merchandiser, and related supervisors on cutting, 
                                   sewing and finishing, will go through all the details and possible risks, and share knowledge 
                                   on how to make the bulk properly. QC is responsible for the meeting organization, and all 
                                   records will be kept and filed into the style package. 
                                </p>  
                                <p class="factory_main_p">  
                                    One-Piece Flow Assembly Line: The production process is One-piece Flow, with all 
                                    procedures analyzed, timed, and allocated to most suitable worker, to make sure a most 
                                    efficient and qualified production flow for each style. All possible problems can be 
                                    quickly identified during the initial flow and be noticed when the first lots come out.
                                </p>
                                <p class="factory_main_p">    
                                   In-Line Quality control: Different from normal production flow with one inspector at
                                    each line to check the finished garment, we put one more inspector in the middle of the 
                                    line to check the semi-products before assembled. Therefore, to minimize the secondary 
                                    products without further wasting. 
                                   Patterns are clearly marked on iron table, with panels precisely laid and ironed to assure 
                                   proper control of the shape and size. 
                                </p>
                            </div>
                            <div style="padding-top: 5rem;">
                                <p class="factory_manage_item_text_p2">Material Management</p>
                                <p class="factory_main_p">
                                    Proper temperature and humidity are strictly monitored in the warehouse, as well as the 
                                    cleanness and tidiness. Each function zone is clearly separated and marked.
                                    It is 100% inspected for all fabrics into the warehouse against the approved swatch, before 
                                    send to cutting room. Four-point inspection system are strictly introduced and followed. 
                                    To ensure the stable measurement, apart from regular inspection, we take pre-shrinkage 
                                    treatment for all viscose, jersey, and those fabrics with elastane.   
                                    All labels and tags are inspected as well, for quality, color and wording, etc.… and 
                                    separately stocked by brand/style. Also, to protect the brand, all logo labels are 
                                    particularly locked.
                                    Trims such as zipper, button and interlining, as tested with SGS or ITS for
                                </p>
                                <p class="factory_main_p">
                                   Templated production: All process that can be templated, are analyzed and patterned into auto-machine production, with higher efficient and standard production.
                                </p>  
                                <p class="factory_main_p">  
                                   Divided-inspection: Each garment is inspected by 2 or more staffs with each people focus on inspecting the particular part(s), so to minimize the overlook of defects and to improve the inspection efficiency. 
                                    Inspection tables are colored into black or white on either side. It means light color garments are inspected on black table, while dark ones on white side table.
                                        
                                </p>
                                <p class="factory_main_p">    
                                   Additional Inspection: Since most of our production are free of inspection from customers, we appreciated the trusts and highly value the promises. Thus, to secure all pieces delivered are in good condition, additional inspection of spot check or 100% check by an independent inspection team are conducted before shipment. 
                                </p>
                            </div>
                            <div style="padding-top: 5rem;">
                                <p class="factory_manage_item_text_p2">Embellishment workshop</p>
                                <p class="factory_main_p">
                                 Our products usually with many nice design details, such as embroidery, beading, pleating, 
                                     smocking, and laser cut. Therefore, asides to the assembly lines, we also set up an 
                                     embellishment workshop in the factory, to fulfill these needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout>
        </div>
   <!--     <footerBar /> -->
        <div class="foot-warp" style="background-color: #104b67;height: 80px;width: 100%;">
            <div  style="width: 1000px;margin: 0 auto;">
                <div class="foot-share">
                    <a href="https://twitter.com" style="color: #fff;">
                        <a-icon class="facebook" type="facebook" />
                    </a>
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
    // import FooterBar from '../../common/footerBar.vue'
    export default {
        name: 'sustainablity',
        components: {
            TopBar,
            // FooterBar
        },
		
    }
</script>

<style>
    @import url("../../assets/css/aboutUs.css");
    .factory_content{
        margin: 5.7142rem;
        background-color: #42B983;
    }
    .factory_content_right{
        min-width: 1000px;
        width: 100%;
    }
    .ant-layout-sider{
        flex: 0 0 400px; 
        background-color: #fff !important;
        width: 400px !important;
        max-width: 400px !important;
        min-width: 400px !important;
    }
    .ant-layout{
        background-color: #fff !important;
    }
</style>
