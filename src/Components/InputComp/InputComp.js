import ObjToArr from "../../Services/ObjToArr";
import "./InputComp.css";

function InputComp({ input, handle }) {
  let InputComp = "";

  switch (input.type) {
    case "select":
      const options = ObjToArr(input.options);
      InputComp = (
        <select
          className="InputComp"
          name={input.name}
          label={input.label}
          {...handle(input.name)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt?.label ? opt.label : opt.name}
            </option>
          ))}
        </select>
      );
      break;

    case "date":
      InputComp = (
        <input
          type="date"
          label={input.label}
          name={input.name}
          {...handle(input.name)}
          className="InputComp"
        />
      );
      break;

    case "time":
      InputComp = (
        <input
          type="time"
          label={input.label}
          name={input.name}
          // defaultValue="07:30"
          {...handle(input.name)}
          className="InputComp"
        />
      );
      break;

    case "local-Date":
      InputComp = (
        <input
          type="datetime-local"
          className="InputComp"
          label={input.label}
          name={input.name}
          // defaultValue="2017-05-24T10:30"
          {...handle(input.name)}
        />
      );
      break;

    default:
      InputComp = (
        <input
          type="text"
          name={input.name}
          placeholder={input.name}
          {...handle(input.name)}
          className="InputComp"
        />
      );
      break;
  }

  return <div className="InputCompWrapper">{InputComp}</div>;
}

export default InputComp;
