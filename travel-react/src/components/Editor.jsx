import './Editor.css';
import { useState, useEffect } from "react";
import StarRating from './StarRating';
import { usePageNavigation } from '../hooks/usePageNavigation.js';

const formatDateForInput = (dateObj) => {
   const year = dateObj.getFullYear();
   const month = String(dateObj.getMonth() + 1).padStart(2, "0");
   const date = String(dateObj.getDate()).padStart(2, "0");
   return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit, onCancel }) => {
   const { goBack } = usePageNavigation();

   const [state, setState] = useState({
      destination: "",
      startDate: formatDateForInput(new Date()),
      endDate: formatDateForInput(new Date()),
      rating: 5,
      content: "",
   });

   useEffect(() => {
      if (initData) {
         setState({
            ...initData,
            startDate: formatDateForInput(new Date(Number(initData.startDate))),
            endDate: formatDateForInput(new Date(Number(initData.endDate))),
         });
      }
   }, [initData]);

   const handleChangeDestination = (e) => {
      setState((prev) => ({ ...prev, destination: e.target.value }));
   };

   const handleChangeContent = (e) => {
      setState((prev) => ({ ...prev, content: e.target.value }));
   };

   const handleChangeRating = (rating) => {
      setState((prev) => ({ ...prev, rating }));
   };

   const handleSubmit = () => {
      if (!state.destination.trim()) {
         alert("여행 장소를 입력해 주세요!");
         return;
      }
      onSubmit(state);
   };

   const handleCancel = () => {
      if (onCancel) {
         onCancel();
      } else {
         goBack();
      }
   };

   return (
      <div className="Editor">

         <div className="editor_row">
            <div className="editor_section destination_section">
               <h4>여행 장소</h4>
               <div className="input_wrapper">
                  <input
                     type="text"
                     placeholder="예: 한국-제주도"
                     value={state.destination}
                     onChange={handleChangeDestination}
                  />
               </div>
            </div>

            <div className="editor_section rating_section">
               <h4>별점</h4>
               <div className="rating_wrapper">
                  <StarRating rating={state.rating} onRate={handleChangeRating} />
               </div>
            </div>
         </div>

         <div className="editor_section date_section">
            <h4>여행 기간</h4>
            <div className="input_wrapper date_wrapper">
               <input
                  type="date"
                  value={state.startDate}
                  onChange={(e) => setState((prev) => ({ ...prev, startDate: e.target.value }))}
               />
               <span className="wave">~</span>
               <input
                  type="date"
                  value={state.endDate}
                  onChange={(e) => setState((prev) => ({ ...prev, endDate: e.target.value }))}
               />
            </div>
         </div>

         <div className="editor_section content_section">
            <h4>내용</h4>
            <div className="input_wrapper">
               <textarea
                  placeholder="여행에서의 추억이나 기록을 남겨보세요."
                  value={state.content}
                  onChange={handleChangeContent}
               />
            </div>
         </div>
         <div className="editor_section bottom_section">
            <button type="button" className="btn_cancel" onClick={handleCancel}>
               취소
            </button>
            <button type="button" className="btn_submit" onClick={handleSubmit}>
               {initData ? "수정 완료" : "작성 완료"}
            </button>
         </div>
      </div>
   );
};

export default Editor;