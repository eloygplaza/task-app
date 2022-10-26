<!-- START TEMPLATE -->
<template>

    <div class="home-background">

        <div class="container mt-3">

            <div class="columns">
                
                <!-- formulario login -->
                <div v-if="!alreadyLogged" class="column is-12 is-desktop">
                    <h1 class="title is-1">Login</h1>
                    
                    <form>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="emailLogin" class="input" type="email" placeholder="Write your lovely email" required>
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
                                <input v-model="passwordLogin" class="input" type="password" placeholder="Write your best password" required>
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
                                <button type="submit" class="button is-link" @click.prevent="initLogin(emailLogin, passwordLogin)">Submit</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
                
            </div>

        </div>

    </div>

</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { login, logout, newTask } from '../api';
import { ref, watch, onMounted } from 'vue';
import { authStore } from '../store/auth';

const useAuthStore = authStore();
let alreadyLogged = ref(useAuthStore.isAuth);
//console.log(alreadyLogged.value);

onMounted(() => {
  //console.log(window.location.href.split("/"));
  if(window.location.href.split("/")[4] != 'login' && window.location.href.split("/")[4] != 'signup'){
    const app = document.querySelector("#app");
    //console.log(app);
    app.className += ' no-before';
  }
  else {
    const app = document.querySelector("#app");
    //console.log(app);
    app.className = '';
  }
});

// vigilamos el store de auth para que nos controle tema logins
watch(useAuthStore, () => {
    alreadyLogged.value = useAuthStore.isAuth;
});

// hace login supabase
const initLogin = async (emailLogin, passwordLogin) => {
// login supabase
const res = await login(emailLogin, passwordLogin);
    //console.log(res.data.user);
    // si no se hace bien el login dara error
    // guardar login store
    if(res.data.user != null) {
        alreadyLogged.value = true;
        useAuthStore.login(res.data.user.id, emailLogin, passwordLogin);
        // redirigir al home para que se vean las task del usuario loggeado
        const oldUrl = window.location.hostname;
        const port = location.port
        window.location.replace(`http://${oldUrl}:${port}/task-app/`);
    }
    else{
        alert("No se ha podido hacer login");
    }
}
</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->