import clsx from "clsx";

import "./TextAreaStyles.scss";

const TextArea = ({ mxWt, label, name, placeholder, suffix }) => {
  return (
    <div className={clsx(mxWt || "max-w-full", "input-container")}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <textarea
        placeholder={placeholder || "Search"}
        id={name}
        name={name}
      ></textarea>
      {suffix ? <span className="text-area-suffix">{suffix}</span> : null}
    </div>
  );
};

export default TextArea;
