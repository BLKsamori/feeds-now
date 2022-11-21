import "./ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <div className="ArticleCard">
      <div className="sideA">
        <h5>{article.title}</h5>
        <p>
          {article.source.id}
          {article.source.name}
          {article.id}

          {article.author}

          {article.description}
          {article.publishedAt}
          {article.content}
        </p>
      </div>

      <div className="sideB">
        <img src={article.urlToImage} />
      </div>

      <div className="articleLink">
        <a href={article.url} target="_blank noopener">
          <button>Read More...</button>
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
