<!-- START TEMPLATE -->
<template>

        <div class="container mt-3">

            <div class="columns">
                
                <div v-if="!alreadyLogged" class="column 12 is-desktop">
                    <h1 class="title is-1">Signup</h1>

                    <form>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="emailSignup" class="input" type="email" placeholder="Introduce tu mejor correo">
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
                                <input v-model="passwordSignup" class="input" type="password" placeholder="Introduce tu mejor contraseña">
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
                                <button type="submit" class="button is-link" @click.prevent="initSignup(emailSignup, passwordSignup)">Enviar</button>
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
import { signup } from '../api';
import { ref, watch } from 'vue';
import { authStore } from '../store/auth';

const useAuthStore = authStore();

const alreadyLogged = ref(useAuthStore.isAuth);

const initSignup = async (emailSignup, passwordSignup) => {
    // login supabase
    const res = await signup(emailSignup, passwordSignup);
    console.log(res);
    // avisar de que revise el correo
    alert("¡Ya falta poco! te acabamos de enviar un email para confirmar tu cuenta");
}
</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->