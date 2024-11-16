import { useState } from "react";
import "./App.css";

// 부모 컴포넌트
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const inputChange = (event) => {
    const value = event.target.value;
    setNewTask(value); 
    // console.log(value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const spliceTask = (index) => {
    const confirm = window.confirm('정말로 지우시겠습니까 ?');
    if(confirm) {
      const updateTasks = [...tasks];
      updateTasks.splice(index, 1);
      setTasks(updateTasks);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do 리스트</h1>
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="할 일을 입력하세요"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={inputChange}
              value={newTask}
            />
            <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              추가
            </button>
          </div>
          <ul>
            {/* li는 따로 TodoItem이라는 자식 컴포넌트를 만들어서 관리해주세요. */
              tasks.map((task, index)=> (
                <TodoItem 
                  key = {task}
                  task = {task}
                  index = {index}
                  spliceTask = {spliceTask}

                />
              ))
            }
            
          </ul>
        </div>
      </div>
    </>
  );
}

// 자식 컴포넌트
function TodoItem({task, index, spliceTask}) {
  return (
  <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
    <span>{task}</span>
    <button onClick={() => spliceTask(index)} className="text-red-500 hover:text-red-700">삭제</button>
  </li>
  )
}

export default App;
