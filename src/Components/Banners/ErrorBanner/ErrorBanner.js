import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorBanner.css";

function ErrorBanner({ msg }) {
  const [errGone, setErrGone] = useState(false);
  const navigate = useNavigate();

  if (errGone) {
    navigate("/home");
  }
  const defaultMsg = (
    <>
      Something just broke, sorry
      <br />
    </>
  );

  return (
    <div className="ErrorBanner">
      <div className="backDropDark"></div>
      <div className="message">
        <h2>Error</h2>
        <span>{msg ? msg : defaultMsg}</span>
        <br />
        <button onClick={() => setErrGone(true)}>Take Me Home</button>
      </div>
    </div>
  );
}

export default ErrorBanner;
