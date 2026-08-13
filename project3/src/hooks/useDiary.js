import { useContext } from "react";
import { DiaryStateContext } from "../context/DiaryContext";

const useDiary = (id) => {
   const data = useContext(DiaryStateContext);
   
   const diary = data.find(
      (diary) => diary.id === Number(id)
   );
   
   return data;
};

export default useDiary;