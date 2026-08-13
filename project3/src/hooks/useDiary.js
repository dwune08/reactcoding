import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { DiaryStateContext } from "../context/DiaryContext";

const useDiary = (id) => {
   const data = useContext(DiaryStateContext);
   const navigate = useNavigate();
   
   const diary = data.find(
      (diary) => diary.id === Number(id)
   );

   useEffect(() => {
      if(!diary) {
         navigate("/", { replace: true});
      }
   }, [diary, navigate]);
   
   return diary;
};

export default useDiary;