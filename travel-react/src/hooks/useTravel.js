import { useEffect, useState } from "react";
import { getOne } from "../api/travelApi";
import { usePageNavigation } from "./usePageNavigation";

const useTravel = (id) => {
   const [travel, setTraval] = useState(null);
   const {goHome} = usePageNavigation();

   useEffect(() => {
      if(!id) return;
      getOne(id)
         .then((data) => {
            if(data) {
               setTraval(data);
            } else {
               alert("존재하지 않는 여행 기록입니다.");
               goHome();
            }
         })
         .catch((error) => {
            console.error("여행 기록 조회 실패: ", error);
            alert("여행 기록을 불러오는데 실패했습니다.");
            goHome();
         });
   }, [id])
   return travel;
};

export default useTravel;
