/*
const Body = () => {
   return (
      <div>
         <h1>Body</h1>
      </div>
   );
};

export default Body;
*/

/*
const Body = () => {
   const number = 1;
   return (
      <div>
         <h1>Body</h1>
         <h2>상수 number의 값: {number}</h2>
      </div>
   );
};

export default Body; */

/*
const Body = () => {
   const obj = {
      number: 1,
      data: "리액트"
   }

   return (
      <div>
         <h1>Body</h1>
         <h2>number: {obj.number}</h2>
         <h2>data: {obj.data}</h2>
      </div>
   );
};

export default Body;
*/

/*
// [요구사항 1]
const Body = () => {
   const name = "한진형";
   const address = "서울 강서구 공항동";
   const phoneNumber = "010-6756-2684"

   return (
      <div>
         <h1>Body</h1>
         <h2>이름: {name}</h2>
         <h2>주소: {address}</h2>
         <h2>전화번호: {phoneNumber}</h2>
      </div>
   );
};

export default Body;
*/
/*
const Body = () => {
   const number = 17;

   return (
      <>
         <h1>
            {number}은(는){number%2===0 ? "짝수":"홀수"}
         </h1>
      </>
   )
}

export default Body;
*/
/*
const Body = () => {
   const number = 8;

   if (number % 2 === 0) {
      return <div>{number}은(는) 짝수입니다.</div>
   }

   return <div>{number}은(는) 홀수입니다.</div>
};

export default Body;
*/

// const Body = () => {
// // const title = '리액트 연습';

//    return (
//       <>
//          {/* JSX 한 줄 주석 */}

//          {/*
//          <div className="react">
//          {title}
//          </div>
//          */}

//          <br />

//          <label>
//             이름
//             <input type="text" />
//          </label>
//          <br />

//          <label>
//             나이
//             <input
//             type="number" // 시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다
//                />
//          </label>
//       </>
//    );
// };

// export default Body;

/*
const Body = () => {
   const name = "리액트";

   // 스타일 객체 선언
   const style = {
      backgroundColor : 'black',
      color : 'aqua',
      fontSize : '48px',
      fontWeight : 'bold',
      padding : 16,
      marginBottom: 15
   };

   return (
      <>
         <div style={style}>
            {name}
         </div>

         <div style={
            {
               backgroundColor : 'pink',
               color : 'black',
               fontSize : '48px',
               fontWeight : 'bold',
               padding : 16
            }
         }>
            {name}
         </div>
      </>
   );
}
export default Body;
*/
/*
import './Body.css';

const Body = () => {
   return (
      <div className='body'>
      <h1>Body</h1>
      </div>
   );
};

export default Body;
*/
// [요구사항 2]

// const Body = () => {

//    const fruits = ["사과", "키위", "딸기", "메론"];
//    const [fruit1, fruit2, fruit3, fruit4] = fruits;

//    return (
//       <>
//          첫번째 과일: {fruit1}<br />
//          두번째 과일: {fruit2}<br />
//          세번째 과일: {fruit3}<br />
//          네번째 과일: {fruit4}
//       </>
//    );
// };

// export default Body;

// import './Body.css';

// const Body = (props) => {
   
//    return (
//       <div>
//          <h3>[정보 출력]</h3>
//          <p>
//             {props.name}님은
//             나이는 {props.age}이고
//             {props.address}에 거주합니다.
//          </p>
//       </div>
//    );
// }

// export default Body;

// import './Body.css';

// const Body = (props) => {
// const {productName, price, quantity, brand} = props;
//    return (
//       <main>
//          <p>상품명: {productName}</p>
//          <p>가격: {price.toLocaleString()}원</p>
//          <p>수량: {quantity}개</p>
//          <p>브랜드: {brand}</p>
//       </main>
//    );
// }

// export default Body;

// import './Body.css';

// const Body = ({productName, price, quantity, brand}) => {
//    return (
//       <main>
//          <p>상품명: {productName}</p>
//          <p>가격: {price.toLocaleString()}원</p>
//          <p>수량: {quantity}개</p>
//          <p>브랜드: {brand}</p>
//       </main>
//    );
// }

// export default Body;

// import './Body.css';

// const Body = ({name, age, location, job, favoriteFoods}) => {
//    return (
//       <main>
//          <h3>[정보 출력]</h3>
//          <p>{name}님의 나이는 {age}세입니다.</p>
//          <p>{location}에 거주하며 직업은 {job}입니다.</p>
//          <p>{favoriteFoods.length}가지 음식을 좋아합니다.</p>
//          <ul className="food-list">
//             {favoriteFoods.map((food, index) => (
//                <li key={index}>{food}</li>
//             ))}
//          </ul>
//       </main>
//    );
// };

// export default Body;

// import './Body.css';

// const Body = ({ children}) => {
//    return (
//       <div className="body">
//          {children}
//       </div>
//    );
// };

// export default Body;

// import './Body.css';

// const Body = () => {
//    const handleOnClick = (e) => {
//       console.log(e.target.name, e.target.id);

//       if (e.target.id === "btn1") {
//          e.target.style.backgroundColor = "lightgreen";
//       } else if (e.target.id === "btn2") {
//          e.target.style.backgroundColor = "yellow";
//       }
//    };

//    return (
//       <div>
//          <button type="button" name="button1" id="btn1" onClick={handleOnClick}>
//             첫 번째 클릭하세요
//          </button>
//          <button type="button" name="button2" id="btn2" onClick={handleOnClick}>
//             두 번째 클릭하세요
//          </button>
//       </div>
//    );
// };

// export default Body;
// import { useState } from "react";

// const Body = () => {
//    const [count, setCount] = useState(0);

//    const onIncrease = () => {
//       setCount(count+1);
//    };

//    return (
//       <div>
//          <h2>{count}</h2>
//          <button onClick={onIncrease}>
//             +
//          </button>
//       </div>
//    );
// };

// export default Body;

// import { useState } from "react";

// const Body = () => {
//    const [text, setText] = useState("");

//    const handleOnChange = (e) => {
//       setText(e.target.value);
//    };
//    return (
//       <div>
//          <input value={text} onChange={handleOnChange} />
//          <div>{text}</div>
//       </div>
//    );
// };

// export default Body;

// import { useState } from "react";

// const Body = () => {
//    const [date, setDate] = useState("");

//    const handleOnChange = (e) => {
//       console.log("변경된 값: ", e.target.value);
//       setDate(e.target.value);
//    };

//    return (
//       <div>
//          <input type="date" value={date} onChange={handleOnChange} />
//          <div>선택날짜: {date}</div>
//       </div>
//    );
// };

// export default Body;

// import { useState } from "react";

// const Body = () => {
//    const [option, setOption] = useState("");

//    const handleOnChange = (e) => {
//       console.log("변경된 값: ", e.target.value);

//       const selectedOption = e.target.options[e.target.selectedIndex];
//       const selectedKey = selectedOption.getAttribute("data-key");
//       console.log("option 속성인 data-key 값: ", selectedKey);

//       setOption(e.target.value);
//    }
//    return (
//       <div>
//          <select value={option} onChange={handleOnChange}>
//             <option data-key={1}>1</option>
//             <option data-key={2}>2</option>
//             <option data-key={3}>3</option>
//          </select>
//          <div>{option} 학년</div>
//       </div>
//    );
// };

// export default Body;


// import { useState } from "react";
// import './Body.css';

// const Body = () => {
//    const [text, setText] = useState("");

//    const handleOnChange = (e) => {
//       console.log("변경된 값: ", e.target.value);
//       setText(e.target.value);
//    };

//    return (
//       <div>
//          <textarea value={text} onChange={handleOnChange} />
//          <div>
//             <label>입력내용</label><br/>
//             <span className="message">{text}</span>
//          </div>
//       </div>
//    );
// };

// export default Body;

// import { useState } from "react";
// import './Body.css';

// const Body = () => {
//    const [name, setName] = useState("");
//    const [gender, setGender] = useState("");
//    const [birth, setBirth] = useState("");
//    const [introduction, setIntroduction] = useState("");

//    const onChangeName = (e) => {
//       setName(e.target.value);
//    };
//    const onChangeGender = (e) => {
//       setGender(e.target.value);
//    };
//    const onChangeBirth = (e) => {
//       setBirth(e.target.value);
//    };
//    const onChangeIntroduction = (e) => {
//       setIntroduction(e.target.value);
//    };

//    return (
//       <div className="container">
//          <h4>정보 입력</h4>
//          <div>
//             <input value={name} onChange={onChangeName} placeholder="이름" />
//          </div>

//          <div>
//             <select value={gender} onChange={onChangeGender}>
//                <option key={""}></option>
//                <option key={"남성"}>남성</option>
//                <option key={"여성"}>여성</option>
//             </select>
//          </div>

//          <div>
//             <input type="date" value={birth} onChange={onChangeBirth} />
//          </div>

//          <div>
//             <textarea value={introduction} onChange={onChangeIntroduction}
//             placeholder="자기소개"/>
//          </div>

//          <h4>데이터 출력</h4>
//          <div>
//             <label>이름</label> {name}<br/>
//             <label>성별</label> {gender}<br/>
//             <label>생년월일</label> {birth}<br/>
//             <label>자기소개</label> {introduction}<br/>
//          </div>
//       </div>
//    );
// };

// export default Body;

// import { useState } from "react";
// import './Body.css';

// const Body = () => {
//    const [state, setState] = useState({
//       name: "",
//       gender: "",
//       birth: "",
//       introduction: "",
//    });

//    const handleOnChange = (e) => {
//       console.log("현재 입력 대상 : ", e.target.name);
//       console.log("현재 입력 값 : ", e.target.value);

//       setState({
//          ...state,
//          [e.target.name]: e.target.value
//       });
//    };

//    return (
//       <div>
//          <h2>사용자 정보 입력</h2>

//          <div>
//             <label htmlFor="name">이름</label>
//             <input 
//                id="name"
//                name="name"
//                value={state.name}
//                onChange={handleOnChange}
//                placeholder="이름"
//             />
//          </div>
//          <div>
//             <label htmlFor="gender">성별</label>
//             <select id="gender" name="gender" value={state.gender} onChange={handleOnChange}>
//                <option value="">선택하세요</option>
//                <option value="남성">남성</option>
//                <option value="여성">여성</option>
//             </select>
//          </div>

//          <div>
//             <label htmlFor="birth">생년월일</label>
//             <input
//                id="birth"
//                name="birth"
//                type="date"
//                value={state.birth}
//                onChange={handleOnChange} />
//          </div>

//          <div>
//             <label htmlFor="introduction">자기소개</label>
//             <textarea
//                id="introduction"
//                name="introduction"
//                value={state.introduction}
//                onChange={handleOnChange}
//                placeholder="자기소개"
//             />
//          </div>

//          <h4>데이터 출력</h4>
//          <div>
//             <table>
//                <tbody>
//                   <tr>
//                      <th>이름</th>
//                      <td>{state.name}</td>
//                   </tr>
//                   <tr>
//                      <th>성별</th>
//                      <td>{state.gender}</td>
//                   </tr>
//                   <tr>
//                      <th>생년월일</th>
//                      <td>{state.birth}</td>
//                   </tr>
//                   <tr>
//                      <th colSpan={2}>자기소개</th>
//                   </tr>
//                   <tr>
//                      <td colSpan={2}>{state.introduction}</td>
//                   </tr>
//                </tbody>
//             </table>
//          </div>
//       </div>
//    );
// };

// export default Body;



import { useState } from "react";
import Viewer from "./Viewer";
import './Body.css';

const Body = () => {
   const [number, setNumber] = useState(0);

   const onIncrease = () => {
      setNumber(prev => prev + 1);
   };

   const onDecrease = () => {
      setNumber(prev => Math.max(prev - 1, 0));
   };

   return (
      <div>
         <div>{number}</div>
            <Viewer number={number} />

            <div>
               <button type="button" onClick={onDecrease} disabled={number === 0}> - </button>
               <button type="button" onClick={onIncrease}> + </button>
         </div>
      </div>
   );
};

export default Body;