import "./Header.css";
import Button from "@mui/material/Button";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { Link } from "react-router-dom";
import UserAvatar from "../../UserAvatar/UserAvatar";
import { ButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";

function Header() {
  return (
    <div className="Header">
      <Button variant="outlined">
        <BorderAllIcon />
      </Button>
      <Link to="/home">
        <h1>Feeds Now</h1>
      </Link>
      <Stack direction="row">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          <Button variant="contained">login</Button>
          <Button variant="outlined">register</Button>
        </ButtonGroup>
        <UserAvatar />
      </Stack>
    </div>
  );
}

export default Header;
