import { useContext, useEffect, useState } from "react";
import ACTION_ARTICLES from "../Context/ACTION_ARTICLES";
import ArticlesContext from "../Context/ArticlesContext";

function useCurrentPage(title) {
  const { setArticles } = useContext(ArticlesContext);

  useEffect(() => {
    setArticles({
      type: ACTION_ARTICLES.CURRENT_PAGE,
      payload: title,
    });
    document.title = "Feeds Now | " + title;
  }, [title]);
}

export default useCurrentPage;
