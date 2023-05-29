import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "../../pages/ToDo.module.css";

const Tasks = ({ tasks, setTasks }) => {
  const removeTask = (id) => {
    const filterArr = tasks.filter((item) => item.id != id);
    setTasks(filterArr);
  };

  return (
    <div>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            <Task
              item={item}
              setTasks={setTasks}
              tasks={tasks}
              removeTask={removeTask}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Tasks;
