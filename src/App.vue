<!-- START TEMPLATE -->
<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <Footer></Footer>
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { onMounted } from 'vue';
import { login, newTask } from './api';
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

onMounted(async () => {
  //registro();
  //const id = await login('bewopil@gmail.com', '12345678');
  //console.log(id.data.user.id);
  //newTask(id.data.user.id,'hola','caracola');
  console.log(window.location.href.split("/"));
  if(window.location.href.split("/")[4] != 'login' && window.location.href.split("/")[4] != 'signup'){
    const app = document.querySelector("#app");
    console.log(app);
    app.className += ' no-before';
  }
  else {
    const app = document.querySelector("#app");
    console.log(app);
    app.className = '';
  }
});


</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->