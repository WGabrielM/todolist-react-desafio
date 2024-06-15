import { FormEvent } from "react";
import { Check, Trash } from "@phosphor-icons/react";

import style from "./Post.module.css";

export interface PostType {
  id: number;
  status: boolean;
  text: string;
}

export default function Post({ id, status, text }: PostType) {

  function handleTaskToggle() {}

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
  }

  function handleRemove() {}

  const checkboxCheckedClassname = status
    ? style["checkbox-checked"]
    : style["checkbox-unchecked"];

  const paragraphCheckedClassname = status ? style["text-checked"] : "";

  return (
    <div className={style.post}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" />
        <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
          {status && <Check size={12} />}
        </span>

        <p className={`${style.text} ${paragraphCheckedClassname}`}>{text}</p>
      </label>

      <button onClick={handleRemove} title="Delete Task">
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
