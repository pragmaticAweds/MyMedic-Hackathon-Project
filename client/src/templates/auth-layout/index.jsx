import "./AuthStyles.scss";

const AuthLayout = ({ children, imgUrl, imgAlt }) => {
  return (
    <div className="auth-container">
      <div className="h-full">
        <img
          src={imgUrl || "/img/signup1.webp"}
          alt={imgAlt || "signup-img"}
          className="h-full object-cover"
        />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default AuthLayout;
