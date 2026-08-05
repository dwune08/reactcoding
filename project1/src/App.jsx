// import './App.css';
// import { useState } from 'react';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleSetCount = (value) => {
//     setCount(count+value);
//   };

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>
//         <section>
//           <Viewer count={count}/>
//         </section>
//         <section>
//           <Controller handleSetCount={handleSetCount}/>
//         </section>
//     </div>
//   );
// };

// export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleSetCount = (value) => {
//     setCount(count+value);
//   };

//   useEffect( () => {
//     console.log("count 업데이트 : ", count);
//   }, [count]);

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>
//         <section>
//           <Viewer count={count}/>
//         </section>
//         <section>
//           <Controller handleSetCount={handleSetCount}/>
//         </section>
//     </div>
//   );
// };

// export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleSetCount = (value) => {
//     setCount(count+value);
//   };

//   const handleSetText = (e) => {
//     setText(e.target.value);
//   };

//   // useEffect(() => { ... }, [a, b]);
//   // 컴포넌트가 처음 마운트될 때 한 번 실행되고,
//   // 이후에는 a 또는 b의 값이 변경될 때마다 콜백 함수가 실행된다.
//   useEffect( () => {
//     console.log("count 업데이트 : ", count, text);
//   }, [count, text]);

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>
//       <section>
//         <input value={text} onChange={handleSetText}/>
//       </section>
//         <section>
//           <Viewer count={count}/>
//         </section>
//         <section>
//           <Controller handleSetCount={handleSetCount}/>
//         </section>
//     </div>
//   );
// };

// export default App;


// import './App.css';
// import { useEffect, useState } from 'react';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSetCount = (value) => {
//     setCount(count+value);
//   };

//   const handleSetText = (e) => {
//     setText(e.target.value);
//   };

//   const handleSetMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   // useEffect(() => { ... });
//   // 의존성 배열을 생략하면 컴포넌트가 처음 마운트된 후 한번 실행되고,
//   // 이후에는 컴포넌트가 다시 렌더링될 때마다 콜백 함수가 실행된다.
//   useEffect( () => {
//     console.log('상태 업데이트 : ', count, text, message);
//   });

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>

//       <section>
//         <input value={text} onChange={handleSetText} placeholder="텍스트 입력" />
//       </section>
//       <section>
//         <input value={message} onChange={handleSetMessage} placeholder="메시지 입력" />
//       </section>
//       <section>
//         <Viewer count={count}/>
//       </section>
//       <section>
//         <Controller handleSetCount={handleSetCount}/>
//       </section>
//     </div>
//   );
// };

// export default App;



// import './App.css';
// import { useEffect, useState } from 'react';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   const handleSetCount = (value) => {
//     setCount(count+value);
//   };

//   const handleSetText = (e) => {
//     setText(e.target.value);
//   };

//   // useEffect(() => { ... }, []) 빈 배열 -> 처음 마운트될 때 한번만 실행
//   useEffect( () => {
//     console.log('컴포넌트 마운트');
//   }, []);

//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>

//       <section>
//         <input value={text} onChange={handleSetText} />
//       </section>
//       <section>
//         <Viewer count={count}/>
//       </section>
//       <section>
//         <Controller handleSetCount={handleSetCount}/>
//       </section>
//     </div>
//   );
// };

// export default App;


import './App.css';
import { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleSetCount = (value) => {
    setCount(count+value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
};

export default App;