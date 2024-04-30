import style from "./Task.module.css";

export default function Task() {
  return (
    <div className={style.task}>
      <div className={style.notRegistered}>
        <img src="/src/assets/clipboard.svg" alt="" />
        <span>You don't have any tasks registered yet</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
