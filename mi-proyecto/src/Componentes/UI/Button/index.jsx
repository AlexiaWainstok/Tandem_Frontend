import "./Button.css";

function Button({ children, type = "button", onClick }) {
//TEXT ES LO QUE VA A TENER, DECIR EL BOTTON 
  return (
    <button
      className="btn-primary"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;