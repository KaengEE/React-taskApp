import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import { useDrag } from "react-dnd";

import React from "react";

export default function TaskCard({ title, tags, status, index, handleDelete }) {
  //dnd
  const [{ isDragging }, drag] = useDrag({
    type: "TASK_CARD",
    item: { index, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <article
      className="task_card"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected={true} />
          ))}
        </div>
        <div className="task_delete">
          <img
            onClick={() => handleDelete(index)}
            className="delete_icon"
            src={deleteIcon}
            alt=""
          />
        </div>
      </div>
    </article>
  );
}
