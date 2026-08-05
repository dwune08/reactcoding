/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*
import './App.css'

const App = () => {
  return (
    <strong>
      Hello, React~~!!
    </strong>
  )
};

export default App;
*/

// import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className = "App">
//       <Header />
//       <Body 
//         productName="노트북"
//         price={1500000}
//         quantity={2}
//         brand="삼성전자"
//       />
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

// const App = () => {
//   const BodyProps = {
//     name: "김철수",
//     age: 30,
//     location: "경기도 수원시 장안구",
//     job: "프로그래머",
//     favoriteFoods: ['피자', '햄버거', '떡볶이']
//   };

//   return (
//     <div className = "App">
//       <Header />
//       <Body {...BodyProps}/>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

// const ChildComponent = () => {
//   return <div>자식 컴포넌트에 전달</div>    
// };

// const App = () => {
//   return (
//     <div className = "App">
//       <Header />
//       <Body>
//         <ChildComponent />
//       </Body>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import MyComponent from "./components/MyComponent";

// const App = () => {
//   const person = {
//     name : "한진형",
//     age : 35,
//     email : "dwune@naver.com",
//     favoriteNumber : 23,
//     //wiseSaying : "이 또한 지나가리라.",
//     hobbyList : ["기타연주", "그림그리기", "영화관람"]
//   };
//   return (
//     <MyComponent {...person}>이 또한 지나가리라. </MyComponent>
//   );
// };
  
// import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className = "App">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import ItemMain from "./product/ItemMain";

const App = () => {
  return (
    <div className = "container mt-5">
      <ItemMain />
    </div>
  );
};

export default App;