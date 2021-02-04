<template>
    <div class="inspiration-page">
        <topBar/>
        <p class="in-title">INSPIRATION</p>
        <div class="in-list-warp">
            <a-row justify="space-between" type="flex">
                <a-col>
                    <div class="in-list-img-warp">
                        <img class="in-list-img" src="../../assets/img/ins/ins-4.gif" />
                        <p class="in-list-text">INSPIRATION1</p>
                        <a href="#" class="in-list-btn">READ NOW</a>
                    </div>
                </a-col>
                <a-col>
                    <div class="in-list-img-warp">
                        <img class="in-list-img" src="../../assets/img/ins/ins-2.gif" />
                        <p class="in-list-text">INSPIRATION2</p>
                        <a class="in-list-btn">READ NOW</a>
                    </div>
                </a-col>
                <a-col>
                    <div class="in-list-img-warp">
                        <img class="in-list-img" src="../../assets/img/ins/ins-3.gif" />
                        <p class="in-list-text">INSPIRATION3</p>
                        <a class="in-list-btn">READ NOW</a>
                    </div>
                </a-col>
                <a-col>
                    <div class="in-list-img-warp">
                        <img class="in-list-img" src="../../assets/img/ins/ins-1.gif" />
                        <p class="in-list-text">INSPIRATION4</p>
                        <a class="in-list-btn">READ NOW</a>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="go-login-warp">
            <button class="go-login" @click="Gologin">VIEW MORE</button>
        </div>
        <footerBar/>
    </div>
</template>
<script>
    import TopBar from '../../common/topBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    export default {
        name: 'index',
        components: {
            TopBar,
            FooterBar
        },
        methods:{
            Gologin:function(){
                this.$router.push({ path: '/login'})
            },
        }
    }
</script>

<style>
    @import url("../../assets/css/inspiration.css");
</style>
