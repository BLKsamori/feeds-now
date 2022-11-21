import axios from "axios";
import { useState } from "react";

function useAxiosSearch(params) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const send = () => {
    console.log("params.url");
    console.log(params.url);
    console.log("params.url");

    if (!params.status) {
      console.log("missing inputs");
      return;
    }
    setLoading(true);
    axios
      .get(params.url)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
      });
  };
  return [send, err, loading, data];
}

export default useAxiosSearch;
