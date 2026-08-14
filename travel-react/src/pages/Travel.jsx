import { useParams } from "react-router";

const Travel = () => {
   const { id } = useParams();

   return(
      <div>
         <div>{id}번 기록</div>
         <div>Travel 페이지</div>
      </div>
   );
};

export default Travel;