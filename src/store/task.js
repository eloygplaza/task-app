import { defineStore } from "pinia";

export const taskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  persist: [
    {
      paths: ["tasks"],
      storage: sessionStorage,
    },
  ],
  actions: {
    insertTask(userId, title, description) {
      const checkFirstTask =
        this.tasks.data.length == 0 ? 1 : this.tasks.data.at(0).id + 1;

      this.tasks.data.unshift({
        id: checkFirstTask,
        created_at: Date.now,
        user_id: userId,
        title: title,
        description: description,
        done: false,
      });
    },
    markAsDone(taskId) {
      this.tasks.data.find((el) => {
        if (el.id == taskId) {
          el.done = !el.done;
        }
      });
    },
    deleteTask(taskId) {
      const element = this.tasks.data.find((el) => el.id == taskId);
      this.tasks.data.splice(this.tasks.data.indexOf(element), 1);
    },
    updateTitle(taskId, title) {
      this.tasks.data.find((el) => {
        if (el.id == taskId) {
          el.title = title;
        }
      });
    },
    updateDescription(taskId, description) {
      this.tasks.data.find((el) => {
        if (el.id == taskId) {
          el.description = description;
        }
      });
    },
  },
});
