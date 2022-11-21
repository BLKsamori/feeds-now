import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/LayoutArea/Layout/Layout";
import ArticlesContext from "./Context/ArticlesContext";
import ArticlesReducer from "./Context/ArticlesReducer";
import ArticlesModel from "./model/ArticlesModel";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";

function App() {
  const [articles, setArticles] = useReducer(ArticlesReducer, ArticlesModel);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ArticlesContext.Provider
            value={{ articles: articles, setArticles: setArticles }}
          >
            <Layout />
          </ArticlesContext.Provider>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
