import { useState } from "react";
import ObjToArr from "./ObjToArr";

function useForm(model) {
  const [fieldVal, setFieldVal] = useState(model);
  const [data, setData] = useState();
  const [err, setErr] = useState(model);

  const updateValue = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    console.log({ val });
    console.log({ name });
    let newVal = { ...fieldVal };
    newVal[name].value = val;

    validate(name, val);
    setFieldVal(newVal);
    getData(newVal);
  };

  const validate = (name, val) => {
    let errMsg = "";
    for (const key in fieldVal) {
      const valObj = fieldVal.validate;
      switch (key) {
        case "max":
          val > valObj[key].val && (errMsg = valObj[key].msg);
          break;
        case "min":
          val > valObj[key].val && (errMsg = valObj[key].msg);
          break;

        default:
          errMsg = "";
          break;
      }
    }
    const newErr = { ...err };
    newErr[name] = errMsg;
    setErr(err);
  };

  const getData = () => {
    let newData = {};
    for (const key in fieldVal) {
      newData[key] = fieldVal[key].value;
    }
    setData(newData);
    console.log("data");
    console.log(data);
  };

  const resetForm = () => {
    let freshForm = { ...fieldVal };
    for (const key in fieldVal) {
      const inpType = fieldVal[key].type;
      switch (inpType) {
        case "select":
          const firstOption = ObjToArr(fieldVal[key].options)[0];
          freshForm[key].value = firstOption.value;
          break;
        case "text":
          freshForm[key].value = "";
          break;

        default:
          freshForm[key].value = "";
          break;
      }
    }
    setFieldVal(freshForm);
  };

  const handleChanges = (name) => ({
    value: fieldVal[name].value,
    onChange: updateValue,
  });
  return [handleChanges, data, resetForm];
}

export default useForm;
