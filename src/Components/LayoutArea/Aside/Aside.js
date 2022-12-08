import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import "./Aside.css";
import Btn from "../../UiComponents/Btn/Btn";
import { useState } from "react";

function Aside() {
  const [openTray, setOpenTray] = useState(true);

  const NavWidth = openTray ? "none" : "flex";
  const NavBtnStyle = {
    width: "100%",
    background: "transparent",
    color: "white",
    borderBottom: "1px solid white",
    display: NavWidth,
    alignItem: "start",
    gap: "15px",
  };

  return (
    <div className="Aside">
      <Btn
        BtnStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          width: "100%",
          background: "transparent",
          filter: "invert()",
        }}
        func={{
          onClick: () => setOpenTray(!openTray),
        }}
      >
        <BorderAllIcon />
      </Btn>
      <div component="nav" aria-label="mailbox folders">
        <Link to="/home">
          <Btn title="Home" BtnStyle={NavBtnStyle}>
            <HomeIcon />
          </Btn>
        </Link>

        <Divider />

        <Link to="/feeds">
          <Btn title="Feeds" BtnStyle={NavBtnStyle}>
            <NewspaperIcon />
          </Btn>
        </Link>
        <Link to="/bookmarks">
          <Btn title="BookMarks" BtnStyle={NavBtnStyle}>
            <NewspaperIcon />
          </Btn>
        </Link>

        <Divider />

        <Link to="/about">
          <Btn title="About" BtnStyle={NavBtnStyle}>
            <InfoIcon />
          </Btn>
        </Link>
      </div>
    </div>
  );
}

export default Aside;
