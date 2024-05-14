import { FormEvent, useState } from "react";

import Post from "./components/Post/Post";
import Task from "./components/Task/Task";
import Header from "./components/Header/Header";

import style from "./App.module.css";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState(["Code"]);
  const [newTask, setNewTask] = useState("");

  function handleToggleTask({ id, status }: { id: number; status: boolean }) {
    const changeTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isChecked: status };
      }

      return { ...task };
    });
    setTasks(changeTasks);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTask([...task, newTask])
    setNewTask("")
  }
  console.log(handleCreateNewTask);

  return (
    <>
      <Header />

      <article className={style.todo}>
        <form onSubmit={handleCreateNewTask} className={style.formComment}>
          <textarea name="task" value={newTask} placeholder="Add a new task" />
          <button>Create</button>
        </form>

        <div className={style.infoTasks}>
          <span>
            Created tasks: <p>0</p>
          </span>
          <span>
            Completed: <p>0</p>
          </span>
        </div>
      </article>

      {tasks.length > 0 ? (
        tasks.map((task) => {
          <Post data={task} toggleTaskStatus={handleToggleTask} />;
        })
      ) : (
        <Task />
      )}
    </>
  );
}

export default App;
