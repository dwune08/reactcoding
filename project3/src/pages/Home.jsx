// import { useSearchParams } from "react-router";

// const Home = () => {
//    const [searchParams] = useSearchParams();
//    console.log(searchParams.get("sort"));

//    return (
//       <div>Home 페이지</div>
//    );
// };

// export default Home;

// import Button from '../components/Button';
// import Header from '../components/Header';

// const Home = () => {
//    return (
//       <div>
//          <Header
//             title={"Home"}
//             leftChild={
//                <Button
//                   type="positive"
//                   text={"긍정 버튼"}
//                   onClick={() => {
//                      alert("positive 버튼");
//                   }}
//                />
//             }
            
//             rightChild={
//                <Button
//                   type="negative"
//                   text={"부정 버튼"}
//                   onClick={() => {
//                      alert("negative 버튼");
//                   }}
//                />
//             }
//          />
//       </div>
//    );
// };

// export default Home;

// import Editor from '../components/Editor';

// const Home = () => {
//    return (
//       <div>
//          <Editor
//             initData={{
//                date: new Date().getTime(),
//                emotionId: 1,
//                content: "이전에 작성했던 일기",
//             }}
//             onSubmit={() => {
//                alert("작성 완료");
//             }}   
//          />
//       </div>
//    );
// };

// export default Home;

import { useContext, useState, useMemo } from "react";
import { DiaryStateContext } from "../context/DiaryContext";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate } from "../utils/util";

const Home = () => {
   const data = useContext(DiaryStateContext);
   const [pivotDate, setPivotDate] = useState(new Date());

   const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;

   const filteredData = useMemo(() => {
      const { beginTimeStamp, endTimeStamp } =
         getMonthRangeByDate(pivotDate);

      return data.filter((diary) =>
         diary.date >= beginTimeStamp && diary.date <= endTimeStamp
      );
   }, [data, pivotDate]);

   const onIncreaseMonth = () => {
      setPivotDate((pivotDate) => 
         new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1)
      );
   };

   const onDecreaseMonth = () => {
      setPivotDate((pivotDate) => 
         new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1)
      );
   };

   return (
      <div>
         <Header
            title={headerTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
         />

         <DiaryList data={filteredData} />
      </div>
   );
};

export default Home;