// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import './App.css';
// import TestComponent from './example/TestComponent';

// const App = () => {
//   return (
//     <div className='App'>
//       <TestComponent />
//     </div>
//   );
// };

// export default App;


// import { useState, useRef } from "react";
// import './App.css';
// import Header from './components/Header';
// import TodoEditor from './components/TodoEditor';
// import TodoList from './components/TodoList';

// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React 공부하기",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "빨래 널기",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "노래 연습하기",
//     createdDate: new Date().getTime(),
//   },
// ];

// const App = () => {
//   const [todo, setTodo]=useState(mockTodo);
//   const idRef=useRef(3);

//   const onCreate = (content) => {
//     const newItem = {
//       id: idRef.current,
//       content,
//       isDone:false,
//       createdDate: new Date().getTime(),
//     };
//     setTodo([...todo, newItem]);
//     idRef.current += 1;
//   };

//   const onUpdate = (targetId) => {
//     setTodo(
//       todo.map((it) =>
//         it.id === targetId?{...it, isDone: !it.isDone } : it
//       )
//     );
//   };

//   const onDelete = (targetId) => {
//     setTodo((todo) => 
//       todo.filter((item) => item.id !== targetId)
//     );
//   };

//   return (
//     <div className='App'>
//       <Header />
//       <TodoEditor onCreate={onCreate}/>
//       <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
//     </div>
//   );
// };

// export default App;


import { useReducer, useRef } from "react";
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import todoReducer from "./reducers/todoReducer";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

const App = () => {
  const [todo, dispatch]=useReducer(todoReducer, mockTodo);
  const idRef=useRef(3);

  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id: idRef.current,
        content,
        isDone:false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    });
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
};

export default App;

