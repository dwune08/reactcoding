import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";


const sortOptionList = [
   { value: "latest", name: "최신순"},
   { value: "oldest", name: "오래된 순"},
];

const DiaryList = ({data}) => {
   const [sortType, setSortType] = useState("latest");
   const navigate = useNavigate();

   const sortedData = useMemo(() => {
      return [...data].sort((a, b) => {
         if(sortType === "latest") {
            return b.date - a.date;
         }

         return a.date - b.date;
      });
   }, [data, sortType]);

   const onClickNew = () => {
      navigate("/new");
   }

   const onChangeSortType = (e) => {
      setSortType(e.target.value);
   };

   return (
      <div className="DiaryList">
         <div className="menu_wrapper">
            <div className="left_col">
               <select value={sortType} onChange={onChangeSortType}>
                  {sortOptionList.map((sort) => (
                     <option key={sort.value} value={sort.value}>
                        {sort.name}
                     </option>
                  ))}
               </select>
            </div>
            <div className="right_col">
               <Button
                  type={"positive"}
                  text={"새 일기 쓰기"}
                  onClick={onClickNew}
               />
            </div>
         </div>

         <div className="list_wrapper">
            {sortedData.map((Diary) => (
               <DiaryItem key={Diary.id}{...Diary} />
            ))}
         </div>
      </div>
   );
};

export default DiaryList;