<template>
	<div>
		<TopBar/>
		<div style="position: relative;">
			<div class="factory-page" 
				:style="{
					'position':reachBottom?'absolute':'fixed',
					'bottom':reachBottom?0:'unset'
				}">
				<div style="position: relative;">
					<div class="fac-big-bg fadeAnimation"
					:style="{
						'opacity':scrollIndex === 0?1:0,
						'left':showRight?'-50%':0,
						'position': reachBottom?'relative':'absolute',
					}">
					</div>
					
					<div class="fac-big-bg2 fadeAnimation"
					:style="{
						'opacity':scrollIndex === 1?1:0,
						'left':0,
						'position': reachBottom?'relative':'absolute',
					}">
					</div>
					<div class="fac-big-bg3 fadeAnimation"
					:style="{
						'opacity':scrollIndex === 2?1:0,
						'left':0,
						'position': reachBottom?'relative':'absolute',
					}">
					</div>
				</div>
				
				<div :style="{'display':scrollIndex !=0?'none':'block'}">
					<div class="text-1 show-animate-delay-05">
						<p>Factory</p>
						<!-- <p>Overview</p> -->
					</div>
					<div class="text-2 show-animate-delay-10">
					TAO & Company, Inc
					</div>
					<div class="text-2 show-animate-delay-15">
					Stmary (Guangde) Fashion Co,.Ltd
					</div>
					<div class="text-2 show-animate-delay-20">
					Management
					</div>
				</div>
			</div>
			
			<div class="rightWrap">
				<div class="right-text show-animate-delay-25">
					<div class="fac-part-t">
						TAO now has two self-owned garment factories:<a href="#" class="fac-red"> TAO & Company, Inc </a>and <a href="#" class="fac-red">Stmary 
						(Guangde) Fashion Co., Ltd, </a>both are regularly audited 
                        by customers and/or external companies. Cooperating with experienced fabric 
						dying and printing mills, and well-equipped embellishment factories, TAO has 
						set up and Integrated Vertical Production Chain to provide qualified products 
						and flexible production schedule to all our brand partners. 
					</div>
					<div class="fac-part-t">
						Both factories share extensive product categories and are also constantly 
						expanding the product line. Starting from silk products, now are mainly 
						focusing on dresses, blouses, skirts, pants, tops, coats and evening dresses, 
						with about 70% woven, and 30% in circular knit or combined products, all for 
						ladies'wears. 
					</div>
					<a-row>
						<a-col :span="6">
							<img src="../../assets/img/aboutUs/fac-art-img1.png" />
						</a-col>
						<a-col :span="6">
							<img src="../../assets/img/aboutUs/fac-art-img2.png" />
						</a-col>
						<a-col :span="6">
							<img src="../../assets/img/aboutUs/fac-art-img3.png" />
						</a-col>
						<a-col :span="6">
							<img src="../../assets/img/aboutUs/fac-art-img4.png" />
						</a-col>
					</a-row>
					<a-row class="fac-art-p1">TAO & Company, Inc</a-row>
<!-- 					<a-row>
						<img class="fac-art-img" src="../../assets/img/aboutUs/fac-art-img5.png" />
					</a-row> -->
					<div class="adr">
						<div class="adr-box clearfix">
							<img class="adr-icon" src="../../assets/img/aboutUs/factory_video_test.png" />
							<p class="adr-name">hangzhou,china</p>
						</div>
						<div class="em-box">
							<div class="em-b-es">
								<p class="em-b-p1">Employees</p>
								<p class="em-b-p2">180</p>
							</div>
							<div class="em-line"></div>
							<div class="em-b-es">
								<p class="em-b-p1">stablished</p>
								<p class="em-b-p2">2007</p>
							</div>
							<div class="em-line"></div>
							<div class="em-b-es">
								<p class="em-b-p1">assembly lines</p>
								<p class="em-b-p2">5</p>
							</div>
						</div>
					</div>
					<a-row class="fac-art-p1">Stmary (Guangde) Fashion Co,Ltd</a-row>
					<div class="adr">
						<div class="adr-box clearfix">
							<img class="fac-art-img" src="../../assets/img/aboutUs/factory_video_test.png" />
							<p class="adr-name">Anhui,china</p>
						</div>
						<div class="em-box clearfix">
							<div class="em-b-es">
								<p class="em-b-p1">Employees</p>
								<p class="em-b-p2">180</p>
							</div>
							<div class="em-line"></div>
							<div class="em-b-es">
								<p class="em-b-p1">stablished</p>
								<p class="em-b-p2">2007</p>
							</div>
							<div class="em-line"></div>
							<div class="em-b-es">
								<p class="em-b-p1">assembly lines</p>
								<p class="em-b-p2">5</p>
							</div>
						</div>
					</div>
					<div class="mat-warp">
						<div class="mat-name">
							<p class="mat-p1-line-p">Material Management</p>
							<div class="mat-line"></div>
						</div>
						<div class="mat-p2">
							Proper temperature and humidity are strictly monitored in the warehouse, as well as the cleanness and tidiness. Each function zone is clearly separated and marked.
						</div>
						<div class="mat-p2">
							It is 100% inspected for all fabrics into the warehouse against the approved swatch, before send to cutting room. Four-point inspection system are strictly introduced and followed.
						</div>
						<div class="mat-p2">
							To ensure the stable measurement, apart from regular inspection, we take pre-shrinkage treatment for all viscose, jersey, and those fabrics with elastane.
						</div>
						<div class="mat-p2">
							Trims such as zipper, button and interlining, as tested with SGS or ITS for
						</div>
					</div>
					<div class="mat-warp">
						<div class="mat-name">
							<p class="mat-p1-line-p">Production Management </p>
							<div class="mat-line"></div>
						</div>
						<p class="mat-p3">Pre-Production:</p>
						<div class="mat-p2">
                            All styles should have Pre-production meeting before production started. A team consists of pattern maker, QA, QC, merchandiser, and related supervisors on cutting, sewing and finishing, will go through all the details and possible risks, and share knowledge on how to make the bulk properly. QC is responsible for the meeting organization, and all records will be kept and filed into the style package. 
                       </div>
						<p class="mat-p3">One-Piece Flow Assembly Line: </p>
						<div class="mat-p2">
                            The production process is One-piece Flow, with all procedures analyzed, timed, and allocated to most suitable worker, to make sure a most efficient and qualified production flow for each style. All possible problems can be quickly identified during the initial flow and be noticed when the first lots come out.
						</div>
						<p class="mat-p3">In-Line Quality control: </p>
						<div class="mat-p2">
                            Different from normal production flow with one inspector at each line to check the finished garment, we put one more inspector in the middle of the line to check the semi-products before assembled. Therefore, to minimize the secondary products without further wasting. 
							Patterns are clearly marked on iron table, with panels precisely laid and ironed to assure proper control of the shape and size. 
                        </div>
						<p class="mat-p3">Templated production: </p>
						<div class="mat-p2">
                            All process that can be templated, are analyzed and patterned into auto-machine production, with higher efficient and standard production. 
                        </div>
						<p class="mat-p3">Divided-inspection:</p>
						<div class="mat-p2">
							Each garment is inspected by 2 or more staffs with each people focus on inspecting the particular part(s), so to minimize the overlook of defects and to improve the inspection efficiency. 
							Inspection tables are colored into black or white on either side. It means light color garments are inspected on black table, while dark ones on white side table.
						</div>
						<p class="mat-p3">Additional Inspection: </p>
						<div class="mat-p2">
                             Since most of our production are free of inspection from customers, we appreciated the trusts and highly value the promises. Thus, to secure all pieces delivered are in good condition, additional inspection of spot check or 100% check by an independent inspection team are conducted before shipment.
						</div>
					</div>
					<div class="mat-warp">
						<div class="mat-name">
							<p class="mat-p1-line-p">Embellishment workshop</p>
							<div class="mat-line"></div>
						</div>
						<div class="mat-p2">
                            Our products usually with many nice design details, such as embroidery, beading, pleating, smocking, and laser cut. Therefore, asides to the assembly lines, we also set up an embellishment workshop in the factory, to fulfill these needs. 
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="go-top">
				<div class="r-anchor" 
				:class="{
					'is-down':isDown,
				}">
					<p class="l-scroll"><a>SCROLL DOWN</a></p>
					<p class="l-pagetop"><a href="#top">PAGE TOP</a></p>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	import TopBar from '../../common/topBar.vue'
	import _ from 'lodash';
	export default {
		name: 'factory2',
		components: {
            TopBar,
		},
		data:function(){
			return {
				showRight:false,
				showText:false,
				scrollIndex:0,
				reachBottom:false,
				isDown:false
			};
		},
		beforeMount: function () {
		window.addEventListener('scroll', this.handleScroll.bind(this));
		},
		mounted: function(){
			setTimeout(()=>{
				this.showRight = true;
			},3000);
		},
		beforeDestroy: function () {
		window.removeEventListener('scroll', this.handleScroll.bind(this));
		},
		methods:{
			handleScroll: _.throttle(function(){
				console.log(window.scrollY,'woshiYY')
				if(window.scrollY > 
				document.body.scrollHeight - 
				document.getElementsByClassName("footer-page")[0].clientHeight - 
				document.body.clientHeight){
					this.reachBottom=true;
				}else{
					this.reachBottom = false;
				}
				if(4000>window.scrollY && window.scrollY>2674){
					this.scrollIndex =2;
				}else if(2674>window.scrollY && window.scrollY>1954){
					this.scrollIndex =1;
				}else if(1954>window.scrollY){
					this.scrollIndex =0;
				}
				this.isDown = window.scrollY> 200;
			},100),
		}
	}
</script>

<style>
	@import url("../../assets/css/aboutUs2.css");
</style>
