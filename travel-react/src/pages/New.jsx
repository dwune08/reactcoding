import Editor from "../components/Editor";
import Header from "../components/Header";
import { usePageNavigation } from "../hooks/usePageNavigation";
import { postAdd } from "../api/travelApi";

const New = () => {
   const {goBack, goHome} = usePageNavigation();
   
   const onSubmit = async (data) => {
      await postAdd(data);
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