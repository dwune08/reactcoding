import { useEffect, useState, useMemo } from "react";
import { getList } from "../api/travelApi";
import { getYearRangeByDate } from "../utils/util";
import Header from '../components/Header';
import TravelList from "../components/TravelList";

const Home = () => {
   const [data, setData] = useState([]);
   const [pivotDate, setPivotDate] = useState(new Date());

   const currentYear = pivotDate.getFullYear();
   const headerTitle = `${currentYear}년`;
   const prevYear = `< ${currentYear - 1}년`;
   const nextYear = `${currentYear + 1}년 >`;

   useEffect(() => {
      getList({page:1, size:10}).then((responseData) => {
         setData(responseData?.dtoList || []);
      });
   }, []);

   const filteredData = useMemo(() => {
      const { beginTimeStamp, endTimeStamp } = getYearRangeByDate(pivotDate);
      return data.filter((travel) => {
         const travelTime = new Date(travel.startDate).getTime();
         return travelTime >= beginTimeStamp && travelTime <= endTimeStamp
      });
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