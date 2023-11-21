import { useEffect, useState } from "react";
//dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
//이미지가져오기
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const saveTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []); //task가 여러개 들어있는 배열

  //드래그앤드랍
  const handleDrop = (cardIndex, sourceStatus, targetStatus) => {
    // 현재 상태 복사
    const updatedTasks = [...tasks];
    // 해당 카드의 상태 변경
    updatedTasks[cardIndex].status = targetStatus;
    //로컬 스토리지에 저장
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // 상태 업데이트
    setTasks(updatedTasks);
  };

  //삭제 함수
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  //로컬에 저장
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //객체를 문자열로 변환
  }, [tasks]);

  return (
    <DndProvider backend={TouchBackend}>
      <div className="app">
        {/* 헤더 */}
        <TaskForm setTasks={setTasks} />
        {/* 메인 */}
        <main className="app_main">
          <TaskColumn
            title="할 일"
            icon={todoIcon}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
            onDrop={handleDrop} // onDrop 함수 전달
          />
          <TaskColumn
            title="진행중"
            icon={doingIcon}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
            onDrop={handleDrop} // onDrop 함수 전달
          />
          <TaskColumn
            title="완 료"
            icon={doneIcon}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
            onDrop={handleDrop} // onDrop 함수 전달
          />
        </main>
        {/* 푸터 */}
        <footer className="app_footer">
          <div className="footer_text">
            <div className="row">
              <p>React로 만든 Task App</p>
              <p>Copyright(C) 2023.KaengEE.All rights reserved.</p>
              <p>
                <a href="https://github.com/KaengEE/React-taskApp">
                  KaengEE GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </DndProvider>
  );
}

export default App;
