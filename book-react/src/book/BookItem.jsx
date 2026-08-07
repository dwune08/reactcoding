import './BookList.css';

const BookItem = ({id, title, author, publisher, isRead, onUpdate, onDelete}) => {
   const onChageSelectbox = (e) => {
      onUpdate(id, e.target.value);
   }

   const onClickDelete = () => {
      onDelete(id);
   }
   
   return (
      <tr>
         <td scope="row">{title}</td>
         <td>{author}</td>
         <td>{publisher}</td>
         <td>
            <select 
               value={isRead}
               onChange={onChageSelectbox} >
               <option value="before">읽기 전</option>
               <option value="reading">읽는 중</option>
               <option value="done">완독</option>
            </select>
         </td>
         <td>
            <button
               type="button"
               onClick={onClickDelete}
               className="btn btn-outline-dark"
            >
               삭제
            </button>
         </td>
      </tr>
   );
};

export default BookItem;