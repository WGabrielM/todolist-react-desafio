import style from "./Post.module.css";

export default function Post() {
  return (
    <article className={style.todo}>

      <form className={style.formComment}>
        <textarea name="comment" placeholder="Add a new task" />
        <button>Create</button>
      </form>

      <div>
        <span>Created tasks: 0</span>
        <span>Completed: 0</span>
      </div>

      <div>
        <h2>You don't have any tasks registered yet</h2>
      </div>
    </article>
  );
}
