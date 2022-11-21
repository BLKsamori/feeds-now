import "./Feeds.css";
import { useContext } from "react";
import ArticlesList from "../../ArticleArea/ArticlesList/ArticlesList";
import SearchBar from "../../SearchArea/SearchBar/SearchBar";
import ArticlesContext from "../../../Context/ArticlesContext";
import ObjKeysList from "../../../Services/getObjKeys";

function Feeds() {
  const { articles } = useContext(ArticlesContext);
  const newArticles = ObjKeysList(articles.search).length
    ? articles.search
    : articles.dashboard;
  return (
    <div className="Feeds">
      <SearchBar />
      <ArticlesList articlesList={newArticles} />
    </div>
  );
}

export default Feeds;
