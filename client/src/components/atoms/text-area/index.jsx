import clsx from "clsx";
import { useState } from "react";

import "./TextAreaStyles.scss";

const TextArea = ({
  mxWt,
  label,
  name,
  placeholder,
  suffix,
  onChange,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
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
        "text-area-container",
        isFocused ? "border-[#336CFB]" : "border-[#dde2e5]"
      )}
    >
      {label ? <label htmlFor={name}>{label}</label> : null}
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder || "Search"}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      ></textarea>
      {suffix ? <span className="text-area-suffix">{suffix}</span> : null}
    </div>
  );
};

export default TextArea;
