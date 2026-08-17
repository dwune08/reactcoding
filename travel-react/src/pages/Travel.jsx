import { useParams } from "react-router";
import useTravel from '../hooks/useTravel';
import { usePageNavigation } from "../hooks/usePageNavigation";
import Header from "../components/Header";
import Viewer from "../components/Viewer";

const Travel = () => {
   const { id } = useParams();
   const data = useTravel(id);
   const { goBack, goEdit } = usePageNavigation();

   if (!data) {
      return <div className="loading">기록을 불러오는 중...</div>;
   }

   const { destination, startDate, endDate, rating, content } = data;
   
   const title = `${Number(id) + 1}번째 여행 기록`;

   return (
      <div className="Travel">
         <Header
            title={title}
            leftChild={<button type="button" onClick={goBack}>&lt; 뒤로 가기</button>}
            rightChild={<button type="button" onClick={() => goEdit(id)}>수정/삭제</button>}
         />
         
         <Viewer 
            destination={destination} 
            startDate={startDate}
            endDate={endDate}
            rating={rating} 
            content={content} 
         />
      </div>
   );
};

export default Travel;