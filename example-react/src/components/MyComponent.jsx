// import './MyComponent.css'

// const MyComponent = ({ name, age, email, favoriteNumber, hobbyList, children }) => {
//   return (
//     <>
//       <h2>컴포넌트로 자료 출력</h2>

//       <table className="table">
//          <thead>
//             <tr className="line">
//                <th>이름</th>
//                <th>나이</th>
//                <th>이메일</th>
//                <th>좋아하는 숫자</th>
//                <th>좋아하는 명언</th>
//                <th>취미</th>
//             </tr>
//          </thead>
//          <tbody>
//             <tr className="line">
//                <td>{name}</td>
//                <td>{age}</td>
//                <td>{email}</td>
//                <td>{favoriteNumber}</td>
//                <td>{children}</td>
//                <td>{hobbyList.join(", ")}</td>
//             </tr>
//          </tbody>
//       </table>
//     </>  
//   );
// };

// export default MyComponent;

function MyComponent() {
   const handleClick = () => {
      alert('버튼이 클릭되었습니다!');
   };

   return (
      <button type="button" onClick={handleClick}>
         클릭
      </button>
   );
}

export default MyComponent;
