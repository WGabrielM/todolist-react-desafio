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
  const [checkedTasksCounter, setCheckedTasksCounter] = useState(0);

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

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Are you sure you want delete this task?")) {
      return;
    }

    const taskToRemove = tasks.find((task) => task.id === id);
    if (taskToRemove && taskToRemove.status) {
      setCheckedTasksCounter((count) => count - 1);
    }

    setTasks(filteredTasks);
  }

  function handleToggleTaskStatus(id: number, newStatus: boolean) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );

    setTasks(updatedTasks);

    if (newStatus) {
      setCheckedTasksCounter((count) => count + 1);
    } else {
      setCheckedTasksCounter((count) => count - 1);
    }
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
            Created tasks: <p>{tasks.length}</p>
          </span>
          <span>
            Completed: <p>{checkedTasksCounter}</p>
          </span>
        </div>
      </article>

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => {
            return (
              <Post
                key={task.id}
                id={task.id}
                status={task.status}
                text={task.text}
                onToggleStatus={handleToggleTaskStatus}
                removeTask={handleRemoveTask}
              />
            );
          })}
        </div>
      ) : (
        <EmptyTask />
      )}
    </>
  );
}

export default App;
