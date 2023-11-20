import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
//이미지가져오기
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

function App() {
  return (
    <div className="app">
      {/* 헤더 */}
      <TaskForm />
      {/* 메인 */}
      <main className="app_main">
        <TaskColumn title="할 일" icon={todoIcon} />
        <TaskColumn title="진행중" icon={doingIcon} />
        <TaskColumn title="완 료" icon={doneIcon} />
      </main>
    </div>
  );
}

export default App;
