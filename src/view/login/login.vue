<template>
    <div class="login-page" @scroll="scrollGet($event)" ref="scroll">
        <topBar/>
        <p class="in-title">Welcome to TAO</p>
        <div class="form-list-warp">
            <div class="form-list">
                <a-row>
                    <a-col :span="12"  class="login-content">
                        <div class="login-warp">
                           <h2 class="login-form-headline">Log in</h2>
                            <div class="login-form">
                                <input v-model="loginName" class="login_input" placeholder="USERNAME" onfocus="this.placeholder='' " onblur="this.placeholder='USERNAME' "/>
                                <input v-model="passWord" class="login_input" placeholder="PASSWORD" onfocus="this.placeholder='' " onblur="this.placeholder='PASSWORD' "/>
                               <button  @click="Login()" aria-label="Log in" type="submit" class="login_submit">Log in</button>
                            </div> 
                        </div>
                    </a-col>
                    <a-col :span="12"  class="create-content">
                        <div class="login-warp">
                            <h2 class="login-form-headline">Create customer account</h2>
                            <p>Create a customer account ,Your personal data will only be used to support your experience throughout the site.</p>
                            <div class="login-form">
                                <input v-model="userName" class="login_input" placeholder="USERNAME" onfocus="this.placeholder='' " onblur="this.placeholder='USERNAME' "/>
                                <input v-model="email" class="login_input" placeholder="EMAIL" onfocus="this.placeholder='' " onblur="this.placeholder='EMAIL' "/>
                                <input v-model="comPany" class="login_input" placeholder="COMPANY" onfocus="this.placeholder='' " onblur="this.placeholder='COMPANY' "/>
                                <button @click="Register()" aria-label="Log in" type="submit" class="login_submit">Register now</button>
                            </div>
                         </div>
                    </a-col>
                </a-row>    
            </div>
        </div>
        <footerBar />
    </div>
</template>
<script>
    import TopBar from '../../common/topBar.vue'
    import FooterBar from '../../common/footerBar.vue'
    import axios from 'axios';
	export default {
		name: 'login',
		components: {
            TopBar,
            FooterBar
		},
        data() {
            return {
                userName: '',
                email: '',
                comPany: '',
                loginName:'',
                passWord:''
            }
        },
        methods:{
            Register:function(){
                var url ="http://192.168.3.49:8081/api/dr/Login/Register";
                axios.post(url, {
                    nickName: this.userName,       
                    email: this.email,
                    comPany:this.comPany
                })
                .then(function (response) {
                    console.log(response)
                    this.$router.push({ path: '/login'})
                })
                .catch(function (error) {
                console.log(error);
                });
            },
            Login:function(){
                var url ="http://192.168.3.49:8081/api/dr/Login/AuthLogin";
                axios.post(url, {
                    userName: this.loginName, 
                    passWord: this.passWord,
                })
                .then(function (data) {
                    if(data.data.code == 200){
                        const token = data.data.data.token;
                        window.localStorage.setItem('token', token)
                        this.$router.push({ path:'/Inspiration'})
                    }else{
                        //message.info('This is a normal message');
                    }
                })
                .catch(function (error) {
					console.log(error);
                     //message.info(error,'This is a normal message');
                });
            },
        },
	}
</script>

<style>
    @import url("../../assets/css/login.css");
</style>
