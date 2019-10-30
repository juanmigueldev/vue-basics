Vue.component('login-form', {
    data () {
        return {
            logged: false,
            user:{
                email:'',
                password: ''
            }
        }
    },
    methods:{
        login(){
            this.logged = this.user.email === 'test@test.com' && this.user.password === '123456';
        }
    },
    template:`
        <div>
            <h2>Login Form</h2>
            <p v-show="logged" style="background:green; color=#fff">
                You are logged now
            </p>
            <form @submit.prevent="login">
                <input autocomplete="off" type="email" v-model="user.email" />
                <input type="password" v-model="user.password" />
                <input type="submit" value="login" />
            </form>
        </div>
    `
});