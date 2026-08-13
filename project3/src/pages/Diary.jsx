import { useParams } from "react-router";
import useDiary from "../hooks/useDiary";

const Diary = () => {
   const { id }=useParams();
   const data = useDiary(id);
   console.log(data);

   return (
      <div>
         <div>{id}번 일기</div>
         <div>Diary 페이지</div>
      </div>
   );
};

export default Diary;