import { useParams, useNavigate } from "react-router";
import useDiary from "../hooks/useDiary";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import { getFormattedDate } from "../utils/util";

const Diary = () => {
   const { id }=useParams();
   const data = useDiary(id);
   const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   }

   const goEdit = () => {
      navigate(`/edit/${id}`);
   }

   if(!data) {
      return <div>일기를 불러오는 중...</div>;
   }

   const { date, emotionId, content } = data;
   const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

   return (
      <div>
         <Header
            title={title}
            leftChild={<Button text={"<뒤로 가기"} on onClick={goBack} />}
            rightChild={<Button text={"수정하기"} on onClick={goEdit} />}
         />

         <Viewer content={content} emotionId={emotionId} />
      </div>
   );
};

export default Diary;