import { useState } from "react";
import clsx from "clsx";
import CaretDown from "../vectors/CaretDown";
import "./SelectStyles.scss";

const Select = ({
  mxWt,
  label,
  name,
  placeholder = "Select your value",
  title,
  onClick = () => {},
  options = ["Select", "Selected", "myopia"],
}) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleOpenSubmenu = () => {
    setOpenSubmenu((prev) => !prev);
  };
  const handleSelect = (params) => {
    setOpenSubmenu((prev) => !prev);
    onClick(params);
  };
  return (
    <div className={clsx(mxWt || "max-w-full", "select-container")}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <div
        className="flex items-center justify-between w-full"
        onClick={handleOpenSubmenu}
      >
        {title || placeholder}
        <span
          className={clsx(
            "sidebar-toggle-btn cursor-pointer",
            openSubmenu && "sidebar-open"
          )}
        >
          <CaretDown />
        </span>
      </div>
      <div className={clsx("select", !openSubmenu ? "hidden" : "flex")}>
        {options.map((op, i) => (
          <span
            key={"select" + i + op}
            onClick={() => handleSelect(op)}
            className={clsx("option")}
          >
            {op}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Select;
