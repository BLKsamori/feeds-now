import ObjToArr from "../../Services/ObjToArr";

function InputComp({ input, handle }) {
  let inputObj;
  switch (input.type) {
    case "select":
      const options = ObjToArr(input.options);
      inputObj = (
        <select
          value={options[0].value}
          name={input.name}
          {...handle(input.name)}
        >
          {options.map((opt) => (
            <option value={opt.value} key={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputObj = (
        <input
          {...handle(input.name)}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      );
      break;
  }
  return (
    <label key={input.name}>
      <span>{input.label}</span>
      {inputObj}
    </label>
  );
}

export default InputComp;
