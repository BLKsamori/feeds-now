import ACTION_ARTICLES from "./ ACTION_ARTICLES";
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

    default:
      return state;
  }
}

export default ArticlesReducer;
