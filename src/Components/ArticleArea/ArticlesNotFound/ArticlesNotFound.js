import "./ArticlesNotFound.css";

function ArticlesNotFound({ msg, msgHead }) {
  return (
    <div className="ArticlesNotFound">
      <div className="ArticlesNotFoundMSG">
        <h3>{msgHead ? msgHead : " Sorry"},</h3>
        <span>
          {msg
            ? msg
            : "There was no intel for the parameters. Please try again with deferent parameters."}
        </span>
      </div>
    </div>
  );
}

export default ArticlesNotFound;
