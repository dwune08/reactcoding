import Editor from "../components/Editor";
import Header from "../components/Header";
import { usePageNavigation } from "../hooks/usePageNavigation";
import { useContext } from 'react';
import { TravelDispatchContext } from "../context/TravelContext";

const New = () => {
   const { onCreate } = useContext(TravelDispatchContext);
   const {goBack, goHome} = usePageNavigation();
   
   const onSubmit = (data) => {
      const {destination, startDate, endDate, rating, content} = data;
      onCreate(destination, startDate, endDate, rating, content);
      goHome();
   }

   return(
      <div className="New">
         <Header
            title="새 기록 작성하기"
            leftChild={<button type="button" onClick={goBack}>&lt;뒤로 가기</button>}
         />
         
         <Editor onSubmit={onSubmit}/>
      </div>
   );
};

export default New;