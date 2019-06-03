const searchReducer = (state = '', action) => {
  if (action.type === "SEARCH_INPUT") {
    return action.name;
  }
  return state;
};
export default searchReducer;