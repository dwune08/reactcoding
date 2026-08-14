import { useState } from "react";
import './Editor.css';
import StarRating from './starRating';
import '../utils/util.js';

const Editor = ({initData, onSubmit}) => {
   const [state, setState] = useState({
      destination: "",
      date: "",
      rating: 5,
      content: "",      
   });

   const handleChangeDate = (e) => {
      setState({
         ...state,
         date: e.target.value,
      });
   };

   return(
      <div className="Editor">
         <div className="editor_section">
            {/* 장소 */}
            <h4>여행 장소</h4>
         </div>
         <div className="editor_section">
            <h4>날짜</h4>
            <div className="input_wrapper">
               <input
                  type="date"
                  value={state.date}
                  onChange={handleChangeDate} />
            </div>
         </div>
         <div className="editor_section">
            <h4>별점</h4>
            <StarRating rating={state.rating} />
         </div>
         <div className="editor_section">
            {/* 내용 */}
         </div>
         <div className="editor_section">
            {/* 작성 완료, 취소 */}
         </div>
      </div>
   );
};

export default Editor;