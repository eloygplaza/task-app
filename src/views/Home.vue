<!-- START TEMPLATE -->
<template>

        <div v-if="!alreadyLogged" class="home-background is-flex is-align-items-center is-flex-direction-column">

            <div class="columns">

                <div class="column is-12 mt-3">
                    <p class="title is-2 is-yellow is-warning">Boost productivity with Posty</p>
                    <p>The secure post-it sharing and productivity solution that employees and IT admins trust</p>
                    <div class="is-flex is-align-items-center ">
                        <RouterLink v-if="!alreadyLogged" class="button is-warning" :to="{name: 'signup'}">
                            <strong>Sign up</strong>
                        </RouterLink>

                        <RouterLink v-if="!alreadyLogged" class="button is-light" :to="{name: 'login'}">
                            <strong>Log in</strong>
                        </RouterLink>
                    </div>

                </div>
            </div>
            

        </div>

        <div class="container mt-3">

            <div class="columns">

                <div v-if="alreadyLogged" class="column is-6 mx-auto">

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
                                <button type="submit" class="button is-link" @click.prevent="initNewTask(useAuthStore.user.id, titleNewTask, descriptionNewTask)">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            
            </div>

            <div v-if="isLoaded" class="columns is-multiline">

                <div v-for="task in useTaskStore.tasks.data" class="column is-3 box">
                    <div class="is-flex is-justify-content-center is-flex-direction-column">
                        <textarea @focusout="initEditTaskTitle(task.id, task.title)" v-model="task.title" class="title titleCard is-6 taskCards" :style="task.done ? 'text-decoration: line-through;' : ''"></textarea>
                        <textarea @focusout="initEditTaskDescription(task.id, task.description)" v-model="task.description" class="descriptionCard is-6 taskCards" :style="task.done ? 'text-decoration: line-through;' : ''"></textarea>
                    </div>

                    <div class="is-flex is-justify-content-center">
                        <button class="button is-success is-outlined" @click="initMarkAsDone(task.id)">
                            <span class="icon is-small">
                                <i class="fa-solid fa-check"></i>
                            </span>
                        </button>
                        <!-- TODO crear un estilo css para que al hacer click en borrar la task se absorva en direccion a la basura -->
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
import { newTask, getAllTasks, markAsDone, deleteTask, updateTitle, updateDescription } from '../api';
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

    // marcamos que todo esta cargado y se puede visualizar
    isLoaded.value = true;
}

// añadir una nueva tarea
const initNewTask = async (userId, titleNewTask, descriptionNewTask) => {
    await useTaskStore.insertTask(userId, titleNewTask, descriptionNewTask);
    await newTask(userId, titleNewTask, descriptionNewTask);
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

// update title of a task
const initEditTaskTitle = (taskId, title) => {
    useTaskStore.updateTitle(taskId, title);
    updateTitle(taskId, title);
    console.log(taskId);
}

// update description of a task
const initEditTaskDescription = (taskId, description) => {
    useTaskStore.updateDescription(taskId, description);
    updateDescription(taskId, description);
    console.log(taskId);
}

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->