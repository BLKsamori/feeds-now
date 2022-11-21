import "./PageNotFound.css";

function PageNotFound() {
  const imgSrc =
    "https://images.nappy.co/uploads/large/20191208-7z8a1532-scaled-21595700141nq6mjgenafs9s7u8mqqpacvg6bquht9qwmnmhjrzzyvbihezo6iw8lptq97iqp1jhmbvhlb3jrzbcmsuvxcxyil6ejhzosjdzao6.jpg?auto=format&w=1280&q=75";
  return (
    <div className="PageNotFound">
      <h2>PageNotFound</h2>
      <img src={imgSrc} />
    </div>
  );
}

export default PageNotFound;
