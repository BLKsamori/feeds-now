import { useContext, useState } from "react";
import ACTION_ARTICLES from "../../../Context/ACTION_ARTICLES";
import ArticlesContext from "../../../Context/ArticlesContext";
import FormSearchModel from "../../../model/FormSearchModel";
import ObjToArr from "../../../Services/ObjToArr";
import useAxiosSearch from "../../../Services/useAxiosSearch";
import useForm from "../../../Services/useForm";
import useUrl from "../../../Services/useUrl";
import WaitBanner from "../../Banners/WaitBanner/WaitBanner";
import InputComp from "../../InputComp/InputComp";
import "./SearchForm.css";
import Btn from "../../UiComponents/Btn/Btn";

function SearchForm() {
  const { articles, setArticles } = useContext(ArticlesContext);
  const searchTypesModels = FormSearchModel.searchType;
  const searchFieldsModels = FormSearchModel.searchFields;

  const [searchField, setSearchField] = useState({
    searchTypeName: "",
    searchTypeValue: "",
    arrFields: [],
    arrFieldModel: [],
  });

  const getSearchType = (typeName) => {
    resetForm();

    const newSearchFields = {};
    const fieldsArr = searchTypesModels[typeName].request;
    for (const field of fieldsArr) {
      newSearchFields[field] = { ...searchFieldsModels[field] };
    }
    setSearchField({
      searchTypeName: typeName,
      searchTypeValue: searchTypesModels[typeName].value,
      arrFields: ObjToArr(newSearchFields),
      arrFieldModel: fieldsArr,
    });
  };

  const [handleChanges, data, resetForm] = useForm({
    ...searchFieldsModels,
  });
  const [checkData, dataStatus, url] = useUrl(searchField.searchTypeValue);

  const params = {
    url: url,
    status: dataStatus,
  };
  const [send, err, loading, requestData] = useAxiosSearch(params);

  if (searchField.arrFields.length < 1) {
    const defaultType = ObjToArr(searchTypesModels)[0].name;
    getSearchType(defaultType);
  }

  const sendForm = (e) => {
    e.preventDefault();
    send();
    checkData(data);

    if (requestData !== undefined) {
      console.log("requestData", requestData);
      setArticles({
        type: ACTION_ARTICLES.SEARCH,
        payload: requestData,
      });
      setArticles({
        type: ACTION_ARTICLES.SEARCH_KEYWORD,
        payload: data?.question ? data.question : "",
      });

      resetForm();
    }
  };

  if (err || loading) {
    return <WaitBanner err={err} loading={loading} />;
  }

  return (
    <div className="SearchForm">
      <div className="searchTypes">
        <h3>{searchField.searchTypeName.toUpperCase()}</h3>
        {ObjToArr(searchTypesModels).map((st) => (
          <Btn
            BtnStyle={{ color: "white", background: "var(--darken)" }}
            key={st.name}
            func={{
              onClick: () => {
                getSearchType(st.name);
              },
            }}
          >
            {st.label}
          </Btn>
        ))}
      </div>

      <form onSubmit={sendForm}>
        <div className="searchInputs">
          {searchField.arrFields.map((input) => (
            <InputComp input={input} handle={handleChanges} key={input.name} />
          ))}
          <h2>{articles?.keyWordSearched ? articles?.keyWordSearched : ""} </h2>

          <div className="searchActions">
            <Btn
              BtnStyle={{ color: "white", background: "var(--primary)" }}
              type="submit"
            >
              Search
            </Btn>
            <Btn
              BtnStyle={{ color: "var(--primary)", background: "white" }}
              func={{ onClick: () => resetForm() }}
            >
              reset
            </Btn>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
