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
});

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->