import { Check, Trash } from "@phosphor-icons/react";

import style from "./Post.module.css";
import { useState } from "react";

export interface PostType {
  text: string;
  status: boolean;
}

export default function Post({ status, text }: PostType) {
  const [check, setCheck] = useState(status);

  function handleTaskToggle() {
    setCheck(!check)
  }

  function handleRemove() {}

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

      <button onClick={handleRemove} title="Delete Task">
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
