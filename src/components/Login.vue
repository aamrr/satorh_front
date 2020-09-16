<template>
    <div class="vue-tempalte">
        <nav class="navbar nav">
            <a class="navbar-brand" href="#">
            <img src="@/assets/logo-satori.png" width="50" height="50" class="d-inline-block" alt="">
            <span>RH</span>
            </a>
        </nav>
        <form @submit.prevent="login">
            <h3>Log In</h3>

            <div class="form-group">
                <label>Email address or Login</label>
                <input v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Log In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>


        </form>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods:{
            login(){
                this.$store
                    .dispatch('login', {
                    email: this.email,
                    password: this.password
                    })
                    .then(() => {
                    this.$router.push({ name: 'dashboard' })
                    })
                    .catch(err => {
                    console.log(err)
                    });
            }
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
        margin-bottom: 2rem;
    }

    form{
        background-color: white;
        border-radius: 2rem;
        padding: 2rem;
        width: 27rem;
        margin: 7rem auto;
    }
</style>