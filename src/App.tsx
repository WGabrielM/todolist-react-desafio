import Header from "./components/Header/Header";

import "./App.module.css";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

function App() {
  return(
    <>
      <Header />

      <AddTask />
      <Task />
    </>
  );
}

export default App;
