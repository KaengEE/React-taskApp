import TaskCard from "./TaskCard";
import "./TaskColumn.css";
//dnd
import { useDrop } from "react-dnd";

//rfc 단축키
import React from "react";

const TaskColumn = ({ title, icon, tasks, status, handleDelete, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK_CARD",
    drop: (item) => onDrop(item.index, item.status, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section className="task_column" ref={drop}>
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

      {isOver && <p>여기에 놓아주세요</p>}
    </section>
  );
};

export default TaskColumn;
