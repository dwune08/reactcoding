import { useState } from "react";
import './BookCreate.css';

const BookCreate = ({onCreate}) => {
   const [info, setInfo] = useState({
      title: "",
      author: "",
      publisher: "",
      isRead: "",
   });

   const onChangeInfo = (e) => {
      setInfo({
         ...info,
         [e.target.name]: e.target.value,
      });
   };

   const onSubmitInfo = () => {
      if(info.title === "") {
         alert("도서명을 입력해주세요.");
         return;
      }
      if(info.author === "") {
         alert("저자를 입력해주세요.");
         return;
      }
      if(info.publisher === "") {
         alert("출판사를 입력해주세요.");
         return;
      }
      if(info.isRead === "") {
         alert("독서상태를 선택해주세요.");
         return;
      }
      
      onCreate({
         title: info.title,
         author: info.author,
         publisher: info.publisher,
         isRead: info.isRead,
      });

      setInfo({
         title: "",
         author: "",
         publisher: "",
         isRead: "",
      });
   };

   const onKeyDown = (e) => {
      if(e.key === 'Enter') {
         onSubmitInfo();
      }
   }

   return (
      <div className="card shadow-sm mb-4">
         <div className="card-header bg-dark text-white fw-bold text-center py-2">
            새로운 독서 기록 추가
         </div>

         <div className="card-body">
            <div className="row g-2 align-item-center">
               <div className="col-md-4">
                  <input
                     name="title"
                     className="form-control"
                     value={info.title}
                     onChange={onChangeInfo}
                     onKeyDown={onKeyDown}
                     placeholder="도서명"
                  />
               </div>
               <div className="col-md-3">
                  <input 
                  name="author"
                  className="form-control"
                  value={info.author}
                  onChange={onChangeInfo}
                  onKeyDown={onKeyDown}
                  placeholder="저자"
               />
               </div>
               <div className="col-md-2">
                  <input
                  name="publisher"
                  className="form-control"
                  value={info.publisher}
                  onChange={onChangeInfo}
                  onKeyDown={onKeyDown}
                  placeholder="출판사"
               />
               </div>
               <div className="col-md-2">
                  <select
                     name="isRead"
                     className="form-select"
                     value={info.isRead}
                     onChange={onChangeInfo}
                  >
                     <option value="" disabled>선택하세요</option>
                     <option value="before">읽기 전</option>
                     <option value="reading">읽는 중</option>
                     <option value="done">완독</option>
                  </select>
               </div>
               <div className="col-1 d-flex justify-content-center">
                  <button
                     type="button"
                     onClick={onSubmitInfo}
                     className="form-control btn btn-outline-dark text-nowrap"
                  >
                     추가
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookCreate;