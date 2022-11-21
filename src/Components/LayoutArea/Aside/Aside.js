import { Link } from "react-router-dom";
import "./Aside.css";

function Aside() {
  return (
    <div className="Aside">
      <Link to="/home">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Aside;
