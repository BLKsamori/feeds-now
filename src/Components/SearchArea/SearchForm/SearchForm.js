import { useContext, useEffect } from "react";
import ACTION_ARTICLES from "../../../Context/ ACTION_ARTICLES";
import ArticlesContext from "../../../Context/ArticlesContext";
import FormSearchModel from "../../../model/FormSearchModel";
import ObjToArr from "../../../Services/ObjToArr";
import useAxiosSearch from "../../../Services/useAxiosSearch";
import useForm from "../../../Services/useForm";
import useUrl from "../../../Services/useUrl";
import WaitBanner from "../../Banners/WaitBanner/WaitBanner";
import InputComp from "../../InputComp/InputComp";
import "./SearchForm.css";

function SearchForm() {
  const { setArticles } = useContext(ArticlesContext);
  const [handleChanges, data, resetForm] = useForm(
    FormSearchModel.searchFields
  );
  const [checkData, dataStatus, url] = useUrl();

  const params = {
    url: url,
    status: dataStatus,
  };
  const [send, err, loading, requestData] = useAxiosSearch(params);

  useEffect(() => {
    checkData(data);
    if (requestData !== undefined) {
      console.log("requestData");
      console.log(requestData);
      setArticles({
        type: ACTION_ARTICLES.SEARCH,
        payload: requestData,
      });
    }
  }, [data, loading]);

  const sendForm = (e) => {
    e.preventDefault();
    send();
    resetForm();
  };

  if ((err, loading)) {
    return <WaitBanner err={err} loading={loading} />;
  }

  return (
    <div className="SearchForm">
      <form onSubmit={sendForm}>
        {ObjToArr(FormSearchModel.searchFields).map((input) => (
          <InputComp input={input} handle={handleChanges} key={input.name} />
        ))}
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
