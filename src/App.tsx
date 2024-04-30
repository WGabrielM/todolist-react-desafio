import Header from "./components/Header/Header";

import { useState } from "react";
import "./App.module.css";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}


function App() {
  const [tasks] = useState<ITask[]>([]);
  return (
    <>
      <Header />

      <AddTask />
      <Task data={tasks} />
    </>
  );
}

export default App;
