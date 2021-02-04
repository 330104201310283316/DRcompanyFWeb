<template>
    <div class="company-page">
        <videoBar/>
       <div class="company_bg">
           <div class="about-company-info">
               <div class="company-text" style="color: #fff;">
                   <p style="text-align: center;font-size: 1.7142rem;">Wh0 is TAO</p>
                  <p style="padding-top: 7.1428rem;">
                       Over the decades, TAO has always been at the forefront of apparel production. Founded upon advanced management,
                       TAO has become a reliable partner to manufacture full line of woman's apparel, including tops, shirts, dresses, 
                       pants, jackets and other various ready-to-wear products. 
                   </p>
                   <p>
                       TAO offers outstanding sourcing and R&D service to brands
                        and designers that are cooperating with. An experienced sourcing team enables TAO to provide rich and updated 
                        resources of various kinds of fabric, trims, and product categories. Designers that studied and/or lived in Euro 
                        for decades are quite sensitive to the fashion trends, so to collect and offer inspirations assistance to empower 
                        your design ideas. 
                   </p>
                   <p>
                        The two self-owned factories ensure flexible production schedule and on time delivery, and both
                        are WRAP and BSCI audited, and enjoy Sedex membership. Experienced staffs and management are crucial to our quality 
                        promise, they devote on workmanship improvement, and new technology introduction. Today, TAO has embraced sophisticated 
                        new technology such as 3D pattern making, to meet the changing needs of customers while remaining committed to 
                        delivering the highest possible quality apparel for every occasion.
                   </p>
                   <p>
                    TAO's continuous evolution and dedication have 
                   created a global network of loyal customers who are served by the company's promise, a partner you can always count on.
                    </p>
                </div>
                <!-- <a-row style="color: #fff;padding-top: 7.1428rem;">
                    <a-col :sm="24" :md="24" :lg="12" :xl="12" style="padding-right: 50px;padding-bottom: 20px;">
                        Over the decades, TAO has always been at the forefront of apparel production. Founded upon advanced management,
                        TAO has become a reliable partner to manufacture full line of woman's apparel, including tops, shirts, dresses, 
                        pants, jackets and other various ready-to-wear products. 
                    </a-col>
                    <a-col :sm="24" :md="24" :lg="12" :xl="12" style="padding-bottom: 20px;">
                        TAO offers outstanding sourcing and R&D service to brands
                         and designers that are cooperating with. An experienced sourcing team enables TAO to provide rich and updated 
                         resources of various kinds of fabric, trims, and product categories. Designers that studied and/or lived in Euro 
                         for decades are quite sensitive to the fashion trends,
                     </a-col>
                     <a-col :sm="24" :md="24" :lg="12" :xl="12" style="padding-right: 50px;">
                         so to collect and offer inspirations assistance to empower
                         your design ideas. 
                        The two self-owned factories ensure flexible production schedule and on time delivery, and both
                        are WRAP and BSCI audited, and enjoy Sedex membership. Experienced staffs and management are crucial to our quality 
                        promise, they devote on workmanship improvement, and new technology introduction. Today, 
                     </a-col>
                     <a-col :sm="24" :md="24" :lg="12" :xl="12">
                         TAO has embraced sophisticatednew technology such as 3D pattern making, to meet the changing needs of customers while remaining committed to 
                         delivering the highest possible quality apparel for every occasion.TAO's continuous evolution and dedication have
                         created a global network of loyal customers who are served by the company's promise, a partner you can always count on.
                      </a-col>
                </a-row>
                -->
                
           </div>
       </div>
    </div>
</template>

<script>
    import VideoBar from '../../common/videoBar.vue'
    export default {
        name: 'company',
        components: {
            VideoBar,
        },
    }
</script>

<style>
    @import url("../../assets/css/aboutUs.css");
    .company_bg{
        background: url(../../assets/img/aboutUs/company_bg.jpg) no-repeat;
        width: 100%;
        height: 100vh;
    }
    .about-company-info{
        width: 1000px;
        margin: 0 auto;
        text-align: justify;
    }
</style>
