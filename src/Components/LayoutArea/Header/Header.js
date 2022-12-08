import "./Header.css";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { Link } from "react-router-dom";
import UserAvatar from "../../UserAvatar/UserAvatar";
import Logo from "../../../Assets/logo.png";
import Btn from "../../UiComponents/Btn/Btn";
import { useContext } from "react";
import ArticlesContext from "../../../Context/ArticlesContext";

function Header() {
  const { articles } = useContext(ArticlesContext);
  const avatarLoginStyle = {
    color: "var(--primary)",
    border: "1px solid var(--primary)",
    borderRadius: "2px",
  };
  return (
    <div className="Header">
      <Btn>
        <BorderAllIcon />
      </Btn>

      <Link to="/home">
        <div className="headerMiddle">
          <img className="logo" src={Logo} />
          <h1>Feeds Now {articles.currentPage}</h1>
        </div>
      </Link>

      <div className="AvatarLogin">
        <div>
          <Btn title="register" BtnStyle={avatarLoginStyle} />
          <Btn title="login" BtnStyle={avatarLoginStyle} />
        </div>
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;
