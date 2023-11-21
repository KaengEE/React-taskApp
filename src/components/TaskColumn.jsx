import TaskCard from "./TaskCard";
import "./TaskColumn.css";

//rfc 단축키
import React from "react";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>

      {/* status에 따라 분류 */}
      {tasks.length > 0
        ? tasks.map(
            (task, index) =>
              task.status === status && (
                <TaskCard
                  index={index}
                  handleDelete={handleDelete}
                  key={index}
                  title={task.task}
                  tags={task.tags}
                />
              )
          )
        : null}
    </section>
  );
}
