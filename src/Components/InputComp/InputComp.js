import ObjToArr from "../../Services/ObjToArr";
import { MenuItem, Select, TextField } from "@mui/material";

function InputComp({ input, handle }) {
  switch (input.type) {
    case "select":
      const options = ObjToArr(input.options);
      return (
        <Select
          variant="outlined"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={input.name}
          label={input.label}
          {...handle(input.name)}
        >
          {options.map((opt) => (
            <MenuItem value={opt.value} key={opt.label}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      );
    case "date":
      return (
        <TextField
          variant="outlined"
          id="date"
          label={input.label}
          type="date"
          name={input.name}
          // defaultValue="2017-05-24"
          {...handle(input.name)}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      );

    case "time":
      return (
        <TextField
          variant="outlined"
          id="time"
          label={input.label}
          type="time"
          name={input.name}
          // defaultValue="07:30"
          {...handle(input.name)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ width: 150 }}
        />
      );
    case "local-Date":
      return (
        <TextField
          variant="outlined"
          id="datetime-local"
          label={input.label}
          name={input.name}
          type="datetime-local"
          // defaultValue="2017-05-24T10:30"
          {...handle(input.name)}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      );

    default:
      return (
        <TextField
          id="outlined-name"
          name={input.name}
          label="Name"
          {...handle(input.name)}
        />
      );
  }
}

export default InputComp;
