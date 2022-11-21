import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/LayoutArea/Layout/Layout";
import ArticlesContext from "./Context/ArticlesContext";
import ArticlesReducer from "./Context/ArticlesReducer";
import ArticlesModel from "./model/ArticlesModel";

function App() {
  const [articles, setArticles] = useReducer(ArticlesReducer, ArticlesModel);

  return (
    <div className="App">
      <BrowserRouter>
        <ArticlesContext.Provider
          value={{ articles: articles, setArticles: setArticles }}
        >
          <Layout />
        </ArticlesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
