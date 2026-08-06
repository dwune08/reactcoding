import { useState, useRef } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
   const [content, setContent] = useState("");
   const inputRef = useRef(null);

   const onChangeContent = (e) => {
      setContent(e.target.value);
   };

   const onSubmitContent = () => {
      if (!content.trim()) {
         inputRef.current.focus();
         alert("할 일을 입력하세요!");
         return;
      }

      onCreate(content);
      setContent("");
   };

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onSubmitContent();
      }
   };

   return (
      <div className='TodoEditor'>
         <h4>새로운 할 일 작성하기✏️</h4>

         <div className='editor_wrapper'>
            <input
               ref={inputRef}
               value={content}
               onChange={onChangeContent}
               onKeyDown={onKeyDown}
               placeholder='새로운 Todo...'
            />
            <button type="button" onClick={onSubmitContent}>
               추가
            </button>
         </div>
      </div>
   );
};

export default TodoEditor;