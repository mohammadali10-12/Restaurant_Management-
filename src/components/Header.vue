<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-4">
                <li class="nav-item active fs-5 fw-bold">
                    <router-Link to="/" class="nav-link " href="#">Home <span class="sr-only"></span></router-Link>
                </li>
                <li class="nav-item fs-5 fw-bold">
                    <router-Link to="Add" class="nav-link" href="#">Add Restaurant</router-Link>
                </li>
                <!-- <li class="nav-item fs-5 fw-bold">
                    <router-Link to="Update" class="nav-link" href="#">Update Restaurant</router-Link>
                </li> -->

            </ul>

        </div>
        <div class=" my-2 mx-5 my-lg-0 ">
            <ul class=" navbar-nav mr-4">
                <li class="nav-item fs-5 fw-bold">
                    <a @click="logout" class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name: "HeaderComp",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'LoginComp' });
        }
    },
    components: { RouterLink }
}

</script>

<style></style>