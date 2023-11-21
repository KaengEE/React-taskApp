import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm({ setTasks }) {
  //각각의 스테이터스 관리
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  //객체로 관리
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  //클릭함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //태그선택함수
  //선택한 태그를 tags에 입력, 이미 있을 경우 삭제
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag); //제거
      setTaskData((prev) => {
        return { ...prev, tags: filterTags }; //삭제하고 남은 tags
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] }; //tag 추가
      });
    }
  };

  //선택되었으면 true
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  //submit함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData); //콘솔
    setTasks((prev) => {
      return [...prev, taskData]; //할일 1개
    });
    //처음처럼 taskData 리셋
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
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
            <Tag
              selectTag={selectTag}
              selected={checkTag("HTML")}
              tagName="HTML"
            />
            <Tag
              selectTag={selectTag}
              tagName="CSS"
              selected={checkTag("CSS")}
            />
            <Tag
              selectTag={selectTag}
              tagName="JavaScript"
              selected={checkTag("JavaScript")}
            />
            <Tag
              selectTag={selectTag}
              tagName="REACT"
              selected={checkTag("REACT")}
            />
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
