import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticlesList.css";

function ArticlesList({ articlesList }) {
  if (!Object.keys(articlesList).length) {
    return <span>empty</span>;
  }
  const allArticles = [...articlesList.articles];

  return (
    <div className="ArticlesList">
      {allArticles.map((art, index) => (
        <ArticleCard article={art} key={index} />
      ))}
    </div>
  );
}

export default ArticlesList;
