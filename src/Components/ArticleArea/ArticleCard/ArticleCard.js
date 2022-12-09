import { useContext } from "react";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import ArticlesContext from "../../../Context/ArticlesContext";
import "./ArticleCard.css";
import articleDefaultImg from "../../../Assets/articleDefaultImg.png";
import Btn from "../../UiComponents/Btn/Btn";

function ArticleCard({ article }) {
  const { setArticles } = useContext(ArticlesContext);
  const articleImg = article.urlToImage
    ? article.urlToImage
    : articleDefaultImg;

  return (
    <div className="ArticleCard">
      {article.bookDay && (
        <div className="bookDate">
          <span>Booked on: {article.bookDay}</span>
          <Btn
            BtnStyle={{
              background: "transparent",
              color: "white",
              width: "auto",
              height: "100%",
              fontSize: "10px",
              margin: "0 10px",
            }}
            func={{
              onClick: () =>
                setArticles({
                  type: ACTION_ARTICLES.REMOVE_ARTICLE_BOOKMARKS,
                  payload: article.title,
                }),
            }}
          >
            X
          </Btn>
        </div>
      )}

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
        <img src={articleImg} alt={article.title} />
        <div className="articleLink">
          <Btn
            func={{
              onClick: () =>
                setArticles({
                  type: ACTION_ARTICLES.SINGLE,
                  payload: article,
                }),
            }}
          >
            Read More...
          </Btn>

          {!article.bookDay && (
            <Btn
              BtnStyle={{
                width: "20px",
                height: "20px",
                backgroundColor: "transparent",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                border: "none",
                filter: "contras(10)",
                backgroundImage:
                  "url(https://cdn-icons-png.flaticon.com/512/758/758688.png)",
              }}
              func={{
                onClick: () =>
                  setArticles({
                    type: ACTION_ARTICLES.ADD_ARTICLE_BOOKMARKS,
                    payload: article,
                  }),
              }}
            ></Btn>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
