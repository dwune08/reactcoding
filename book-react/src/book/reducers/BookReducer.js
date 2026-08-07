export default function BookReducer(state, action) {
   switch (action.type) {
      case 'CREATE':
         return [...state, action.newBook];

      case 'UPDATE':
         return state.map((book) => 
            book.id===action.targetId
               ? {...book, isRead: action.isRead}
               : book
         );

      case 'DELETE':
         return state.filter((book) => book.id !== action.targetId);
      
      default: return state;
   }
}