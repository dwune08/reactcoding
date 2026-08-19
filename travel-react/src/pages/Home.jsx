import { useEffect, useState, useMemo } from "react";
import { getList } from "../api/travelApi";
import { getYearRangeByDate } from "../utils/util";
import Header from '../components/Header';
import TravelList from "../components/TravelList";

const Home = () => {
   const [data, setData] = useState([]);
   const [page, setPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [pivotDate, setPivotDate] = useState(new Date());

   const currentYear = pivotDate.getFullYear();
   const headerTitle = `${currentYear}년`;
   const prevYear = `< ${currentYear - 1}년`;
   const nextYear = `${currentYear + 1}년 >`;

   // Home.jsx - API 호출 시 year 파라미터 추가
   useEffect(() => {
      const fetchList = async () => {
         try {
            // 백엔드로 현재 연도 정보 전달
            const res = await getList(page, 10, currentYear);
            setData(res.content || []);
            setTotalPages(res.totalPages || 0);
         } catch (error) {
            console.error(error);
            setData([]);
         }
      };
      fetchList();
   }, [page, currentYear]); // currentYear 변경 시에도 다시 요청

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
      setPage(0);
   };

   const onDecreaseYear = () => {
      setPivotDate((pivotDate) =>
         new Date(pivotDate.getFullYear() - 1, pivotDate.getMonth(), pivotDate.getDate())
      );
      setPage(0);
   };
   
   return (
      <div className="Home">
         <Header
            title={headerTitle}
            leftChild={<button type="button" onClick={onDecreaseYear}>{prevYear}</button>}
            rightChild={<button type="button" onClick={onIncreaseYear}>{nextYear}</button>}
         />
         <TravelList data={data} />

         {/* 페이징 버튼 영역 */}
         <div className="pagination">
            <button 
               disabled={page === 0} 
               onClick={() => setPage((prev) => prev - 1)}
            >
               &lt; 이전
            </button>
            
            <span>{page + 1} / {totalPages || 1}</span>

            <button 
               disabled={page + 1 >= totalPages} 
               onClick={() => setPage((prev) => prev + 1)}
            >
               다음 &gt;
            </button>
         </div>
      </div>
   );
};

export default Home;