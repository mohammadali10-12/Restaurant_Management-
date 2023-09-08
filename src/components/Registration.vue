<template>
    <body class="bg-color">
        <section class="container mt-5">
            <div class="row justify-content-md-center">
                <div class="col-md-6 col-sm-12 bg-white p-5 rounded shadow">
                    <div class="col-12 text-center">
                        <h3 class="text-primary"><strong>Register Now</strong></h3>
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">UserName</label>
                        <input type="username" class="form-control" id="username" v-model="username">
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
                            <router-link to="/login">Your have account ? login </router-link>
                        </label>
                    </div>
                    <div class="text-center mt-3">
                        <button v-on:click="registrationData" class="btn btn-primary btn-rounded w-75">Register Now</button>
                    </div>


                </div>
            </div>
        </section>
    </body>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SignUpComp',
    data() {
        return {
            username: '',
            email: '',
            password: '',

        }
    },

    methods: {
        async registrationData() {
            try {
                console.log(this.username, this.email, this.password);
                let response = await axios.post('http://localhost:3000/users', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                });

                console.log(response);
                if (response.status == 201) {
                    localStorage.setItem('user_info', JSON.stringify(response.data));
                    this.$router.push({ name: 'LoginComp' });
                }

            } catch (error) {
                console.log(error);
            }

        }
    },
    mounted() {

        let user = localStorage.getItem('user_info');
        if (user) {
            this.$router.push({ name: 'HomeComp' });
        }
    }
}

</script>

<style>
.bg-color {
    background-color: #f9fbfd;
    font-family: Arial, Helvetica, sans-serif;
}

.btn-rounded {
    border-radius: 30px;
}
</style>
