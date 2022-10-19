import { defineStore } from "pinia";

export const authStore = defineStore("store", {
  state: () => ({
    isAuth: false,
    user: {
      id: "",
      email: "",
      pasword: "",
    },
  }),
  persist: [
    {
      paths: ["isAuth", "user.id"],
      storage: sessionStorage,
    },
  ],
  actions: {
    login(id, email, password) {
      this.isAuth = !this.isAuth;
      this.user.id = id;
      this.user.email = email;
      this.user.password = password;
    },
    logout() {
      this.isAuth = !this.isAuth;
      this.user.email = "";
      this.user.password = "";
    },
  },
});
