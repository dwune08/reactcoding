import { useState, useEffect, useMemo } from "react";
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
    getList({ page: 1, size: 100 }).then((resData) => {
      setData(resData?.dtoList || []);
    });
  }, []);


  const filteredData = useMemo(() => {
    const { beginTimeStamp, endTimeStamp } = getYearRangeByDate(pivotDate);
    
    return data.filter((travel) => {
      const travelTime = new Date(travel.startDate).getTime();
      return travelTime >= beginTimeStamp && travelTime <= endTimeStamp;
    });
  }, [data, pivotDate]);

  const onIncreaseYear = () => {
    setPivotDate((prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), prev.getDate()));
  };

  const onDecreaseYear = () => {
    setPivotDate((prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), prev.getDate()));
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