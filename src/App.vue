<!-- START TEMPLATE -->
<template>
  <h1>Hola</h1>
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { onMounted } from 'vue';
import {login, newTask} from './api';

onMounted(async () => {
  //registro();
  const id = await login();
  console.log(id.data.user.id);
  newTask(id.data.user.id,'hola','caracola');
});


</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->