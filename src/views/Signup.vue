<!-- START TEMPLATE -->
<template>
    
    <div class="home-background">

        <div class="container mt-3">

            <div class="columns">
                
                <div v-if="!alreadyLogged" class="column 12 is-desktop">
                    <h1 class="title is-1">Signup</h1>

                    <form>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="emailSignup" class="input" type="email" placeholder="Write your lovely email">
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
                                <input v-model="passwordSignup" class="input" type="password" placeholder="Write your best password">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right">
                                </span>
                            </div>
                            <p class="help password"></p>
                        </div>

                        <div class="field">
                            <label class="label">Confirm Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="passwordSignupConfirm" class="input" type="password" placeholder="Confirm your password">
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
                                <button type="submit" class="button is-link" @click.prevent="initSignup(emailSignup, passwordSignup, passwordSignupConfirm)">Submit</button>
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
import { signup } from '../api';
import { ref, onMounted } from 'vue';
import { authStore } from '../store/auth';

const useAuthStore = authStore();

const alreadyLogged = ref(useAuthStore.isAuth);

onMounted(() => {
  console.log(window.location.href.split("/"));
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

const initSignup = async (emailSignup, passwordSignup, passwordSignupConfirm) => {
    console.log(passwordSignupConfirm);
    if (typeof passwordSignup == 'undefined' && typeof passwordSignupConfirm == 'undefined') {
        alert("Password input is empty")
    }
    else if (passwordSignup === passwordSignupConfirm && typeof passwordSignup != 'undefined' && typeof passwordSignupConfirm != 'undefined') {
        // signup supabase
        const res = await signup(emailSignup, passwordSignup);
        console.log(res);
        // avisar de que revise el correo
        alert("¡We are almost there! please, go to your email inbox and confirm your email address");
    } else {
        alert("Passwords are not equal")
    }
}
</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->