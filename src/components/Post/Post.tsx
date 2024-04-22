import style from "./Post.module.css";

export default function Post() {
  return (
    <article className={style.todo}>
      
      <form className={style.formComment}>
        <textarea name="comment" placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>

      <div>
        <p>Tarefas criadas: 0</p>
        <p>Concluídas: 0</p>
      </div>

      <div>
        <h2>Você ainda não tem tarefas cadastradas</h2>
      </div>
    </article>
  );
}
