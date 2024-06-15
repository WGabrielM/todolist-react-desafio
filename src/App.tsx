import { ChangeEvent, useState } from "react";

import Post, { PostType } from "./components/Post/Post";
import EmptyTask from "./components/EmptyTask/EmptyTask";
import Header from "./components/Header/Header";

import style from "./App.module.css";

const tasks: PostType[] = [
  {
    id: 1,
    status: false,
    text: "Study React until i get really really better",
  },
  {
    id: 2,
    status: false,
    text: "Learn NodeJS until i be a good backe end Node",
  },
];

function App() {
  const [newTask, setNewTask] = useState("");

  // function handleCreateNewTask(event: FormEvent) {
  //   event.preventDefault();
  //   setTask([...task, newTask]);
  //   setNewTask("");
  // }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />

      <article className={style.todo}>
        <form className={style.formComment}>
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

      {tasks.length > 1 ? (
        tasks.map((data) => {
          return <Post id={data.id} status={data.status} text={data.text} />;
        })
      ) : (
        <EmptyTask />
      )}
    </>
  );
}

export default App;
