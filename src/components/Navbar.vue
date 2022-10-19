<!-- START TEMPLATE -->
<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item">
            Home
        </a>

        <a class="navbar-item">
            Documentation
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            More
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item">
                About
            </a>
            <a class="navbar-item">
                Jobs
            </a>
            <a class="navbar-item">
                Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">

                    <RouterLink v-if="!alreadyLogged" class="button is-primary" :to="{name: 'signup'}">
                        <strong>Sign up</strong>
                    </RouterLink>

                    <RouterLink v-if="!alreadyLogged" class="button is-light" :to="{name: 'login'}">
                        <strong>Log in</strong>
                    </RouterLink>

                    <a v-if="alreadyLogged" class="button is-light">
                        My Account
                    </a>

                </div>
            </div>
        </div>
    </div>
    </nav>
    
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { authStore } from '../store/auth';
import { ref } from 'vue';

const useAuthStore = authStore();
const alreadyLogged = ref(useAuthStore.isAuth);
console.log(alreadyLogged.value);

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->