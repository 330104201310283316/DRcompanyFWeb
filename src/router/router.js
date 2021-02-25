import Vue from 'vue';//引入vue
import VueRouter from 'vue-router'//引入vue-router
Vue.use(VueRouter)//第三方库需要use才可以使用
//引入页面
import index from '../view/home/index.vue';
import Company from '../view/aboutUs/company.vue';
import Factory from '../view/aboutUs/factory.vue';
import Factory2 from '../view/aboutUs/factory2.vue';
import WhyUs from '../view/aboutUs/whyUs.vue';
import Product from '../view/product/product.vue';
import Product2 from '../view/product/product2.vue';
import Sustainablity from '../view/sus/sustainablity.vue';
import Ethical from '../view/sus/Ethical.vue';
import Inspiration from '../view/ins/inspiration.vue';
import Inspiration2 from '../view/ins/inspiration2.vue';
import InspirationDetails from '../view/ins/inspirationDetails.vue';
import login from '../view/login/login.vue';
import ContantUs from '../view/login/contantUs.vue';
//定义routers路由的集合，数组类型
const routes  =[
	{ 
		path: '/', 
		component: index,
	},
    {
        path: '/company', 
        component: Company,
    },
    {
        path: '/factory', 
        component: Factory,
    },
    {
        path: '/factory2', 
        component: Factory2,
    },
    {
        path: '/whyUs', 
        component: WhyUs,
    },
    {
        path: '/product', 
        component: Product,
    },
    {
        path: '/product2', 
        component: Product2,
    },
    {
        path: '/Ethical', 
        component: Ethical,
    },
    {
        path: '/sustainablity', 
        component: Sustainablity,
    },
    {
        path: '/login', 
        component: login,
    },
    {
        path: '/inspiration', 
        component: Inspiration,
    },
    {
        path: '/inspiration2', 
        component: Inspiration2,
    },
    {
        path: '/inspirationDetails', 
        component: InspirationDetails,
    },
    {
        path: '/login', 
        component: login,
    },
    {
        path: '/contantUs', 
        component: ContantUs,
    },
]

//实例化VueRouter，并将routes添加进去
export default new VueRouter({
	routes, 
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
});