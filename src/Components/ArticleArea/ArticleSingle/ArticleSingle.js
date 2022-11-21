import { useContext } from "react";
import ArticlesContext from "../../../Context/ArticlesContext";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import "./ArticleSingle.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Card } from "@mui/material";

function ArticleSingle() {
  const { articles, setArticles } = useContext(ArticlesContext);
  const article = articles.single;

  if (Object.entries(article).length) {
    return (
      <div className="ArticleSingle">
        <Card variant="outlined">
          <div className="articleContent">
            <div className="SingleSideA">
              <div className="singleHeader">
                <h5>{article.title}</h5>
              </div>

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

            <div className="SingleSideB">
              <img src={article.urlToImage} />
            </div>

            <div className="articleLink">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  variant
                  className="closeBtn"
                  onClick={() =>
                    setArticles({
                      type: ACTION_ARTICLES.RESET_SINGLE,
                    })
                  }
                >
                  X
                </Button>

                <Button variant="contained">
                  <a href={article.url} target="_blank noopener">
                    Go to the Article
                  </a>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ArticleSingle;
