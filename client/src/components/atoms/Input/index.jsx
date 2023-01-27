import clsx from "clsx";
import { useState } from "react";

import SearchIcon from "../vectors/SearchIcon";
import ViewPasswordIcon from "../vectors/EyeIcon";
import HidePasswordIcon from "../vectors/ViewEyeIcon";
import "./InputStyles.scss";

const Input = ({
  mxWt,
  label,
  type,
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
  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setInputType("text");
    setShowPassword((prev) => !prev);
  };

  const handleHidePassword = () => {
    setInputType("password");
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={inputType}
        placeholder={placeholder || "Search"}
        id={name}
        name={name}
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
