import "./TravelList.css";
import TravelItem from './TravelItem';
import { useMemo, useState } from "react";
import { usePageNavigation } from "../hooks/usePageNavigation";

const sortOptionList = [
   { value : "latest", name: "최신순"},
   { value : "oldest", name: "오래된 순"},
];

const TravelList = ({data}) => {
   const [sortType, setSortType] = useState("latest");
   const {goNew} = usePageNavigation();

   const sortedData = useMemo(() => {
      return [...data].sort((a,b) => {
         if(sortType === "latest") {
            return b.startDate - a.startDate; 
         }
         return a.startDate - b.startDate; 
      });
   }, [data, sortType]);

   const onChangeSortType = (e) => {
      setSortType(e.target.value);
   };

   return (
      <div className="TravelList">
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
               <button type="button" className="btn_new" onClick={goNew}>
                  + 새 여행 기록
               </button>
            </div>
         </div>

         <div className="list_wrapper">
            {sortedData.map((travel) => (
               <TravelItem key={travel.id} {...travel} />
            ))}
         </div>
      </div>
   );
};

export default TravelList;