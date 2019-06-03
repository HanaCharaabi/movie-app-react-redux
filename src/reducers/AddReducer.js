const AddReducer = (state = {}, action) => {
  if (action.type === "ADD_MOVIE") {
    return action.movie;
  }
  return state;
};
export default AddReducer;
