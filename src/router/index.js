import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/task-app/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/task-app/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/task-app/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/task-app/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// createWebHistory tiene una navegacion en formato 127.0.0.1/about
// createWebHashHistory tiene una anvegacion en formato 127.0.0.0#about
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
