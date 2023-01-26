import clsx from "clsx";

import SearchIcon from "../vectors/SearchIcon";
import "./InputStyles.scss";

const Input = ({ mxWt, label, type, name, placeholder, search, prefix }) => {
  return (
    <div className={clsx(mxWt || "max-w-full", "input-container")}>
      {prefix ? prefix : search ? <SearchIcon /> : null}
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type || "text"}
        placeholder={placeholder || "Search"}
        id={name}
        name={name}
      />
    </div>
  );
};

export default Input;
