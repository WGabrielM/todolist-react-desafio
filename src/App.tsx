import { ChangeEvent, FormEvent, useState } from "react";

import Post from "./components/Post/Post";
import EmptyTask from "./components/EmptyTask/EmptyTask";
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
    setTask([...task, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />

      <article className={style.todo}>
        <form onSubmit={handleCreateNewTask} className={style.formComment}>
          <textarea
            name="task"
            value={newTask}
            onChange={handleNewTaskChange}
            placeholder="Add a new task"
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Create
          </button>
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
        <EmptyTask />
      )}
    </>
  );
}

export default App;
