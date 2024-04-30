import { ITask } from "../../App";
import { Check, Trash } from "@phosphor-icons/react";

import style from "./Post.module.css";

interface Props {
  data: ITask;
  // removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, status }: { id: number; status: boolean }) => void;
}

export default function Post({ data, toggleTaskStatus}: Props) {

  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, status: !data.isChecked });
  }

  function handleRemove() {}

  const checkboxCheckedClassname = data.isChecked
    ? style["checkbox-checked"]
    : style["checkbox-unchecked"];

  const paragraphCheckedClassname = data.isChecked ? style["text-checked"] : "";

  return (
    <div className={style.post}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" />
        <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
          {data.isChecked && <Check size={12} />}
        </span>

        <p className={`${style.text} ${paragraphCheckedClassname}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </label>

      <button onClick={handleRemove} title="Delete Task">
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
