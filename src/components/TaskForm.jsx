import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm() {
  //각각의 스테이터스 관리
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  //객체로 관리
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  console.log(taskData.task, taskData.status);

  //함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <header className="app_header">
      <form>
        {/* 할일입력창 */}
        <input
          name="task"
          value={taskData.task}
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="할일을 입력해주세요."
        />
        <div className="task_form_bottom_line">
          {/* 태그부분 */}
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="REACT" />
          </div>
          <div>
            {/* 옵션버튼 */}
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
          </div>
          {/* 추가버튼 */}
          <div>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
