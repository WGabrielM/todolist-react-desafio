import { useState } from "react";
import style from "./Task.module.css";
import Post from "../Post/Post";

export default function Task() {
  const [have] = useState(true);
  return (
    <>
      {have ? (
       <Post />
      ) : (
        <div className={style.task}>
          <div className={style.notRegistered}>
            <img src="/src/assets/clipboard.svg" alt="" />
            <span>You don't have any tasks registered yet</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </>
  );
}
