import style from "./AddTask.module.css";

export default function AddTask() {
  return (
    <article className={style.todo}>

      <form className={style.formComment}>
        <textarea name="comment" placeholder="Add a new task" />
        <button>Create</button>
      </form>

      <div className={style.infoTasks}>
        <span>Created tasks: <p>0</p></span>
        <span>Completed: <p>0</p></span>
      </div>
    </article>
  );
}