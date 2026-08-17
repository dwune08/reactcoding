import { useContext } from 'react';
import { useParams } from "react-router";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useTravel from "../hooks/useTravel";
import { usePageNavigation } from "../hooks/usePageNavigation";
import { TravelDispatchContext } from "../context/TravelContext";

const Edit = () => {
   const { id } = useParams();
   const data = useTravel(id);
   const { onDelete, onUpdate } = useContext(TravelDispatchContext);
   const { goBack, goHome } = usePageNavigation();

   if (!data) {
      return <div className="loading">기록을 불러오는 중...</div>;
   }

   const onClickDelete = () => {
      if (window.confirm("기록을 정말 삭제하시겠습니까?")) {
         onDelete(Number(id));
         goHome();
      }
   };

   const onSubmit = (formData) => {
      if (window.confirm("기록을 정말 수정하시겠습니까?")) {
         const { destination, startDate, endDate, rating, content } = formData;
         onUpdate(Number(id), destination, startDate, endDate, rating, content);
         goHome();
      }
   };

   return (
      <div className="Edit">
         <Header
            title="기록 수정하기"
            leftChild={<button type="button" onClick={goBack}>&lt; 뒤로 가기</button>}
            rightChild={<button type="button" className="btn_delete" onClick={onClickDelete}>삭제하기</button>}
         />
         <Editor 
            initData={data} 
            onSubmit={onSubmit} 
            onCancel={goBack} 
         />
      </div>
   );
};

export default Edit;