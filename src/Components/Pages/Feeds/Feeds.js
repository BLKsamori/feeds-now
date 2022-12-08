import "./Feeds.css";
import { useContext } from "react";
import ArticlesList from "../../ArticleArea/ArticlesList/ArticlesList";
import SearchBar from "../../SearchArea/SearchBar/SearchBar";
import ArticlesContext from "../../../Context/ArticlesContext";
import useCurrentPage from "../../../Services/useCurrentPage";

function Feeds() {
  useCurrentPage("Feeds");

  const { articles } = useContext(ArticlesContext);
  const newArticles = Object.entries(articles.search).length
    ? articles.search
    : articles.dashboard;
  const finalArticles = Object.entries(newArticles.articles).length
    ? newArticles.articles
    : newArticles.sources;

  return (
    <div className="Feeds">
      <SearchBar />
      <ArticlesList articlesList={finalArticles} />
    </div>
  );
}

export default Feeds;
