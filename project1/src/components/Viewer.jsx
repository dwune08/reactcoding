const Viewer = ({ count }) => {
   return (
      <div>
         <div>현재 카운트 : </div>
         <h1>{count}</h1>
      </div>
   );
};

export default Viewer;

// import { useEffect, useState } from "react";

// const Viewer = () => {
//    const [data, setData] = useState(null);

//    useEffect(() =>{
//       console.log("Viewer 컴포넌트 마운트");

//       // 서버에서 데이터를 불러왔다고 가정한다.
//       setData({
//       name:"홍길동",
//       email: "react1234@naver.com"
//       });
//    }, []);

//    return (
//       <div>
//          <h2>회원 정보</h2>
//          {data ? (
//             <>
//                <p>이름: {data.name}</p>
//                <p>이메일: {data.email}</p>
//             </>
//          ):(
//          <p>데이터를 불러오는 중입니다 .</p>
//          )}
//       </div>
//    );
// };

// export default Viewer;