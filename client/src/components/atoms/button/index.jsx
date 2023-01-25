import clsx from "clsx";

import "./ButtonStyles.scss";

const Button = ({
  mxWt,
  prefix,
  suffix,
  label,
  isLoading,
  isDisabled,
  type,
  ht,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "button",
        ht || "h-10",
        mxWt || "max-w-[7.5rem]",
        isDisabled ? "disabled-btn" : type || "primary-btn"
      )}
      disabled={isDisabled}
    >
      {isLoading ? (
        <span
          className={clsx(
            "btn-loader",
            type === "outline-btn" ? "btn-loader-outline" : "btn-loader-primary"
          )}
        ></span>
      ) : (
        <>
          {prefix ? prefix : null}
          {label}
          {suffix ? suffix : null}
        </>
      )}
    </button>
  );
};

export default Button;
