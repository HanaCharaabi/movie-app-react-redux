const starsReducer = (state = 5, action) => {
  if (action.type === "SEARCH_STARS") {
    return action.review;
  }
  return state;
};
export default starsReducer;