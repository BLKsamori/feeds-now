import { useContext } from "react";
import ArticlesList from "../../ArticleArea/ArticlesList/ArticlesList";
import ArticlesContext from "../../../Context/ArticlesContext";
import "./Home.css";

function Home() {
  const { articles } = useContext(ArticlesContext);
  const newArticles = articles.dashboard;
  return (
    <div className="Home">
      <h1>Todays News</h1>
      <ArticlesList articlesList={newArticles} />
    </div>
  );
}

export default Home;
