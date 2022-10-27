<!-- START TEMPLATE -->
<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink class="navbar-item" :to="{name: 'home'}">
                <img src="../assets/logo-posty.png" alt="logo-home">
            </RouterLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <!-- TODO MODO OSCURO -->
        <div id="navbarBasicExample" class="navbar-menu">

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">

                        <RouterLink v-if="!alreadyLogged" class="button is-warning" :to="{name: 'signup'}">
                            <strong>Sign up</strong>
                        </RouterLink>

                        <RouterLink v-if="!alreadyLogged" class="button is-light" :to="{name: 'login'}">
                            <strong>Log in</strong>
                        </RouterLink>

                        <RouterLink v-if="alreadyLogged" class="button is-light" :to="{name: 'profile'}">
                            <strong>My Account</strong>
                        </RouterLink>

                        <button v-if="alreadyLogged" class="button is-danger" @click="initLogout">Log out</button>

                    </div>
                </div>
            </div>
        </div>
    </nav>
    
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { logout } from '../api';
import { authStore } from '../store/auth';
import { ref, watch } from 'vue';

const useAuthStore = authStore();
let alreadyLogged = ref(useAuthStore.isAuth);
//console.log("estoy logeado: " + alreadyLogged.value);

// mirar la variable de login para mostrar los botones correctos en el navbar
watch(useAuthStore, () => {
    alreadyLogged.value = useAuthStore.isAuth;
});

const initLogout = () => {
    useAuthStore.logout();
    logout();
}

// activar navbar reactivo en mobile + tablet
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

    });
    });

});

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->