import "./App.css";

function App() {
  return (
    <div className="app">
      {/* 헤더 */}
      <header className="app_header">Header Section</header>

      {/* 메인 */}
      <main className="app_main">
        <section className="task_column">section 1</section>
        <section className="task_column">section 2</section>
        <section className="task_column">section 3</section>
      </main>
    </div>
  );
}

export default App;
