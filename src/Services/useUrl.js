import { useState } from "react";
import appConfig from "../Config/AppConfig";

function useUrl(typeOfInfo) {
  const [dataStatus, setDataStatus] = useState(false);
  const [url, setUrl] = useState("");
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
  const checkData = (data) => {
    setDataStatus(true);
    if (!typeOfInfo) {
      setDataStatus(false);
      return;
    }

    // (" https://newsapi.org/v2/everything?q=apple&from=2022-12-05&to=2022-12-05&sortBy=popularity&apiKey=");

    const InfoType = "/" + typeOfInfo + "/";
    const question = data?.question ? "q=" + data.question : "";
    const from = data?.from ? "&from=" + data.from : "";
    const to = data?.to ? "&to=" + data.to : "";
    const sortBy = data?.sortBy ? "&sortBy=" + data.sortBy : "";
    const sources = data?.sources ? "&sources=" + data.sources : "";
    const category = data?.category ? "&category=" + data.category : "";
    const language = data?.language ? "&category=" + data.language : "";
    const country = data?.country ? "&country=" + data.country : "";
    const newUrl =
      InfoType +
      "?" +
      question +
      from +
      to +
      sortBy +
      sources +
      language +
      category +
      country;
    const finalUrl = appConfig.baseUrl + newUrl + appConfig.APIkey;
    console.log("finalUrl", finalUrl);
    setUrl(finalUrl);
  };
  return [checkData, dataStatus, url];
}
export default useUrl;
