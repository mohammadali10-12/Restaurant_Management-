<template>
    <Header />
    <h1>This is Update Restaurant Page</h1>

    <body class="bg-color">
        <section class="container mt-5">
            <div class="row justify-content-md-center">
                <div class="col-md-6 col-sm-12 bg-white p-5 rounded shadow">

                    <div class="mb-3">
                        <label for="username" class="form-label">Name</label>
                        <input type="username" class="form-control" id="username" v-model="restaurant.name">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="address" class="form-control" id="address" v-model="restaurant.address">
                    </div>
                    <div class="mb-3">
                        <label for="contact" class="form-label">Contact</label>
                        <input type="contact" class="form-control" id="contact" v-model="restaurant.contact">
                    </div>

                    <div class="text-center mt-3">
                        <button v-on:click="UpdateRestaurant" class="btn btn-primary btn-rounded w-75">UpDate
                            Restaurant</button>
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<script>

import Header from './Header.vue';
import axios from 'axios';
export default {

    name: 'UpdateRestaurant',
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    components: {
        Header
    },
    methods: {
        async UpdateRestaurant() {
            let response = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (response.status == 200) {
                this.$router.push({ name: 'HomeComp' });
            }
        }
    },
    async mounted() {
        try {
            let user = localStorage.getItem('user_info');
            if (!user) {
                this.$router.push({ name: 'SignUpComp' });
            }
            const result = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`);
            // console.log(result.data);
            this.restaurant = result.data;
        } catch (error) {
            console.log(error);
        }
    },



}

</script>