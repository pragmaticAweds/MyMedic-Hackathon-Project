import clsx from "clsx";

import SearchIcon from "../vectors/SearchIcon";
import "./InputStyles.scss";

const Input = ({ mxWt, label, type, name }) => {
  return (
    <div className={clsx(mxWt || "max-w-full", "input-container")}>
      <SearchIcon />
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input type={type || "text"} placeholder="Search" id={name} name={name} />
    </div>
  );
};

export default Input;
