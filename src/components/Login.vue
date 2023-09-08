<template>
    <body class="bg-color">
        <section class="container mt-5">
            <div class="row justify-content-md-center">
                <div class="col-md-6 col-sm-12 bg-white p-5 rounded shadow">
                    <div class="col-12 text-center">
                        <h3 class="text-primary"><strong>Login</strong></h3>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <div class="mb-3 form-check">
                        <label class="form-check-label" for="terms">
                            <router-link to="/signup">Your haven't account ?</router-link>
                        </label>
                    </div>
                    <div class="text-center mt-3">
                        <button v-on:click="login" class="btn btn-primary btn-rounded w-75">Login</button>
                    </div>


                </div>
            </div>
        </section>
    </body>
</template>

<script>
import axios from 'axios';
export default {

    name: 'LoginComp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:
    {
        async login() {
            // console.warn(this.email, this.password);
            try {

                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem('user_info', JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'HomeComp' });
                }

            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {

        let user = localStorage.getItem('user_info');

        if (user) {
            this.$router.push({ name: 'HomeComp' })
        }
    }
}

</script>