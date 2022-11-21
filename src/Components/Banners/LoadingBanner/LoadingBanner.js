import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingBanner.css";

function LoadingBanner() {
  const [loadingGone, setLoadingGone] = useState(false);

  const navigate = useNavigate();

  if (loadingGone) {
    navigate("/home");
  }
  return (
    <div className="LoadingBanner">
      <div className="banner">
        <h2>Loading...</h2>
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <button onClick={() => setLoadingGone(true)}>Take Me Home</button>
      </div>
    </div>
  );
}

export default LoadingBanner;
