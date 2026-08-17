import { useContext, useState, useMemo } from "react";
import { TravelStateContext } from "../context/TravelContext";
import { getYearRangeByDate } from "../utils/util";
import Header from '../components/Header';
import TravelList from "../components/TravelList";

const Home = () => {
   const data = useContext(TravelStateContext);
   const [pivotDate, setPivotDate] = useState(new Date());

   const currentYear = pivotDate.getFullYear();
   const headerTitle = `${currentYear}년`;
   const prevYear = `< ${currentYear - 1}년`;
   const nextYear = `${currentYear + 1}년 >`;

   const filteredData = useMemo(() => {
      const { beginTimeStamp, endTimeStamp } = getYearRangeByDate(pivotDate);
      return data.filter((travel) =>
         travel.startDate >= beginTimeStamp && travel.startDate <= endTimeStamp
      );
   }, [data, pivotDate]);
   
   const onIncreaseYear = () => {
      setPivotDate((pivotDate) =>
         new Date(pivotDate.getFullYear() + 1, pivotDate.getMonth(), pivotDate.getDate())
      );
   };

   const onDecreaseYear = () => {
      setPivotDate((pivotDate) =>
         new Date(pivotDate.getFullYear() - 1, pivotDate.getMonth(), pivotDate.getDate())
      );
   };
   
   return (
      <div className="Home">
         <Header
            title={headerTitle}
            leftChild={<button type="button" onClick={onDecreaseYear}>{prevYear}</button>}
            rightChild={<button type="button" onClick={onIncreaseYear}>{nextYear}</button>}
         />
         <TravelList data={filteredData} />
      </div>
   );
};

export default Home;