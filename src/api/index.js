import { createClient } from "@supabase/supabase-js";

// variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// register in the system
export const signup = async (email, password) => {
  return await supabase.auth.signUp({
    email: email,
    password: password,
  });
};

// login to the system
export const login = async (email, password) => {
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
};

// create a new task
export const newTask = async (id, title, description) => {
  return await supabase.from("task").insert({
    user_id: id,
    title: title,
    description: description,
  });
};

// get all tasks from table 'task'
export const getAllTasks = async (userId) => {
  return await supabase
    .from("task")
    .select()
    .order("created_at", { ascending: "true" })
    .eq("user_id", userId);
};

// edit desired task providing task 'id'
export const updateRow = async (idTask) => {
  return await supabase
    .from("task")
    .update({ title: "editado" })
    .eq("id", idTask);
};

// logout from the system
export const logout = async () => {
  return await supabase.auth.signOut();
};

// mark a task as done
export const markAsDone = async (idTask) => {
  return await supabase.from("task").update({ done: true }).eq("id", idTask);
};

// delete a task
export const deleteTask = async (idTask) => {
  return await supabase.from("task").delete().eq("id", idTask);
};

// update title of a task
export const updateTitle = async (idTask, title) => {
  return await supabase.from("task").update({ title: title }).eq("id", idTask);
};

// update description of a task
export const updateDescription = async (idTask, description) => {
  return await supabase
    .from("task")
    .update({ description: description })
    .eq("id", idTask);
};
