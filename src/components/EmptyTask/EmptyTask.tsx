import style from "./EmptyTask.module.css";

export default function Task() {
  return (
    <div className={style.task}>
      <div className={style.notRegistered}>
        <img src="/src/assets/clipboard.svg" alt="" />
        <span>You don't have any tasks registered yet</span>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}
