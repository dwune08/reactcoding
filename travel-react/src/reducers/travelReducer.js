export function travelReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((travel) =>
        travel.id === action.data.id ? { ...action.data } : travel
      );

    case "DELETE":
      return state.filter((travel) => travel.id !== action.targetId);

    default:
      return state;
  }
}