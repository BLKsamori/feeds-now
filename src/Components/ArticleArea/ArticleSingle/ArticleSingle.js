import { useContext } from "react";
import ArticlesContext from "../../../Context/ArticlesContext";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import "./ArticleSingle.css";
import articleDefaultImg from "../../../Assets/articleDefaultImg.png";
import Btn from "../../UiComponents/Btn/Btn";
import RegexList from "../../../Services/RegexList";

function ArticleSingle() {
  const { articles, setArticles } = useContext(ArticlesContext);
  const article = articles.single;

  const articleImg = article.urlToImage
    ? article.urlToImage
    : articleDefaultImg;

  if (Object.entries(article).length) {
    return (
      <div className="ArticleSingle">
        <div
          className="backDropDark"
          onClick={() =>
            setArticles({
              type: ACTION_ARTICLES.RESET_SINGLE,
            })
          }
        ></div>
        <div className="articleContent">
          <div className="SingleSideA">
            <div className="singleHeader">
              <h2>{article.title}</h2>
            </div>

            <p>
              {article.source.id}
              {article.source.name}
              {article.id}

              {article.author}

              {article.description}
              {article.publishedAt}
              {article?.content &&
                article.content.replace(RegexList.replaceEndContent, "")}
            </p>
          </div>

          <div className="SingleSideB">
            <img src={articleImg} alt={article.title} />
          </div>

          <div className="articleLink">
            <Btn
              title="X"
              className="closeBtn"
              func={{
                onClick: () =>
                  setArticles({
                    type: ACTION_ARTICLES.RESET_SINGLE,
                  }),
              }}
            />

            <Btn>
              <a
                href={article.url}
                target="_blank noopener"
                style={{ color: "var(--primary)" }}
              >
                Go to the Article
              </a>
            </Btn>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleSingle;
