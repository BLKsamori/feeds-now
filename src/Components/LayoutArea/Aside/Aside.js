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
  const NavBtnStyle = {
    width: "100%",
    background: "transparent",
    color: "white",
    borderBottom: "1px solid white",
    display: "flex",
    fontSize: "10px",
    // alignItems: "center",
    gap: "10px",
  };
  const navCLick = {
    onClick: () => setOpenTray(!openTray),
  };
  return (
    <div className={openTray ? "Aside" : "Aside close"}>
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
        <BorderAllIcon {...navCLick} />
      </Btn>
      <div component="nav" aria-label="mailbox folders">
        <Link to="/home">
          <Btn BtnStyle={NavBtnStyle} func={{ ...navCLick }}>
            <HomeIcon />
            <span>Home</span>
          </Btn>
        </Link>

        <Divider />

        <Link to="/feeds">
          <Btn BtnStyle={NavBtnStyle} func={{ ...navCLick }}>
            <NewspaperIcon />
            <span>Feeds</span>
          </Btn>
        </Link>
        <Link to="/bookmarks">
          <Btn BtnStyle={NavBtnStyle} func={{ ...navCLick }}>
            <NewspaperIcon />
            <span>BookMarks</span>
          </Btn>
        </Link>

        <Divider />

        <Link to="/about">
          <Btn BtnStyle={NavBtnStyle} func={{ ...navCLick }}>
            <InfoIcon />
            <span>About</span>
          </Btn>
        </Link>
      </div>
    </div>
  );
}

export default Aside;
