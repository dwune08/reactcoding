import './Editor.css'
import { useState } from 'react';
import { getFormattedDate, emotionList } from '../utils/util';
import Button from './Button';
import { useNavigate } from 'react-router';
import EmotionItem from './EmotionItem';

const Editor = ({initData, onSubmit}) => {
   const navigate = useNavigate();

   const [state, setState] = useState(() => {
      if(initData) {
         return {
            ...initData,
            date: getFormattedDate(new Date(initData.date)),
         };
      }

      return {
         date: getFormattedDate(new Date()),
         emotionId: 3,
         content: "",
      };
   });

   const handleChangeDate = (e) => {
      setState({
         ...state,
         date: getFormattedDate(new Date(e.target.value)),
      });
   };

   const handleChangeEmotion = (emotionId) => {
      setState({
         ...state,
         emotionId,
      });
   };

   const handleChangeContent = (e) => {
      setState({
         ...state,
         content:e.target.value,
      });
   };

   const handleSubmit = () => {
      onSubmit(state);
   };

   const handleGoBack = () => {
      navigate(-1);
   };

   return (
      <div className="Editor">
         <div className="editor_section">
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper">
               <input 
                  type="date"
                  value={state.date}
                  onChange={handleChangeDate}
               />
            </div>
         </div>
         <div className="editor_section">
            <h4>오늘의 감정</h4>
            <div className="input_wrapper emotion_list_wrapper">
               {emotionList.map((it) => (
                  <EmotionItem key={it.id}
                  {...it}
                  onClick={handleChangeEmotion}
                  isSelected={state.emotionId === it.id} />
               ))}
            </div>
         </div>
         <div className="editor_section">
            <h4>오늘의 일기</h4>
            <div className='input wrapper'>
               <textarea
                  placeholder='오늘의 일기'
                  value={state.content}
                  onChange={handleChangeContent}
               />
            </div>
         </div>
         <div className="editor_section bottom_section">
            <Button
               text={"취소"}
               onClick={handleGoBack}
            />
            <Button
               text={"작성 완료"}
               type={"positive"}
               onClick={handleSubmit}
            />
         </div>
      </div>
   );
}

export default Editor;