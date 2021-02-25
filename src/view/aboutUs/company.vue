<template>
    <div class="company-page">
        <NewBar/>
       <div class="company_bg">
           <div class="about-company-info">
                <div class="company-text" style="color: #fff;">
                   <h1 class="company_header_h1" style="padding-bottom: 4rem;">
                       WHO IS TAO
                   </h1>
                    <p>
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
           </div>
       </div>
    </div>
</template>

<script>
    import NewBar from '../../components/newBar.vue'
    export default {
        name: 'company',
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
    @import url("../../assets/css/aboutUs.css");
    .company_bg{
        background: url(../../assets/img/images/company_bg.jpg) no-repeat;
        width: 100%;
        height: 100vh;
        background-size: cover;
    }
    .about-company-info{
        width: 1000px;
        margin: 0 auto;
        text-align: justify;
    }
    .company_header_h1{
        font-size: 3.4285rem;
        letter-spacing: 2.57px;
        text-align: center;
        font-weight: 300;
        color: #000;
    }
    .company-text p{   
        font-size: 1rem;
        letter-spacing: .75px;
        font-family: Univers LT Std,sans-serif;
        line-height: 2;
        color: #000;
        
        /* transition-property: padding-top,opacity;
        transition-duration: 1s;
        transition-timing-function: ease; */
        /* transition: padding-top 1s ease,opacity 1s ease; */
    }
   /* .fadeInUp{
       padding-top: 0;
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
    .fadeInDelay_3{
        transition-delay: 600ms;
    } */
</style>
