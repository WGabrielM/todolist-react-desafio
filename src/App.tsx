import { ChangeEvent, FormEvent, useState } from "react";

import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import EmptyTask from "./components/EmptyTask/EmptyTask";

import style from "./App.module.css";

export interface MyTaskData {
  id: number;
  text: string;
  status: boolean;
}

function App() {
  const [tasks, setTasks] = useState<MyTaskData[]>([]);
  const [value, setValue] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: MyTaskData = {
      id: new Date().getTime(),
      text: value,
      status: false,
    };

    setTasks((state) => [...state, newTask]);
    setValue("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  const isNewTaskEmpty = value.length === 0;

  return (
    <>
      <Header />

      <article className={style.todo}>
        <form onSubmit={handleCreateNewTask} className={style.formComment}>
          <textarea
            name="task"
            value={value}
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
        <div>
          {tasks.map((task) => {
            console.log(task);
            return <Post key={task.id} status={task.status} text={task.text} />;
          })}
        </div>
      ) : (
        <EmptyTask />
      )}
    </>
  );
}

export default App;
