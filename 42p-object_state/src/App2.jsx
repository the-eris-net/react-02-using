import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['밥 먹기', '공부하기']);

  const addTodo = () => {
    setTodos([...todos, '새로운 작업']);
    console.log(todos);
  };

  const removeFirst = () => {
    setTodos(todos.slice(1));
    console.log(todos);
  };

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>추가</button>
      <button onClick={removeFirst}>첫 번째 제거</button>
    </div>
  );
}

export default App;
