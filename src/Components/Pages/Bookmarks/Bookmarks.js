import "./Bookmarks.css";
import { useContext } from "react";
import ArticlesList from "../../ArticleArea/ArticlesList/ArticlesList";
import ArticlesContext from "../../../Context/ArticlesContext";
import useCurrentPage from "../../../Services/useCurrentPage";
import ObjToArr from "../../../Services/ObjToArr";

function Bookmarks() {
  useCurrentPage("Bookmarks");

  const { articles } = useContext(ArticlesContext);
  // const articleBookmarks = 1;

  const articleBookmarks = Object.entries(articles.bookmarks).length
    ? ObjToArr(articles.bookmarks)
    : "";
  return (
    <div className="Bookmarks">
      {articleBookmarks ? (
        <ArticlesList articlesList={articleBookmarks} />
      ) : (
        <div>add some material form the feed page</div>
      )}
    </div>
  );
}

export default Bookmarks;
