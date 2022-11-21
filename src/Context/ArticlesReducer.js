import ACTION_ARTICLES from "./ACTION_ARTICLES";
// reference
// dashboard: {},
// search: {},

function ArticlesReducer(state, action) {
  switch (action.type) {
    case ACTION_ARTICLES.DASHBOARD:
      const newDashboard = {
        ...state,
        dashboard: action.payload,
      };
      return newDashboard;

    case ACTION_ARTICLES.SEARCH:
      const newSearch = { ...state, search: action.payload };
      return newSearch;

    case ACTION_ARTICLES.SINGLE:
      const newSingle = {
        ...state,
        single: action.payload,
      };
      return newSingle;

    case ACTION_ARTICLES.RESET_SINGLE:
      let singleArticle = {};
      const removeSingle = {
        ...state,
        single: singleArticle,
      };
      return removeSingle;

    default:
      return state;
  }
}

export default ArticlesReducer;
