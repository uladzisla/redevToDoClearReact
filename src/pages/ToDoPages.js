import InputToDo from "../Components/InputToDo/InputToDo";
import Task from "../Components/Task/Task";
import Tasks from "../Components/Tasks/Tasks";
import React, { useState } from "react";
import styles from "../pages/ToDo.module.css";
// const toDoDate = [];

const ToDoPages = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Первая задача" },
    { id: 2, title: "Вторая задача" },
    { id: 3, title: "Третья задача" },
  ]);
  console.log(tasks);
  return (
    <div className={styles.App}>
      <h1> Список дел на сегодня:</h1>
      <InputToDo tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default ToDoPages;
