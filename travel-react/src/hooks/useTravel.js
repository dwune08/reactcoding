import { useContext, useEffect } from "react";
import { TravelStateContext } from "../context/TravelContext"
import { usePageNavigation } from "./usePageNavigation";

const useTravel = (id) => {
   const data = useContext(TravelStateContext);
   const {goHome} = usePageNavigation();

   const travel = data.find(
      (travel) => travel.id === Number(id)
   );

   useEffect(() => {
      if(!travel) {
         goHome;
      }
   }, [travel, goHome])

   return travel;
};

export default useTravel;
