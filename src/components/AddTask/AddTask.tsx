import { FormEvent, useState } from "react";
import style from "./AddTask.module.css";

export default function AddTask() {
  const [task, setTask] = useState(["Code"]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTask([...task, newTask])
    setNewTask("")
  }
  console.log(handleCreateNewTask);
  

  return (
    <article className={style.todo}>

      <form onSubmit={handleCreateNewTask} className={style.formComment}>
        <textarea name="task" value={newTask} placeholder="Add a new task" />
        <button>Create</button>
      </form>

      <div className={style.infoTasks}>
        <span>Created tasks: <p>0</p></span>
        <span>Completed: <p>0</p></span>
      </div>
    </article>
  );
}