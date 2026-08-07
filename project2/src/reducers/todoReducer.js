export default function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.newItem];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? {...item, isDone: !item.isDone}
          : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}