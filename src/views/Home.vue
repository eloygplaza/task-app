<!-- START TEMPLATE -->
<template>

        <div v-if="alreadyLogged" class="container mt-3">

            <div class="columns">

                <div class="column is-6 mx-auto">

                    <p class="title is-3">New Task</p>
                    <form>

                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="titleNewTask" class="input" type="text" placeholder="Write a title" required>
                                <span class="icon is-small is-left">
                                    <i class="fa-solid fa-font"></i>
                                </span>
                                <span class="icon is-small is-right">
                                </span>
                            </div>
                            <p class="help email"></p>
                        </div>

                        <div class="field">
                            <label class="label">Description</label>
                            <div class="control has-icons-left has-icons-right">
                                <textarea v-model="descriptionNewTask" class="input" type="text" placeholder="Write a description" required></textarea>
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
                                <button type="submit" class="button is-link" @click.prevent="initNewTask(useAuthStore.user.id, titleNewTask, descriptionNewTask)">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

            <div v-if="isLoaded" class="columns is-multiline">

                <div v-for="task in useTaskStore.tasks.data" class="column is-3 box">
                    <div class="is-flex is-justify-content-center is-flex-direction-column">
                        <textarea @focusout="initEditTask(task.id)" v-model="task.title" class="title titleCard is-6 taskCards" :style="task.done ? 'text-decoration: line-through;' : ''"></textarea>
                        <textarea @focusout="initEditTask(task.id)" v-model="task.description" class="descriptionCard is-6 taskCards" :style="task.done ? 'text-decoration: line-through;' : ''"></textarea>
                    </div>

                    <div class="is-flex is-justify-content-center">
                        <button class="button is-success is-outlined" @click="initMarkAsDone(task.id)">
                            <span class="icon is-small">
                                <i class="fa-solid fa-check"></i>
                            </span>
                        </button>
                        <button class="button is-info is-outlined">
                            <span class="icon is-small">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </span>
                        </button>
                        <button class="button is-danger is-outlined" @click="initDeleteTask(task.id)">
                            <span class="icon is-small">
                                <i class="fa-solid fa-trash-can"></i>
                            </span>
                        </button>
                    </div>
                </div>

            </div>

        </div>
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
import { newTask, getAllTasks, markAsDone, deleteTask } from '../api';
import { ref, watch, onMounted } from 'vue';
import { authStore } from '../store/auth';
import { taskStore } from '../store/task';

const useAuthStore = authStore();
const useTaskStore = taskStore();
const isLoaded = ref(false);
const alreadyLogged = ref(useAuthStore.isAuth);
let tasks = ref();

// vigilamos el store de auth para que nos controle tema logins
watch(useAuthStore, () => {
    alreadyLogged.value = useAuthStore.isAuth;
});

// vigilamos el store de task para que nos controle tareas
watch(useTaskStore, () => {
    useTaskStore.tasks.data = useTaskStore.tasks.data;
});

onMounted( async () => {
    loadTasks();
})

// cargamos las tasks de la base de datos
// las añadimos al store
// luego les damos la vuelta para que las ultimas task añadidas se vean primero
const loadTasks = async () => {
    tasks.value = await getAllTasks(useAuthStore.user.id);
    useTaskStore.tasks = tasks.value;
    useTaskStore.tasks.data.reverse();

    // añadimos eventos a los title y description de las tares para poder editarlas
    //addEvents();

    // marcamos que todo esta cargado y se puede visualizar
    isLoaded.value = true;
}

// añadir una nueva tarea
const initNewTask = async (userId, titleNewTask, descriptionNewTask) => {
    await newTask(userId, titleNewTask, descriptionNewTask);
    await useTaskStore.insertTask(userId, titleNewTask, descriptionNewTask);
}

// marcar como hecha una task
const initMarkAsDone = (taskId) => {
    useTaskStore.markAsDone(taskId);
    markAsDone(taskId);
}

// eliminar una tarea
const initDeleteTask = (taskId) => {
    useTaskStore.deleteTask(taskId);
    deleteTask(taskId);
}

const initEditTask = (taskId) => {
    console.log(taskId);
}


</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->