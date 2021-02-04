<template>
    <div class="login-page" @scroll="scrollGet($event)" ref="scroll">
        <topBar/>
        <p class="in-title">Welcome to TAO</p>
<!--        <h1 class="login-page-headline">Welcome to TAO</h1> -->
        <div class="form-list-warp">
            <div class="form-list">
                <a-row>
                    <a-col :span="12"  class="login-content">
                        <div class="login-warp">
                           <h2 class="login-form-headline">Log in</h2>
                            <div class="login-form">
                               <md-field>
                                  <label>E-mail</label>
                                  <md-input required></md-input>
                                <!--  <span class="md-helper-text">Helper text</span> -->
                               </md-field>
                               <md-field>
                                  <label>Password</label>
                                  <md-input  required></md-input>
                                <!--  <span class="md-helper-text">Helper text</span> -->
                               </md-field>
                               <button aria-label="Log in" type="submit" class="login-form__submit-button">Log in</button>
                            </div> 
                        </div>
                    </a-col>
                    <a-col :span="12"  class="create-content">
                        <div class="login-warp">
                            <h2 class="login-form-headline">Create customer account</h2>
                            <p>Create a customer account ,Your personal data will only be used to support your experience throughout the site.</p>
                            <div class="login-form">
                                <md-field>
                                    <label>Username</label>
                                    <md-input required v-model="username"></md-input>
                                    <!--  <span class="md-helper-text">Helper text</span> -->
                                </md-field>
                                <md-field>
                                    <label>E-mail</label>
                                    <md-input required v-model="mail"></md-input>
                                    <!--  <span class="md-helper-text">Helper text</span> -->
                                </md-field>
                                <md-field>
                                    <label>Company</label>
                                    <md-input required v-model="company"></md-input>
                                    <!--  <span class="md-helper-text">Helper text</span> -->
                                </md-field>
                                <button @click="Register()" aria-label="Log in" type="submit" class="login-form__submit-button">Register now</button>
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
	export default {
		name: 'login',
		components: {
            TopBar,
            FooterBar
		},
        data() {
            return {
                username: '',
                mail: '',
                company: ''
            }
        },
        methods:{
            Register:function(){
               console.log(this.username);
            },

           
        },
	}
</script>

<style>
    @import url("../../assets/css/login.css");
</style>
