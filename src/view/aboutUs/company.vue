<template>
    <div class="company-page">
       <TopBar/>
       <a-row>
           <a-col :span="12">
               <img class="about-company-img" src="../../assets/img/video/company-bg.jpg" />
           </a-col>
           <a-col :span="12">
               <div class="about-company-info">
                   <div class="company-text">
                       Over the decades, TAO has always been at the forefront of apparel production. Founded upon advanced management, 
                       TAO has become a reliable partner to manufacture full line of woman's apparel, including tops, shirts, dresses, 
                       pants, jackets and other various ready-to-wear products. TAO offers outstanding sourcing and R&D service to brands 
                       and designers that are cooperating with. An experienced sourcing team enables TAO to provide rich and updated 
                       resources of various kinds of fabric, trims, and product categories. Designers that studied and/or lived in Euro 
                       for decades are quite sensitive to the fashion trends, so to collect and offer inspirations assistance to empower 
                       your design ideas. The two self-owned factories ensure flexible production schedule and on time delivery, and both 
                       are WRAP and BSCI audited, and enjoy Sedex membership. Experienced staffs and management are crucial to our quality 
                       promise, they devote on workmanship improvement, and new technology introduction. Today, TAO has embraced sophisticated 
                       new technology such as 3D pattern making, to meet the changing needs of customers while remaining committed to 
                       delivering the highest possible quality apparel for every occasion. TAO's continuous evolution and dedication have 
                       created a global network of loyal customers who are served by the company's promise, a partner you can always count on.
                    </div>
               </div>
           </a-col>  
        </a-row>  
    </div>
</template>

<script>
    import TopBar from '../../common/topBar.vue'
    export default {
        name: 'company',
        components: {
            TopBar,
        },
    }
</script>

<style>
    @import url("../../assets/css/aboutUs.css");
</style>
