import axios from "axios";
import { useContext, useEffect, useState } from "react";
import appConfig from "../../../Config/AppConfig";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import ArticlesContext from "../../../Context/ArticlesContext";
import WaitBanner from "../../Banners/WaitBanner/WaitBanner";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout() {
  const { setArticles } = useContext(ArticlesContext);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);

    axios
      .get(appConfig.defaultReq)
      .then((response) => {
        setArticles({
          type: ACTION_ARTICLES.DASHBOARD,
          payload: response.data,
        });
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, [setArticles]);

  if ((err, loading)) {
    return <WaitBanner err={err} loading={loading} />;
  }

  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <aside>
        <Aside />
      </aside>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
