import { useState } from "react";

import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
//이미지가져오기
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

function App() {
  const [tasks, setTasks] = useState([]); //task가 여러개 들어있는 배열
  return (
    <div className="app">
      {/* 헤더 */}
      <TaskForm setTasks={setTasks} />
      {/* 메인 */}
      <main className="app_main">
        <TaskColumn title="할 일" icon={todoIcon} tasks={tasks} status="todo" />
        <TaskColumn
          title="진행중"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="완 료" icon={doneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
}

export default App;
