import { useState } from "react";
import "./App.css";
/*
  [ 리액트 To-Do리스트 ]

  1. 할 일 목록 배열 state를 만들어주세요.(tasks)

  2. input의 value값을 받아올 state를 만들어주세요.(newTask)

  3. onChange 이벤트를 사용하여
  input의 입력값이 변경되면 그 변경된 입력값을 newTask에 넣어주세요.

  4. onClick이벤트를 사용하여
  [추가] 버튼을 클릭하면 입력된 값을 tasks 배열에 추가해 주세요.

   

  5. tasks 배열을 map()을 사용해 반복하면서 TodoItem 컴포넌트를 렌더링해 주세요. key 속성으로 index 값을 전달해 주세요.

  6. 자식 컴포넌트는 task라는 props를 받아서 렌더링하고, 삭제 버튼을 클릭하면 부모로부터 받은 onRemove 함수를 호출해 주세요.
  
*/
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // '추가' 버튼을 클릭할 때 호출되는 함수
  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // 리스트 항목을 클릭했을 때 해당 항목을 삭제하는 함수
  const handleRemoveTask = (index) => {
    const confirm = window.confirm("정말로 지우겠습니까?");
    if (confirm) {
      // const updatedTasks = tasks.filter((_, i) => i !== index);
      // setTasks(updatedTasks);
      const updatedTasks = [...tasks]; // 기존 배열을 복사
      updatedTasks.splice(index, 1); // index 위치에서 1개의 항목 제거
      setTasks(updatedTasks); // 새로운 배열로 상태 업데이트
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do 리스트</h1>
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="할 일을 입력하세요"
              value={newTask}
              onChange={handleInputChange}
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
              추가
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <TodoItem
                key={index}
                index={index}
                task={task}
                onRemove={handleRemoveTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// 개별 할 일을 렌더링하는 자식 컴포넌트
function TodoItem({ task, index, onRemove }) {
  return (
    <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
      <span>{task}</span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onRemove(index)}
      >
        삭제
      </button>
    </li>
  );
}

export default App;
