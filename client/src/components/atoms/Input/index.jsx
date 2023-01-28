import clsx from "clsx";
import { useState } from "react";

import SearchIcon from "../vectors/SearchIcon";
import ViewPasswordIcon from "../vectors/EyeIcon";
import HidePasswordIcon from "../vectors/ViewEyeIcon";
import "./InputStyles.scss";

const Input = ({
  mxWt,
  label,
  type = "text",
  name,
  placeholder,
  search,
  prefix,
  suffix,
  onChange,
  value,
  detail,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleHidePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={clsx(
        mxWt || "max-w-full",
        "input-container",
        isFocused ? "border-[#336CFB]" : "border-[#dde2e5]"
      )}
    >
      {prefix ? prefix : search ? <SearchIcon /> : null}
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type === "password" && showPassword ? "password" : "text"}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder || "Search"}
        id={name}
        onChange={onChange}
        value={value}
      />
      {suffix ? (
        suffix
      ) : type === "password" ? (
        <div>
          {showPassword ? (
            <span onClick={handleShowPassword}>
              <ViewPasswordIcon />
            </span>
          ) : (
            <span onClick={handleHidePassword}>
              <HidePasswordIcon />
            </span>
          )}
        </div>
      ) : null}
      {detail ? <span className="input-area-suffix">{detail}</span> : null}
    </div>
  );
};

export default Input;
