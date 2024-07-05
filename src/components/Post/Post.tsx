import { Check, Trash } from "@phosphor-icons/react";

import style from "./Post.module.css";
import { useState } from "react";

export interface PostType {
  id: number;
  text: string;
  status: boolean;
  removeTask: (id: number) => void;
}

export default function Post({ id, status, text, removeTask }: PostType) {
  const [check, setCheck] = useState(status);

  function handleTaskToggle() {
    setCheck(!check)
  }

  function handleRemoveTask() {
    removeTask(id)
  }

  const checkboxCheckedClassname = check
    ? style["checkbox-checked"]
    : style["checkbox-unchecked"];

  const paragraphCheckedClassname = check ? style["text-checked"] : "";

  return (
    <div className={style.post}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" checked={check} />
        <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
          {status && <Check size={12} />}
        </span>

        <p className={`${style.text} ${paragraphCheckedClassname}`}>{text}</p>
      </label>

      <button onClick={handleRemoveTask} title="Delete Task">
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
