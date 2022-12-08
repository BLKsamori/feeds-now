import { useContext } from "react";
import ArticlesList from "../../ArticleArea/ArticlesList/ArticlesList";
import ArticlesContext from "../../../Context/ArticlesContext";
import "./Home.css";
import useCurrentPage from "../../../Services/useCurrentPage";

function Home() {
  const { articles } = useContext(ArticlesContext);
  const newArticles = articles.dashboard.articles;
  useCurrentPage("Home");

  return (
    <div className="Home">
      <h1>Todays News</h1>

      <ArticlesList articlesList={newArticles} />
    </div>
  );
}

export default Home;
