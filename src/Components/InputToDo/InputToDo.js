import React, { useState } from "react";
import styles from "../../pages/ToDo.module.css";

const InputToDo = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const readTask = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };
  const addTask = () => {
    console.log(tasks);
    setTasks(() => {
      return [
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
        },
      ];
    });
    setNewTask("");
  };
  return (
    <div className={`${styles["task-input"]}`}>
      <input onChange={readTask} value={newTask} />
      <button onClick={addTask}>введите новое дело</button>
    </div>
  );
};
export default InputToDo;
