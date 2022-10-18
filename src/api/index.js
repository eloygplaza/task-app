import { createClient } from "@supabase/supabase-js";

// variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// register in the system
export const signup = async () => {
  return await supabase.auth.signUp({
    email: "bewopil@gmail.com",
    password: "12345678",
  });
};

// login to the system
export const login = async () => {
  return await supabase.auth.signInWithPassword({
    email: "bewopil@gmail.com",
    password: "12345678",
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
export const getAllTask = async () => {
  return await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: "false" });
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
