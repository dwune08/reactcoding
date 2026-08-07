import './BookList.css';
import './BookItem';
import BookItem from './BookItem';

const BookList = ({book, onUpdate, onDelete}) => {
   return (
      <div className="BookMain my-4">
         <h3 className="text-center fw-bold mb-3">독서 기록 목록</h3>
         <table className="table align-middle"> 
            <thead className="table-dark">
               <tr>
                  <th scope="col">도서명</th>
                  <th scope="col">저자</th>
                  <th scope="col">출판사</th>
                  <th scope="col">독서상태</th>
                  <th scope="col">편집</th>
               </tr>
            </thead>
            <tbody className="table-group-divider">
               {book.map((book) => (
                  <BookItem
                     key={book.id}
                     {...book}
                     onUpdate={onUpdate}
                     onDelete={onDelete}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default BookList;