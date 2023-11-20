import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

import React from "react";

export default function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">샘플 내용입니다.</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="task_delete">
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
}
