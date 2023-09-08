<template>
    <Header />
    <h1>Hello {{ name }}</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">contact</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td scope="row">{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td>
                    <button><router-link :to="`/Update/${item.id}`"
                            style="text-decoration: none; color:green">Update</router-link></button>
                    <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import Header from './Header.vue';
import axios from 'axios';
export default {

    name: 'HomeComp',
    data() {
        return {
            name: "",
            restaurants: [],
        }
    },
    methods: {
        async deleteRestaurant(id) {
            try {
                let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);
                if (result.status == 200) {
                    this.loadData();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async loadData() {
            try {
                let user = localStorage.getItem('user_info');
                this.name = JSON.parse(user).username;

                if (!user) {
                    this.$router.push({ name: 'SignUpComp' });
                }

                let result = await axios.get('http://localhost:3000/restaurant');
                // console.log(result);
                this.restaurants = result.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        this.loadData();
    },

    components: {
        Header
    }

}

</script>

<style>
button {
    color: red;
    margin-left: 4px;
}
</style>