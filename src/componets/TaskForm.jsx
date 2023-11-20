import "./TaskForm.css";

export default function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="할일을 입력해주세요."
        />
        <div className="task_form_bottom_line">
          {/* 태그부분 */}
          <div>
            <button className="tag">HTML</button>
            <button className="tag">CSS</button>
            <button className="tag">JavaScript</button>
            <button className="tag">React</button>
          </div>
          <div>
            {/* 옵션버튼 */}
            <select className="task_status">
              <option value="todo">할일</option>
              <option value="todo">진행중</option>
              <option value="todo">완료</option>
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
