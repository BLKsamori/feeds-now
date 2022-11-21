import { useContext } from "react";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import ArticlesContext from "../../../Context/ArticlesContext";
import "./ArticleCard.css";
import Button from "@mui/material/Button";

function ArticleCard({ article }) {
  const { setArticles } = useContext(ArticlesContext);
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
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setArticles({
                type: ACTION_ARTICLES.SINGLE,
                payload: article,
              })
            }
          >
            Read More...
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
