import { useReducer, useRef } from 'react';
import './BookMain.css';
import Header from './Header';
import BookList from './BookList';
import BookCreate from './BookCreate';
import BookReducer from './reducers/BookReducer';

const mockBook = [
   {
      id: 0,
      title:"참을 수 없는 존재의 가벼움",
      author:"밀란 쿤데라",
      publisher:"민음사",
      isRead:"done"
   },
   {
      id: 1,
      title:"열정",
      author:"산도르 마라이",
      publisher:"솔",
      isRead:"done"
   },
   {
      id: 2,
      title:"엔지니어의 인문학 수업",
      author:"새뮤얼 플러먼",
      publisher:"유유",
      isRead:"reading"
   },
];

const BookMain = () => {
   const [book, dispatch] = useReducer(BookReducer, mockBook);
   const idRef = useRef(3);

   const onCreate = ({title, author, publisher, isRead}) => {
      dispatch ({
         type: "CREATE",
         newBook: {
            id: idRef.current++,
            title,
            author,
            publisher,
            isRead,
         }
      });
   };

   const onUpdate = (targetId, isRead) => {
      dispatch ({
         type: "UPDATE",
         targetId,
         isRead,
      });
   };

   const onDelete = (targetId) => {
      dispatch({
         type: "DELETE",
         targetId,
      });
   };
 
   return (
      <div className="BookMain container py-5" style={{maxwidth:"900px"}}>
         <Header />

         <BookCreate onCreate={onCreate}/>

         <BookList book={book} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
   )
}

export default BookMain;