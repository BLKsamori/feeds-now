import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/LayoutArea/Layout/Layout";
import ArticlesContext from "./Context/ArticlesContext";
import ArticlesReducer from "./Context/ArticlesReducer";
import ArticlesModel from "./model/ArticlesModel";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const [articles, setArticles] = useReducer(ArticlesReducer, ArticlesModel);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ArticlesContext.Provider
          value={{ articles: articles, setArticles: setArticles }}
        >
          <Layout />
        </ArticlesContext.Provider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
