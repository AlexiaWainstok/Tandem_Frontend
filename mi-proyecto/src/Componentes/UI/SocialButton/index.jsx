import "./SocialButton.css";

const SocialButton = ({ children, onClick }) => {
  return (
    <button
      className="social-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SocialButton;