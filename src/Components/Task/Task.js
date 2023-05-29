import React, { useState } from "react";
import styles from "../../pages/ToDo.module.css";

const Task = ({ tasks, setTasks, item, id, removeTask }) => {
  const [text, SetText] = useState(item.title);
  const [isEdit, setIsEdit] = useState(false);
  const editNowTask = () => {
    setIsEdit(!isEdit);
  };

  const saveInput = (e) => {
    SetText(e.target.value);
  };

  const saveEdit = (id) => {
    const newFilteredArr = tasks.map((item) =>
      item.id === id ? { ...item, title: text } : item
    );
    console.log(text);
    setTasks(newFilteredArr);
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <>
          <input onChange={saveInput} value={text} />
          <button onClick={() => removeTask(item.id)}>удалить</button>
          <button onClick={() => saveEdit(item.id)}>сохранить изменения</button>
        </>
      ) : (
        <p className={styles.task}>
          {item.title}
          <button onClick={() => removeTask(item.id)}>удалить</button>
          <button onClick={() => editNowTask(item.id)}>редактировать</button>
        </p>
      )}
    </div>
  );
};
export default Task;
