import { useParams } from "react-router";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useTravel from "../hooks/useTravel";
import { usePageNavigation } from "../hooks/usePageNavigation";
import { putOne, deleteOne } from "../api/travelApi";

const Edit = () => {
   const { id } = useParams();
   const data = useTravel(id);
   const { goBack, goHome } = usePageNavigation();

   if (!data) {
      return <div className="loading">기록을 불러오는 중...</div>;
   }

   const onClickDelete = async () => {
      if (window.confirm("기록을 정말 삭제하시겠습니까?")) {
         try {
            await deleteOne(id);
            goHome();
         } catch (error) {
            console.error("삭제 실패:", error);
            alert("삭제에 실패했습니다.");
         }
      }
   };

   const onSubmit = async (formData) => {
      if (window.confirm("기록을 정말 수정하시겠습니까?")) {
         try {
            const updatePayload = {
               ...formData,
               id: Number(id),
            };
            console.log("전송 데이터: ", updatePayload);
            
            await putOne(updatePayload);
            goHome();
         } catch(error) {
            console.error("수정 실패:", error);
            alert("수정에 실패했습니다.");
         }   
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