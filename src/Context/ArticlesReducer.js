import ACTION_ARTICLES from "./ACTION_ARTICLES";
// reference
// dashboard: {},
// search: {},
// single: {},
// bookmarks: {},
// currentPage: {},
const removeSpecialRegex = /[" \.\\!@#$%^&*(()_+-=,<>?:':;\[\]`~]/g;

function ArticlesReducer(state, action) {
  switch (action.type) {
    case ACTION_ARTICLES.ADD_ARTICLE_BOOKMARKS:
      const todayDate = new Date().toLocaleString();
      const allBookmarks = { ...state.bookmarks };
      const titleBookmark = action.payload.title.replace(
        removeSpecialRegex,
        "_"
      );
      allBookmarks[titleBookmark] = { ...action.payload, bookDay: todayDate };
      const newState = {
        ...state,
        bookmarks: { ...allBookmarks },
      };

      return newState;
    case ACTION_ARTICLES.REMOVE_ARTICLE_BOOKMARKS:
      const allTheBookmarks = { ...state.bookmarks };

      const titleBookmarkREmove = action.payload.replace(
        removeSpecialRegex,
        "_"
      );

      delete allTheBookmarks[titleBookmarkREmove];
      const updatedBookmarks = {
        ...state,
        bookmarks: { ...allTheBookmarks },
      };
      return updatedBookmarks;
      return state;
    case ACTION_ARTICLES.CURRENT_PAGE:
      const newPage = {
        ...state,
        currentPage: action.payload,
      };
      return newPage;
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
