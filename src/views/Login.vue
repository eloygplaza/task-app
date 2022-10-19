<!-- START TEMPLATE -->
<template>

    <div class="container mt-3">

        <div class="columns">
            
            <!-- formulario login -->
            <div v-if="!alreadyLogged" class="column 12 is-desktop">
                <h1 class="title is-1">Login</h1>
                
                <form>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="emailLogin" class="input" type="email" placeholder="Introduce tu mejor correo" required>
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <p class="help email"></p>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="emailPassword" class="input" type="password" placeholder="Introduce tu mejor contraseña" required>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <p class="help password"></p>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" class="button is-link" @click.prevent="initLogin(emailLogin, emailPassword)">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>

    </div>
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { login, logout, newTask } from '../api';
import { ref, watch } from 'vue';
import { authStore } from '../store/auth';

const useAuthStore = authStore();
const alreadyLogged = ref(useAuthStore.isAuth);
console.log(alreadyLogged.value);


const initLogin = async (emailLogin, emailPassword) => {
// login supabase
const res = await login(emailLogin, emailPassword);
console.log(res);
// guardar login store
if(res.data.user != 'undefined') {
    alreadyLogged.value = true;
    useAuthStore.login(res.data.user.id, emailLogin, emailPassword);
}
}

const initLogout = async () => {
logout();
}
</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->