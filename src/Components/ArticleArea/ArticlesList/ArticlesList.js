import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleSingle from "../ArticleSingle/ArticleSingle";
import ArticlesNotFound from "../ArticlesNotFound/ArticlesNotFound";
import "./ArticlesList.css";

function ArticlesList({ articlesList }) {
  if (!articlesList || articlesList.length < 1) {
    return <ArticlesNotFound />;
  }

  return (
    <div className="ArticlesList">
      <ArticleSingle />

      {articlesList.map((art, index) => (
        <ArticleCard article={art} key={index} />
      ))}
    </div>
  );
}

export default ArticlesList;
