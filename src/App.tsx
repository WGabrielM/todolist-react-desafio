import { useState } from "react";

import Post from "./components/Post/Post";
import Task from "./components/Task/Task";
import Header from "./components/Header/Header";
import EmptyList from "./components/EmptyList/EmptyList";

import "./App.module.css";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleToggleTask({ id, status }: { id: number; status: boolean }) {
    const changeTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isChecked: status };
      }

      return { ...task };
    });
    setTasks(changeTasks);
  }

  return (
    <>
      <Header />
      <EmptyList />
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
