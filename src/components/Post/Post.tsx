import style from "./Post.module.css";

export default function Post() {
  return (
    <div className={style.post}>
      <input type="radio" name="task" value="task" />
      <label>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <button title="Delete Task">
        <img src="/src/assets/trash.svg" alt="Trash" />
      </button>
    </div>
  );
}
