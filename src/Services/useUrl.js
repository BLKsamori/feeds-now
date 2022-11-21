import { useState } from "react";
import appConfig from "../Config/AppConfig";

function useUrl() {
  const [dataStatus, setDataStatus] = useState(false);
  const [url, setUrl] = useState("");
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
  const checkData = (data) => {
    setDataStatus(true);
    console.log("checkData");
    console.log(data);
    console.log("--checkData");
    for (const key in data) {
      const val = data[key];
      switch (key) {
        case "question":
          if (val === "" || isNaN(val) || val === undefined) {
            setDataStatus(false);
            console.log("question NAN");
            console.log(val);
          }
          break;

        case "Info":
          if (val === "" || isNaN(val) || val === undefined) {
            setDataStatus(false);
            console.log("Info NAN");
          }
          break;

        default:
          break;
      }
    }

    const Info = "/" + data?.Info;
    const question = data?.question ? "?q=" + data?.question : "";
    const sortBy = data?.sortBy ? "&sortBy=" + data?.sortBy : "";
    const sources = data?.sources ? "sources=" + data?.sources : "";
    const category = data?.category ? "category=" + data?.category : "";
    const newUrl = Info + question + sortBy + sources + category;
    const finalUrl = appConfig.baseUrl + newUrl + appConfig.APIkey;
    console.log(finalUrl);
    setUrl(finalUrl);
  };
  return [checkData, dataStatus, url];
}
export default useUrl;
