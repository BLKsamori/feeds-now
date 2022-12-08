import "./Btn.css";

function Btn({ title, func, BtnStyle, btnRoll, children, btnState }) {
  const styledBtn = {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "2px",
    ...BtnStyle,
  };
  const btnProps = { title, func, BtnStyle, btnRoll, children, btnState };

  return (
    <button style={styledBtn} className="Btn" {...func}>
      {children}
      {title}
    </button>
  );
}

export default Btn;

//example
// func={{
//     onClick: () =>
//       setArticles({
//         type: ACTION_ARTICLES.RESET_SINGLE,
//       }),
//   }}
